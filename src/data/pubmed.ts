// Group-wide PubMed search configuration
export const groupPubMedConfig = {
  // Combined search for all group members
  groupSearchUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=Kappen+TH[Author]+OR+van+Loon+LM[Author]",
  groupName: "Clinical Operations Research Group",
  
  // Alternative: Use affiliation-based search
  // affiliationSearchUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=University+Medical+Center+Utrecht[Affiliation]",
};

// Helper function to construct PubMed search URLs
export function buildPubMedAuthorUrl(lastName: string, initials: string): string {
  return `https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(lastName + ' ' + initials)}[Author]`;
}

// Helper to build group search with multiple authors
export function buildGroupPubMedUrl(authors: Array<{ lastName: string; initials: string }>): string {
  const searchTerms = authors.map(
    (author) => `${encodeURIComponent(author.lastName + ' ' + author.initials)}[Author]`
  ).join(' OR ');
  
  return `https://pubmed.ncbi.nlm.nih.gov/?term=${searchTerms}`;
}
