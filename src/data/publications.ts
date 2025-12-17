export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  abstract: string;
  doi?: string;
  link?: string;
  pdf?: string;
}

export const publications: Publication[] = [
  {
    id: "1",
    title: "Optimization of Perioperative Resource Allocation Using Machine Learning",
    authors: ["Kappen, T.H.", "Smith, J.", "van der Berg, M."],
    journal: "Anesthesiology",
    year: 2024,
    abstract:
      "This study presents novel approaches for optimizing operating room scheduling and resource allocation using machine learning methodologies. Our approach demonstrates significant improvements in efficiency and patient outcomes.",
    doi: "10.1097/example.2024.001",
    link: "https://pubmed.ncbi.nlm.nih.gov/?term=Kappen+TH",
  },
  {
    id: "2",
    title: "Clinical Decision Support Systems in Perioperative Care",
    authors: ["Smith, J.", "Kappen, T.H.", "de Vries, P."],
    journal: "Journal of Clinical Monitoring and Computing",
    year: 2023,
    abstract:
      "We introduce a comprehensive framework for implementing clinical decision support systems in perioperative settings, with applications in risk stratification and personalized care planning.",
    doi: "10.1007/example.2023.002",
    link: "https://pubmed.ncbi.nlm.nih.gov/",
  },
  {
    id: "3",
    title: "Data-Driven Approaches to Healthcare Operations Management",
    authors: ["Johnson, S.", "Kappen, T.H.", "Smith, J."],
    journal: "Health Care Management Science",
    year: 2024,
    abstract:
      "Our research explores data-driven methodologies for improving healthcare operations, including patient flow optimization, capacity planning, and quality improvement initiatives.",
    doi: "10.1007/example.2024.003",
    link: "https://pubmed.ncbi.nlm.nih.gov/",
  },
];
