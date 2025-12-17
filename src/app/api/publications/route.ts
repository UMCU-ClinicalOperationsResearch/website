import { NextRequest, NextResponse } from "next/server";
import { getGroupPublications, getAuthorPublications } from "@/lib/pubmed";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const author = searchParams.get("author");

  try {
    let publications;

    if (author && author !== "all") {
      // Fetch publications for a specific author
      // Extract last name and initials from full name
      const nameParts = author.split(" ");
      let searchQuery;
      
      if (author === "L.M. van Loon") {
        searchQuery = "van Loon LM";
      } else if (author === "Dr. T.H. Kappen") {
        searchQuery = "Kappen TH";
      } else {
        // Generic handling - take last part as last name
        const lastName = nameParts[nameParts.length - 1];
        const initials = nameParts
          .slice(0, -1)
          .map(part => part.charAt(0))
          .join("");
        searchQuery = `${lastName} ${initials}`;
      }
      
      publications = await getAuthorPublications(searchQuery, 20);
    } else {
      // Fetch publications for all team members
      publications = await getGroupPublications(["Kappen TH", "van Loon LM"], 20);
    }

    return NextResponse.json(publications);
  } catch (error) {
    console.error("Error fetching publications:", error);
    return NextResponse.json(
      { error: "Failed to fetch publications" },
      { status: 500 }
    );
  }
}
