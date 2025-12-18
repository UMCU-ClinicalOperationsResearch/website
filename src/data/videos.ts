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
    title: "Smart Alarm Systems: Reducing ICU Alarm Fatigue",
    description: "An overview of our flagship research on intelligent alarm management in intensive care units and the Smart and Silent ICU (SASICU) initiative.",
    duration: "TBA",
    embedUrl: "", // Add YouTube embed URL here: https://www.youtube.com/embed/VIDEO_ID
  },
  {
    id: "2",
    title: "Machine Learning for Alarm Classification",
    description: "How we use artificial intelligence and synthetic data to distinguish clinically relevant alarms from false alerts in the PICU.",
    duration: "TBA",
    embedUrl: "", // Add YouTube embed URL here
  },
  {
    id: "3",
    title: "Clinical Decision Support in Perioperative Care",
    description: "Implementing data-driven prediction models to improve surgical outcomes and support anesthesiologists.",
    duration: "TBA",
    embedUrl: "", // Add YouTube embed URL here
  },
  {
    id: "4",
    title: "Medical Digital Twins for Cardiovascular Monitoring",
    description: "Using physics-based models and machine learning to create personalized cardiovascular simulations for critical care.",
    duration: "TBA",
    embedUrl: "", // Add YouTube embed URL here
  },
];
