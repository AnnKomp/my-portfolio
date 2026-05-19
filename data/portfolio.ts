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
    'Développement de fonctionnalités web et mobile sur plusieurs projets clients, avec participation à des applications Next.js, NestJS, Supabase, Firebase et WordPress.',
  stack: [
    'Next.js',
    'React',
    'NestJS',
    'Supabase',
    'Firebase',
    'WordPress',
    'Tailwind CSS',
    'GitLab',
    'Asana',
  ],
  missions: [
    'Participation au développement de Remplax, une plateforme médicale utilisant Next.js et NestJS.',
    'Développement de fonctionnalités frontend et backend sur des projets clients.',
    'Travail sur Eliasur, un système de parrainage basé sur Next.js, Supabase et Firebase.',
    'Refonte complète du site ASPAC sous WordPress avec amélioration de la structure, de l’interface et de l’optimisation SEO.',
    'Intégration d’interfaces responsives avec Tailwind CSS.',
    'Utilisation de GitLab pour le versioning et d’Asana pour le suivi des tâches.',
    'Travail en équipe dans un environnement agile, avec échanges réguliers sur les besoins clients et l’avancement des fonctionnalités.',
  ],
  links: [
    {
      label: 'Remplax',
      url: 'https://remplax.fr',
    },
    {
      label: 'ASPAC Châtelaillon',
      url: 'https://www.aspac-chatelaillon.fr',
    },
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
  links: [
    {
      label: 'Voir le projet',
      url: 'https://svg-applicator.vercel.app/',
    },
  ],
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
    'Développement d’un jeu narratif 2D avec Godot 4, pensé comme une aventure académique et mystique avec dialogues, quêtes, inventaire, relations, mini-jeux, sauvegardes et localisation multilingue.',
  stack: [
    'Godot 4',
    'GDScript',
    'JSON',
    'Game Design',
    'UI',
    'Miro',
    'Architecture de données',
    'Localisation',
  ],
  highlights: [
    'Création d’une architecture de jeu avec plusieurs scènes et transitions entre lieux.',
    'Mise en place d’un système de dialogues externalisé en JSON avec embranchements et choix.',
    'Développement d’un système de quêtes avec conditions d’ouverture, étapes et catégories.',
    'Création d’un inventaire structuré par types d’objets : ingrédients, potions, documents, objets de quête et équipement.',
    'Ajout d’un système de sauvegarde dans user:// pour conserver la progression du joueur.',
    'Gestion de plusieurs langues avec des données localisées en russe et en anglais.',
    'Travail de conception sur Miro pour organiser les systèmes, les personnages, les lieux et les mécaniques.',
    'Création de mini-jeux liés aux cours, clubs et activités du jeu.',
  ],
  longSections: [
    {
      title: 'Contexte du projet',
      content:
        'Ce projet est un jeu narratif 2D développé avec Godot 4. L’objectif est de créer une expérience proche d’un RPG narratif, avec une héroïne qui découvre une académie dans un univers mystique-fantasy. Le joueur explore différents lieux, parle avec des personnages, débloque des quêtes, améliore ses relations et prend des décisions qui influencent la progression.',
    },
    {
      title: 'Architecture générale',
      content:
        'Le projet est organisé autour de plusieurs scènes Godot : menu principal, scènes de lieux, interface globale, dialogues, inventaire, statut, quêtes et sauvegardes. L’idée est de séparer les responsabilités : les scènes gèrent l’affichage et les interactions, tandis que les données importantes sont stockées dans des fichiers JSON ou dans des singletons globaux.',
    },
    {
      title: 'Système de dialogues',
      content:
        'Les dialogues sont externalisés dans des fichiers JSON afin de ne pas écrire tout le contenu directement dans le code. Chaque ligne peut avoir un identifiant, un personnage, un texte, un identifiant suivant, un déclencheur ou un choix. Cette structure permet de créer des dialogues ramifiés, avec des réponses différentes selon les décisions du joueur.',
    },
    {
      title: 'Système de quêtes',
      content:
        'Les quêtes sont pensées comme des données séparées, avec une organisation par fichiers JSON. Chaque quête peut avoir une catégorie, un nom, une description, des étapes, un statut et des conditions d’ouverture. Les conditions peuvent dépendre de la progression dans l’histoire, des relations avec les personnages, de la réputation ou d’autres variables du jeu.',
    },
    {
      title: 'Inventaire',
      content:
        'L’inventaire est structuré en plusieurs catégories : ingrédients, potions, documents, objets de quête et équipement. Les objets possèdent des descriptions, des icônes, une quantité et parfois des propriétés spécifiques. Le système est prévu pour séparer les données de base des objets et l’inventaire réel du joueur, sauvegardé dans user://.',
    },
    {
      title: 'Localisation multilingue',
      content:
        'Le jeu est conçu avec une logique multilingue. Les données comme les objets, les dialogues, les quêtes et certains textes d’interface peuvent exister en plusieurs langues. Un système de paramètres permet de choisir la langue active, puis l’interface affiche les textes correspondant à cette langue.',
    },
    {
      title: 'Mini-jeux',
      content:
        'Le projet inclut aussi des mini-jeux liés aux cours, clubs ou activités de l’académie. L’objectif est de rendre certaines actions plus interactives que de simples dialogues. Parmi les idées et systèmes prévus figurent des mini-jeux d’alchimie, de numérologie, d’astronomie, de runes, d’herbologie, de cristallomancie et d’autres activités liées à l’univers du jeu.',
    },
    {
      title: 'Organisation avec Miro',
      content:
        'Miro est utilisé pour organiser la structure globale du projet : relations entre les systèmes, progression narrative, idées de quêtes, personnages, mécaniques, lieux et dépendances entre les fonctionnalités. Cela permet de garder une vision d’ensemble sur un projet qui contient beaucoup de données et de systèmes interconnectés.',
    },
    {
      title: 'Ce que ce projet montre techniquement',
      content:
        'Ce projet montre ma capacité à structurer une application complexe, à séparer les données du code, à penser une architecture évolutive, à gérer des états persistants, à organiser une interface utilisateur et à construire progressivement des systèmes interconnectés. Même s’il s’agit d’un projet personnel, il demande une vraie logique de développement logiciel.',
    },
  ],
  gallery: [
    {
      title: 'Écran de dialogue',
      description: 'Capture prévue pour montrer l’interface de dialogue avec portrait de personnage.',
      image: '/images/godot/dialogue-placeholder.png',
    },
    {
      title: 'Interface des quêtes',
      description: 'Capture prévue pour montrer la liste des quêtes, leurs catégories et leur progression.',
      image: '/images/godot/quests-placeholder.png',
    },
    {
      title: 'Inventaire',
      description: 'Capture prévue pour montrer les catégories d’objets et la fiche détail d’un item.',
      image: '/images/godot/inventory-placeholder.png',
    },
    {
      title: 'Organisation Miro',
      description: 'Capture prévue pour montrer la réflexion autour des systèmes et de la progression.',
      image: '/images/godot/miro-placeholder.png',
    },
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