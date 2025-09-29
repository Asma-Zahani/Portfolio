import image1 from "../assets/projects/project-1.png"
import image2 from "../assets/projects/project-2.png"
import image3 from "../assets/projects/project-3.png"
import image4 from "../assets/projects/project-4.png"
import image5 from "../assets/projects/project-5.png"
import image6 from "../assets/projects/project-6.png"

export const personalInfosLeft = [
  { label: "first name", value: "Asma" },
  { label: "last name", value: "ZAHANI" },
  { label: "Age", value: ( (new Date().getFullYear()) - 2004) + " Years" },
  { label: "Nationality", value: "Tunisian" },
  { label: "Freelance", value: "Available" }
];

export const personalInfosRight = [
  { label: "Address", value: "Skanes, Monastir" },
  { label: "phone", value: "+21620988050" },
  { label: "Email", value: "zahaniasma@sousse.r-iset.tn" },
  { label: "langages", value: "Arabic, French, English" }
];

export const counters = [
  { number: 1, label: "years of", sublabel: "experience" },
  { number: 5, label: "completed", sublabel: "projects" },
  { number: 0, label: "Happy", sublabel: "customers" },
  { number: 0, label: "awards", sublabel: "won" }
];

export const skills = [
  { nom: "HTML", pourcentage: "90" },
  { nom: "CSS", pourcentage: "65"},
  { nom: "Tailwind CSS", pourcentage: "85"},
  { nom: "javascript", pourcentage: "70"},
  { nom: "react", pourcentage: "75"},
  { nom: "angular", pourcentage: "65"},
  { nom: "php", pourcentage: "80"},
  { nom: "java", pourcentage: "75"},
  { nom: "symfony", pourcentage: "85"},
  { nom: "laravel", pourcentage: "60"},
  { nom: "spring boot", pourcentage: "80"},
  { nom: "flutter", pourcentage: "50"},
  { nom: "android", pourcentage: "60"},
  { nom: "power bi", pourcentage: "50"},
  { nom: "machine learning", pourcentage: "55"},
  { nom: "big data", pourcentage: "45"},
];

export const experiences = [
  {
    annee: "2025",
    poste: "Stagiaire (PFE)",
    entreprise: "Artiweb, Monastir",
    description:
      "Conception et développement d’une application e-commerce avec système de recommandation personnalisé.<br/> Technologies : React, Tailwind CSS, Laravel, MySQL.",
  },
  {
    annee: "2024",
    poste: "Stagiaire (Perfectionnement)",
    entreprise: "Top Niveau, Monastir",
    description:
      "Développement d’un site web de gestion immobilière avec interface utilisateur dynamique.<br/> Technologies : Angular, Spring Boot, MySQL.",
  },
  {
    annee: "2023",
    poste: "Stagiaire (Initiation)",
    entreprise: "ISET Sousse",
    description:
      "Réinstallation des systèmes d’exploitation et des logiciels, mise en place des équipements réseau.",
  },
];

export const diplomes = [
  {
    annee: "2025",
    diplome: "Licence en Technologie de l’informatique",
    etablissement: "ISET Sousse",
    description: "Formation axée sur le développement web, les systèmes et les réseaux.",
  },
  {
    annee: "2022",
    diplome: "Baccalauréat en Technologie",
    etablissement: "Lycée Bourguiba Monastir",
    description: "Formation secondaire orientée vers les sciences technologiques.",
  },
];

export const projects = [
  {
    index: 1,
    path: image1,
    nom: "Projet Glower",
    type: "Website",
    client: "ISETSO University",
    langages: "Angular",
    preview: "glower-app.vercel.app",
    mediaType: "image",
  },
  {
    index: 2,
    path: image2,
    nom: "Projet Game Blogger",
    type: "Website",
    client: "ISETSO University",
    langages: "Symfony, MySQL",
    preview: "",
    mediaType: "image",
  },
  {
    index: 3,
    path: image3,
    nom: "Projet Scolarity",
    type: "Site Web",
    client: "ISETSO University",
    langages: "Spring Boot, MySQL",
    preview: "",
    mediaType: "image",
  },
  {
    index: 4,
    path: image4,
    nom: "Projet Vendora",
    type: "Site Web",
    client: "ARTIWEB",
    langages: "React, Laravel, MySQL",
    preview: "vendora-app.vercel.app",
    mediaType: "image",
  },
  {
    index: 5,
    path: image5,
    nom: "Projet Emlak Ajancy",
    type: "Site Web",
    client: "Top Niveau",
    langages: "Angular, SpringBoot, MySQL",
    preview: "",
    mediaType: "image",
  },
  {
    index: 6,
    path: image6,
    nom: "Projet Flavory",
    type: "Site Web",
    client: "ISETSO University",
    langages: "Next.js, Nest, MySQL",
    preview: "flavory-app.vercel.app",
    mediaType: "image",
  }
];