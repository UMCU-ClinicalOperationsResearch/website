export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  interests: string[];
  email?: string;
  initials: string;
  pubmedUrl?: string;
  photo?: string;
  funFact?: string;
  category?: 'staff' | 'student';
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Dr. Teus Kappen",
    role: "Associate Professor - Medical",
    initials: "TK",
    bio: "Dr. Teus Kappen trained as a medical doctor at Utrecht University (1999-2005). After graduation, he worked at the pediatric intensive care unit of the WKZ, then completed his residency in anesthesiology at UMC Utrecht under prof. dr. J.T.A. Knape in 2013, followed by a fellowship in pediatric intensive care. He obtained his Ph.D. in 2015 on implementing prediction models for clinical decision support and his Master of Science in Clinical Epidemiology in 2009, registering as an Epidemiologist B in 2021. From 2015, he pursued a postdoctoral fellowship at Vanderbilt University Medical Center's Perioperative Informatics Research Group, Nashville, TN, participating in data-driven research projects on clinical decision support development and implementation. His central research question is: 'how can computers help healthcare providers make better decisions?' This multidisciplinary research involves collaborations across Information Technology, Statistics, Public Governance, Business Process Management, Usability & Design Thinking, and Artificial Intelligence. In 2019 he became Chief Science Information Officer of UMC Utrecht and was appointed associate professor, focused on employing data to improve healthcare processes. In 2021 he became product manager of the new data platform of UMC Utrecht.",
    interests: ["Clinical Decision Support", "Perioperative Medicine", "Data Science", "Clinical Epidemiology", "Healthcare Process Improvement", "Artificial Intelligence", "Anesthesiology"],
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=Kappen+TH&cauthor_id=41076587",
    photo: "/images/team/kappen.jpg",
    funFact: "Once cycled 200km in a day just to prove his cardiovascular research wasn't just theoretical.",
    category: 'staff',
  },
  {
    id: "2",
    name: "Drs. Erik Koomen",
    role: "Pediatric Cardiologist, Anesthesiologist & Pediatric Intensivist",
    initials: "EK",
    bio: "Passionate anesthesiologist dedicated to pediatric intensive care. Trained in Maastricht as an anesthesiologist and partly in Auckland, NZ on the PICU, then worked 5 years as pediatric intensivist and pediatric anesthesiologist in Sophia Children's Hospital Rotterdam. Since 2009 working at WKZ, partly in pediatric cardio OR and partly in pediatric ICU, and from 2014 fully dedicated to pediatric ICU with interest in pathophysiology of ventilation, cardiac patients and optimization of care processes. Leading the new Pediatric ICU construction and developing internationally with companies towards better alarm systems, data use in workflows and scientific foundation for our highly heterogeneous ICU population.",
    interests: ["Pediatric Cardio Care", "Innovation & New Pediatric ICU Construction", "Data Science", "UIX", "Workflow Optimization", "Medical Device Optimization", "Alarm System Optimization", "Data Integration in Healthcare"],
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=Koomen+E&cauthor_id=39147988",
    photo: "/images/team/koomen.jpg",
    funFact: "Has a secret talent for building IKEA furniture without instructions—a skill suspiciously useful for ICU construction planning.",
    category: 'staff',
  },
  {
    id: "3",
    name: "Dr. Joppe Nijman",
    role: "Pediatric Intensivist",
    initials: "JN",
    bio: "Pediatric intensivist and clinical researcher at UMC Utrecht. Started academic career in 2002 with a bachelor in Biology/Biomedical Sciences at Utrecht University, followed by the Selective Utrecht Medical Master (SUMMA) completed in 2011. Obtained his doctorate in 2013 from Utrecht University on 'Postnatally acquired Cytomegalovirus infections in premature newborns'. Completed pediatrics training in 2018 at Wilhelmina Children's Hospital in Utrecht, followed by a pediatric intensive care fellowship. As principal investigator of the Pediatric Cardiac Critical Care & Data Science research group, he strives to improve the prognosis of infants with congenital heart defects using advanced (neuro)monitoring and artificial intelligence. Currently co-chair of the Data Science working group and the Neurocritical care section of the European Society for Pediatric and Neonatal Intensive Care (ESPNIC) and member of the European Association Brain in Congenital Heart Disease consortium (EUR-ABC).",
    interests: ["Pediatric Intensive Care", "Pediatric Cardiology in ICU", "(Neuro)monitoring", "Data Science", "Artificial Intelligence", "Innovation"],
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=Nijman+J",
    photo: "/images/team/nijman.jpg",
    funFact: "Champion at medical Pictionary—can draw a perfect congenital heart defect in under 30 seconds.",
    category: 'staff',
  },
  {
    id: "4",
    name: "Dr. Lex van Loon",
    role: "Assistant Professor | Technical Physician | PhD",
    initials: "LL",
    bio: "Dr. Lex van Loon studied Technical Medicine at the University of Twente and obtained his PhD in collaboration with RadboudUMC on research into the role of venous return in organ perfusion. After his PhD, he worked for three years at the Australian National University, conducting postdoctoral research in space medicine, focusing on predicting cardiovascular performance under extreme conditions – knowledge he now applies to critically ill patients. Lex is currently a clinical technologist at UMC Utrecht / Wilhelmina Children's Hospital (WKZ) and assistant professor at the University of Twente. At WKZ, he is part of the Smart and Silent ICU (SASICU) team, working on reducing alarm fatigue in intensive care through synthetic data and intelligent models. At the University of Twente, he is affiliated with the Cardiovascular and Respiratory Physiology group, led by prof. Dirk Donker. His research focuses on developing medical digital twins of the cardiovascular system: virtual models that can support physicians in clinical decision-making and help test medical technology in acute care. He combines physics-based models with machine learning to make acute cardiovascular care smarter, safer, and more efficient.",
    interests: ["Medical Digital Twins", "Cardiovascular Physiology", "Machine Learning", "Alarm Fatigue Reduction", "Space Medicine", "Acute Care", "Clinical Decision Support"],
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=van+Loon+LM",
    photo: "/images/team/van-loon.jpg",
    funFact: "Survived three years in the Australian Outback and claims his best research ideas came while dodging kangaroos on morning runs.",
    category: 'staff',
  },
  {
    id: "5",
    name: "Ruben Zoodsma",
    role: "MD | PhD Candidate | Data Science & (P)ICU Care",
    initials: "RZ",
    bio: "PhD candidate specializing in data science applications in pediatric and adult intensive care.",
    interests: ["Data Science", "ICU Care", "PICU Care", "Healthcare Analytics"],
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=Zoodsma+R",
    photo: "/images/team/zoodsma.jpeg",
    funFact: "Holds the unofficial record for most coffee consumed during a single data analysis session (exact number classified).",
    category: 'staff',
  },
  {
    id: "6",
    name: "Dr. Martine Breteler",
    role: "Assistant Professor | Technical Physician | PhD",
    initials: "MB",
    bio: "Continuous monitoring expert specializing in advanced healthcare monitoring technologies and technical medicine.",
    interests: ["Continuous Monitoring", "Technical Medicine", "Healthcare Technology", "Medical Devices"],
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=Breteler+M",
    photo: "/images/team/breteler.jpg",
    funFact: "Can identify any medical device by its alarm sound—even wakes up from power naps when hearing them in movies.",
    category: 'staff',
  },
  {
    id: "7",
    name: "Ileen Boelhouwer",
    role: "UX Researcher & Designer",
    initials: "IB",
    bio: "UX researcher and designer specializing in healthcare user experience and interface design.",
    interests: ["UX Research", "Healthcare Design", "User Interface Design", "User Experience"],
    photo: "/images/team/boelhouwer.jpg",
    funFact: "Has an impressive collection of terrible hospital website screenshots—uses them as motivation to design better.",
    category: 'staff',
  },
  {
    id: "8",
    name: "Michelle Meijer",
    role: "Master Student Technical Medicine",
    initials: "MM",
    bio: "Master student in Technical Medicine at the University of Twente, contributing to cutting-edge research in healthcare technology and clinical innovation.",
    interests: ["Technical Medicine", "Healthcare Innovation", "Clinical Research"],
    category: 'student',
  },
  {
    id: "9",
    name: "Maxime van Wechem",
    role: "Master Student Technical Medicine",
    initials: "MW",
    bio: "Master student in Technical Medicine at the University of Twente, engaged in research projects bridging engineering and medical science.",
    interests: ["Technical Medicine", "Medical Engineering", "Healthcare Technology"],
    category: 'student',
  },
];
