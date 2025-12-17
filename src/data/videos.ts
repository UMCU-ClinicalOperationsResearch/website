export interface Video {
  id: string;
  title: string;
  description: string;
  duration: string;
  embedUrl?: string;
  thumbnailUrl?: string;
}

export const videos: Video[] = [
  {
    id: "1",
    title: "Introduction to Our Research",
    description: "An overview of our research goals, methodologies, and recent achievements.",
    duration: "10:45",
    embedUrl: "", // Add YouTube embed URL here: https://www.youtube.com/embed/VIDEO_ID
  },
  {
    id: "2",
    title: "Machine Learning in Genomics",
    description: "Explaining how we apply machine learning techniques to genomic data analysis.",
    duration: "15:30",
    embedUrl: "", // Add YouTube embed URL here
  },
  {
    id: "3",
    title: "Protein Structure Prediction Methods",
    description: "A detailed look at our novel approach to predicting protein structures using deep learning.",
    duration: "12:20",
    embedUrl: "", // Add YouTube embed URL here
  },
  {
    id: "4",
    title: "Lab Tour and Team Introduction",
    description: "Meet our team and explore our research facilities.",
    duration: "8:15",
    embedUrl: "", // Add YouTube embed URL here
  },
];
