// PubMed E-utilities API integration
// Documentation: https://www.ncbi.nlm.nih.gov/books/NBK25501/

const PUBMED_API_BASE = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils';

export interface PubMedArticle {
  pmid: string;
  title: string;
  authors: string[];
  journal: string;
  year: string;
  abstract?: string;
  doi?: string;
  pubmedUrl: string;
}

/**
 * Search PubMed and return article IDs
 */
async function searchPubMed(query: string, maxResults: number = 10): Promise<string[]> {
  try {
    const searchUrl = `${PUBMED_API_BASE}/esearch.fcgi?db=pubmed&term=${encodeURIComponent(query)}&retmode=json&retmax=${maxResults}&sort=date`;
    
    const response = await fetch(searchUrl, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error('PubMed search failed');
    }
    
    const data = await response.json();
    return data.esearchresult?.idlist || [];
  } catch (error) {
    console.error('Error searching PubMed:', error);
    return [];
  }
}

/**
 * Fetch detailed article information from PubMed
 */
async function fetchArticleDetails(pmids: string[]): Promise<PubMedArticle[]> {
  if (pmids.length === 0) return [];
  
  try {
    const fetchUrl = `${PUBMED_API_BASE}/efetch.fcgi?db=pubmed&id=${pmids.join(',')}&retmode=xml`;
    
    const response = await fetch(fetchUrl, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error('PubMed fetch failed');
    }
    
    const xmlText = await response.text();
    return parseArticlesFromXML(xmlText);
  } catch (error) {
    console.error('Error fetching PubMed articles:', error);
    return [];
  }
}

/**
 * Parse XML response from PubMed
 */
function parseArticlesFromXML(xml: string): PubMedArticle[] {
  const articles: PubMedArticle[] = [];
  
  // Simple XML parsing (in production, consider using a proper XML parser)
  const articleMatches = xml.matchAll(/<PubmedArticle>([\s\S]*?)<\/PubmedArticle>/g);
  
  for (const match of articleMatches) {
    const articleXml = match[1];
    
    // Extract PMID
    const pmidMatch = articleXml.match(/<PMID[^>]*>(\d+)<\/PMID>/);
    const pmid = pmidMatch ? pmidMatch[1] : '';
    
    // Extract title
    const titleMatch = articleXml.match(/<ArticleTitle>([\s\S]*?)<\/ArticleTitle>/);
    const title = titleMatch ? stripHtmlTags(titleMatch[1]) : 'Untitled';
    
    // Extract authors
    const authors: string[] = [];
    const authorMatches = articleXml.matchAll(/<Author[^>]*>[\s\S]*?<LastName>(.*?)<\/LastName>[\s\S]*?(?:<ForeName>(.*?)<\/ForeName>)?[\s\S]*?<\/Author>/g);
    for (const authorMatch of authorMatches) {
      const lastName = authorMatch[1];
      const foreName = authorMatch[2] || '';
      authors.push(foreName ? `${lastName} ${foreName.charAt(0)}` : lastName);
    }
    
    // Extract journal
    const journalMatch = articleXml.match(/<Title>(.*?)<\/Title>/);
    const journal = journalMatch ? stripHtmlTags(journalMatch[1]) : 'Unknown Journal';
    
    // Extract year
    const yearMatch = articleXml.match(/<PubDate>[\s\S]*?<Year>(\d{4})<\/Year>/);
    const year = yearMatch ? yearMatch[1] : '';
    
    // Extract abstract
    const abstractMatch = articleXml.match(/<AbstractText[^>]*>([\s\S]*?)<\/AbstractText>/);
    const abstract = abstractMatch ? stripHtmlTags(abstractMatch[1]) : undefined;
    
    // Extract DOI
    const doiMatch = articleXml.match(/<ArticleId IdType="doi">(.*?)<\/ArticleId>/);
    const doi = doiMatch ? doiMatch[1] : undefined;
    
    if (pmid) {
      articles.push({
        pmid,
        title,
        authors: authors.slice(0, 10), // Limit to first 10 authors
        journal,
        year,
        abstract: abstract ? truncateText(abstract, 300) : undefined,
        doi,
        pubmedUrl: `https://pubmed.ncbi.nlm.nih.gov/${pmid}/`
      });
    }
  }
  
  return articles;
}

/**
 * Strip HTML tags from text
 */
function stripHtmlTags(text: string): string {
  return text.replace(/<[^>]*>/g, '').trim();
}

/**
 * Truncate text to specified length
 */
function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
}

/**
 * Main function to get publications from PubMed
 */
export async function getPubMedPublications(searchQuery: string, maxResults: number = 10): Promise<PubMedArticle[]> {
  const pmids = await searchPubMed(searchQuery, maxResults);
  return await fetchArticleDetails(pmids);
}

/**
 * Get publications for a specific author
 */
export async function getAuthorPublications(authorName: string, maxResults: number = 10): Promise<PubMedArticle[]> {
  return getPubMedPublications(`${authorName}[Author]`, maxResults);
}

/**
 * Get publications for multiple authors (group)
 */
export async function getGroupPublications(authorQueries: string[], maxResults: number = 20): Promise<PubMedArticle[]> {
  const combinedQuery = authorQueries.map(q => `(${q}[Author])`).join(' OR ');
  return getPubMedPublications(combinedQuery, maxResults);
}
