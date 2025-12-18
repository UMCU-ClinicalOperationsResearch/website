"use client";

import { groupPubMedConfig } from "@/data/pubmed";
import { teamMembers } from "@/data/team";
import { useState, useEffect } from "react";
import type { PubMedArticle } from "@/lib/pubmed";
import { getGroupPublications, getAuthorPublications } from "@/lib/pubmed";

export default function PublicationsPage() {
  const [publications, setPublications] = useState<PubMedArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAuthor, setSelectedAuthor] = useState<string>("all");

  useEffect(() => {
    async function fetchPublications() {
      setLoading(true);
      try {
        let pubs;
        
        if (selectedAuthor && selectedAuthor !== "all") {
          // Extract search query from author name
          let searchQuery;
          
          if (selectedAuthor === "Dr. L.M. van Loon") {
            searchQuery = "van Loon LM";
          } else if (selectedAuthor === "Dr. T.H. Kappen" || selectedAuthor === "Dr. Teus Kappen") {
            searchQuery = "Kappen TH";
          } else if (selectedAuthor === "Drs. Erik Koomen" || selectedAuthor === "Drs. E. Koomen") {
            searchQuery = "Koomen E";
          } else if (selectedAuthor === "Dr. J. Nijman" || selectedAuthor === "Dr. Joppe Nijman") {
            searchQuery = "Nijman J";
          } else if (selectedAuthor === "Ruben Zoodsma") {
            searchQuery = "Zoodsma R";
          } else if (selectedAuthor === "Dr. Martine Breteler") {
            searchQuery = "Breteler M";
          } else {
            // Generic handling
            const nameParts = selectedAuthor.split(" ");
            const lastName = nameParts[nameParts.length - 1];
            const initials = nameParts
              .slice(0, -1)
              .map(part => part.charAt(0))
              .join("");
            searchQuery = `${lastName} ${initials}`;
          }
          
          pubs = await getAuthorPublications(searchQuery, 20);
        } else {
          // Fetch publications for all team members
          pubs = await getGroupPublications(["Kappen TH", "van Loon LM"], 20);
        }
        
        setPublications(pubs);
      } catch (error) {
        console.error("Error fetching publications:", error);
        setPublications([]);
      } finally {
        setLoading(false);
      }
    }

    fetchPublications();
  }, [selectedAuthor]);

  // Get authors with PubMed URLs
  const authorsWithPubmed = teamMembers.filter(member => member.pubmedUrl);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Publications</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
        Our research publications from PubMed
      </p>

      {/* Group PubMed Link Section */}
      <div className="mb-12 p-8 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-xl border-2 border-blue-200 dark:border-blue-800 shadow-lg">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">View All Publications</h2>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              Browse our complete publication record on PubMed, including all papers co-authored by our team members.
            </p>
            <a
              href={groupPubMedConfig.groupSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition shadow-lg hover:shadow-xl text-lg font-semibold"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View Complete List on PubMed
            </a>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <label htmlFor="author-filter" className="text-lg font-semibold">
            Filter by Author:
          </label>
          <select
            id="author-filter"
            value={selectedAuthor}
            onChange={(e) => setSelectedAuthor(e.target.value)}
            className="px-4 py-2 border-2 border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[250px]"
          >
            <option value="all">All Team Members</option>
            {authorsWithPubmed.map((member) => (
              <option key={member.id} value={member.name}>
                {member.name}
              </option>
            ))}
          </select>
          {selectedAuthor !== "all" && (
            <button
              onClick={() => setSelectedAuthor("all")}
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Clear filter
            </button>
          )}
        </div>
      </div>

      {/* Recent Publications */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">
          {selectedAuthor === "all" ? "Recent Publications" : `Publications by ${selectedAuthor}`}
        </h2>
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-500">Loading publications from PubMed...</p>
          </div>
        ) : publications.length > 0 ? (
          <div className="space-y-6">
            {publications.map((pub) => (
              <div
                key={pub.pmid}
                className="card-hover border-2 border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white dark:bg-gray-900"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                  {pub.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {pub.authors.length > 0 ? pub.authors.join(', ') : 'Authors not available'}
                  {pub.authors.length >= 10 && ', et al.'}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">
                  <span className="font-semibold">{pub.journal}</span>
                  {pub.year && ` (${pub.year})`}
                  {pub.doi && (
                    <span className="ml-2">
                      • DOI: <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{pub.doi}</a>
                    </span>
                  )}
                </p>
                {pub.abstract && (
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {pub.abstract}
                  </p>
                )}
                <div className="flex gap-4">
                  <a
                    href={pub.pubmedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View on PubMed
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            <p>No publications found{selectedAuthor !== "all" ? ` for ${selectedAuthor}` : ""}.</p>
          </div>
        )}
      </div>

      {/* Individual Author Publications */}
      <div>
        <h2 className="text-3xl font-bold mb-8">Publications by Team Member</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {authorsWithPubmed.map((member) => (
            <div 
              key={member.id} 
              className="card-hover border-2 border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white dark:bg-gray-900"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-xl font-bold text-white flex-shrink-0">
                  {member.initials}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{member.role}</p>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => setSelectedAuthor(member.name)}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                      </svg>
                      Filter Publications
                    </button>
                    <a
                      href={member.pubmedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 font-semibold"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      View on PubMed
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Box */}
      <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
        <h3 className="text-lg font-semibold mb-3 flex items-center">
          <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          About This Page
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Publications are automatically fetched from PubMed using their public API. The list shows our most recent publications 
          and is updated regularly. For the complete and most up-to-date list, please visit PubMed directly.
        </p>
      </div>
    </div>
  );
}
