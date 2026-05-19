// data/portfolio.ts

export const profile = {
  name: 'Anna Kompaniets',
  title: 'Développeuse Full Stack',
  target: 'Recherche alternance Master Informatique — Septembre 2026',
  location: 'Arpajon, Île-de-France · mobilité prévue à Lyon',
  email: 'anna.a.kompaniets@gmail.com',
  phone: '+33 6 49 19 00 20',
  summary:
    'Développeuse full stack orientée web, produit et interfaces utiles. Je conçois des applications avec Next.js, React, NestJS, Supabase et PostgreSQL, avec une attention particulière portée à la structure des données, à l’expérience utilisateur et à la maintenabilité du code.',
};

export const professionalStatus = {
  title: 'Micro-entrepreneure',
  location: 'France',
  description:
    'Activité déclarée en développement informatique et prestations numériques.',
  highlights: [
    'Développement web et applications',
    'Prestations numériques',
    'Expérience avec des besoins clients réels',
  ],
};

export const experiences = [
  {
    slug: 'spop-agency',
    title: 'Stage Développement Logiciel',
    company: 'SPOP’Agency',
    period: 'Janvier — Mai 2025',
    location: 'France',
    shortDescription:
      'Développement de fonctionnalités web et mobile sur plusieurs projets clients dans un environnement agile.',
    stack: ['Next.js', 'NestJS', 'Supabase', 'Firebase', 'Tailwind CSS', 'GitLab', 'Asana'],
    missions: [
      'Développement de fonctionnalités web sur Remplx, une plateforme médicale.',
      'Participation au développement d’Eliasur, un système de parrainage.',
      'Refonte complète du site ASPAC sous WordPress avec optimisation SEO.',
      'Travail en équipe agile avec GitLab, Asana et Tailwind CSS.',
    ],
  },
  {
    slug: 'plan-cimetiere',
    title: 'Stage Développement Web',
    company: 'Projet de plan interactif',
    period: 'Avril — Juin 2024',
    location: 'Sainte-Geneviève-des-Bois, France',
    shortDescription:
      'Création d’un plan de cimetière interactif avec géolocalisation et parcours utilisateurs.',
    stack: ['Next.js', 'Vercel', 'Géolocalisation', 'SVG', 'UI interactive'],
    missions: [
      'Création d’une carte interactive permettant aux visiteurs de naviguer dans le cimetière.',
      'Développement de parcours utilisateurs autour de figures notables.',
      'Gestion des coordonnées et de l’affichage dynamique sur le plan.',
      'Déploiement du projet sur Vercel.',
    ],
    link: 'https://svg-applicator.vercel.app/',
  },
];

export const projects = [
  {
  slug: 'personal-automation-n8n',
  title: 'Automatisation personnelle avec n8n',
  category: 'Projet personnel',
  description:
    'Mise en place d’un environnement d’automatisation personnel avec n8n afin de simplifier des tâches répétitives, connecter différents services et expérimenter des workflows low-code/self-hosted.',
  stack: ['n8n', 'Docker', 'Google Cloud', 'Cloudflare', 'Automation', 'Webhooks'],
  highlights: [
    'Installation et configuration d’un environnement n8n.',
    'Utilisation de Docker pour isoler et gérer le service.',
    'Connexion à des services externes via webhooks et intégrations.',
    'Expérimentation de workflows pour automatiser des tâches personnelles.',
    'Utilisation de Google Cloud et Cloudflare dans la configuration technique.',
    'Découverte des problématiques de self-hosting, sécurité, accès distant et maintenance.',
  ],
},
  {
    slug: 'godot-game',
    title: 'Jeu narratif avec Godot',
    category: 'Projet personnel',
    description:
      'Développement d’un jeu narratif avec dialogues, quêtes, inventaire, sauvegardes, réputation, amitié et localisation multilingue.',
    stack: ['Godot 4', 'GDScript', 'JSON', 'Game Design', 'UI'],
    highlights: [
      'Système de dialogues externalisé en JSON.',
      'Gestion des quêtes avec conditions d’ouverture.',
      'Inventaire structuré par catégories.',
      'Système de sauvegarde dans user://.',
      'Localisation multilingue russe / anglais.',
    ],
  },
  {
    slug: 'plan-cimetiere',
    title: 'Plan interactif de cimetière',
    category: 'Projet web',
    description:
      'Application web interactive permettant de naviguer dans un plan de cimetière avec géolocalisation et parcours personnalisés.',
    stack: ['Next.js', 'React', 'Vercel', 'SVG', 'Géolocalisation'],
    highlights: [
      'Affichage dynamique d’un plan SVG.',
      'Gestion des tombes et parcours utilisateurs.',
      'Intégration de la géolocalisation.',
      'Interface pensée pour un usage sur place.',
    ],
    link: 'https://svg-applicator.vercel.app/',
  },
  {
    slug: 'bmw-motorrad',
    title: 'BMW Motorrad',
    category: 'Projet universitaire',
    description:
      'Site web réalisé en équipe autour de la sélection, réservation et gestion d’accessoires de motos.',
    stack: ['Laravel', 'PHP', 'UML', 'SCRUM'],
    highlights: [
      'Analyse du cahier des charges.',
      'Conception UML.',
      'Développement en équipe de trois.',
      'Organisation du travail avec une méthode agile.',
    ],
    link: 'https://github.com/AnnKomp/BMWmotorrad',
  },
];

export const education = [
  {
    title: 'Master Informatique',
    school: 'Université Lumière Lyon 2',
    period: 'Rentrée 2026',
    description:
      'Admission obtenue pour la poursuite d’études en informatique.',
  },
  {
    title: 'BUT Informatique',
    school: 'Université Savoie Mont Blanc — IUT Annecy',
    period: '2023 — 2025',
    description:
      'Parcours Réalisation d’applications : conception, développement, validation.',
  },
  {
    title: 'Bac Général',
    school: 'Lycée Blaise Pascal, Orsay',
    period: '2022',
    description:
      'Spécialités Mathématiques, NSI et Physique-Chimie — mention assez bien.',
  },
];

export const skillGroups = [
  {
    title: 'Frontend',
    items: ['Next.js', 'React', 'Vue.js', 'Tailwind CSS', 'ShadCN', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'NestJS', 'Laravel', 'Flask'],
  },
  {
    title: 'Bases de données',
    items: ['PostgreSQL', 'MongoDB', 'Supabase'],
  },
  {
    title: 'Langages',
    items: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'Java', 'C#'],
  },
  {
    title: 'Outils',
    items: ['GitLab', 'GitHub', 'Vercel', 'Asana', 'UML', 'Merise', 'Figma', 'Photoshop'],
  },
  {
    title: 'Autres',
    items: ['WordPress', 'Elementor', 'PWA', 'Godot 4'],
  },
];