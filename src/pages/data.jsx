import image1 from "../assets/projects/project-1.jpg"
import image2 from "../assets/projects/project-2.jpg"
import image3 from "../assets/projects/project-3.jpg"
import image4 from "../assets/projects/project-4.jpg"
import image5 from "../assets/projects/project-5.jpg"
import image6 from "../assets/projects/project-6.jpg"

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
  { nom: "HTML", pourcentage: "85" },
  { nom: "javascript", pourcentage: "89"},
  { nom: "css", pourcentage: "70"},
  { nom: "php", pourcentage: "66"},
  { nom: "symfony", pourcentage: "75"},
  { nom: "laravel", pourcentage: "50"},
  { nom: "angular", pourcentage: "65"},
  { nom: "react", pourcentage: "45"},
];

export const experiences = [
  {
    annee: "2025",
    poste: "Stagiaire (PFE)",
    entreprise: "Artiweb, Monastir",
    description:
      "Conception et développement d’une application e-commerce avec système de recommandation personnalisé. Technologies : React, Tailwind CSS, Laravel, MySQL.",
  },
  {
    annee: "2024",
    poste: "Stagiaire (Perfectionnement)",
    entreprise: "Top Niveau, Monastir",
    description:
      "Développement d’un site web de gestion immobilière avec interface utilisateur dynamique. Technologies : Angular, Spring Boot, MySQL.",
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
    nom: "Image Project",
    type: "Website",
    client: "Envato",
    langages: "HTML, CSS, Javascript",
    preview: "www.envato.com",
    mediaType: "image",
  },
  {
    index: 2,
    path: image2,
    nom: "Youtube Project",
    type: "Video",
    client: "Videohive",
    langages: "Adobe After Effects",
    preview: "www.videohive.net",
    mediaType: "image",
  },
  {
    index: 3,
    path: image3,
    nom: "Slider Project",
    type: "Web App",
    client: "ThemeForest",
    langages: "React, CSS, JavaScript",
    preview: "www.themeforest.net",
    mediaType: "image",
  },
  {
    index: 4,
    path: image4,
    nom: "Local Video Project",
    type: "Local Video",
    client: "Local Studio",
    langages: "MP4, H.264",
    preview: "www.localstudio.tn",
    mediaType: "image",
  },
  {
    index: 5,
    path: image5,
    nom: "Creative Landing",
    type: "Landing Page",
    client: "Creative Market",
    langages: "HTML, SCSS, JS",
    preview: "www.creativemarket.com",
    mediaType: "image",
  },
  {
    index: 6,
    path: image6,
    nom: "Portfolio Template",
    type: "Portfolio",
    client: "Dribbble",
    langages: "HTML, CSS, JS",
    preview: "www.dribbble.com",
    mediaType: "image",
  }
];