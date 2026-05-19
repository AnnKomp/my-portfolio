// app/page.tsx

import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { professionalStatus } from '../data/portfolio';

const featuredProjects = [
  {
    title: 'Remplx',
    type: 'Plateforme médicale',
    stack: 'Next.js · NestJS',
    description:
      'Développement de fonctionnalités web sur une plateforme médicale dans un contexte client.',
  },
  {
    title: 'Eliasur',
    type: 'Système de parrainage',
    stack: 'Next.js · Supabase · Firebase',
    description:
      'Participation au développement d’un système de parrainage avec gestion de données et interface utilisateur.',
  },
  {
    title: 'Plan interactif de cimetière',
    type: 'Carte interactive',
    stack: 'Next.js · Géolocalisation · Vercel',
    description:
      'Création d’un plan interactif avec parcours utilisateurs, affichage dynamique et géolocalisation.',
  },
  {
    title: 'Projet Godot',
    type: 'Jeu narratif',
    stack: 'Godot 4 · JSON · Game systems',
    description:
      'Développement d’un jeu avec dialogues, quêtes, inventaire, sauvegardes et localisation multilingue.',
  },
];

const skills = [
  'Next.js',
  'React',
  'TypeScript',
  'JavaScript',
  'NestJS',
  'Node.js',
  'PostgreSQL',
  'Supabase',
  'Tailwind CSS',
  'Git',
  'Vercel',
  'Godot 4',
];

export default function Page() {
  return (
    <main className={styles.page}>
      

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.badge}>Recherche alternance · Septembre 2026</p>

          <h1>
            Développeuse Full Stack orientée web, produit et interfaces utiles.
          </h1>

          <p className={styles.heroText}>
  Je conçois et développe des applications web avec Next.js, React,
  NestJS, Supabase et PostgreSQL. Micro-entrepreneure en développement
  informatique et admise en Master Informatique à l’Université Lumière
  Lyon 2, je recherche une alternance en développement full stack ou backend.
</p>

          <div className={styles.heroActions}>
            <Link href="/projects" className={styles.primaryButton}>
              Voir mes projets
            </Link>

            <Link href="/contact" className={styles.secondaryButton}>
              Me contacter
            </Link>
          </div>
        </div>

        <aside className={styles.heroCard}>
          <p className={styles.cardLabel}>Stack principale</p>

          <div className={styles.stackList}>
            {skills.slice(0, 8).map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </aside>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Profil</p>
          <h2>Une développeuse qui aime construire des systèmes complets.</h2>
        </div>

        <p className={styles.largeText}>
          Mon parcours combine développement web, applications client, bases de
          données, interfaces interactives et projets personnels plus complexes.
          J’aime comprendre la logique d’un produit, structurer les données,
          créer une interface claire et faire fonctionner l’ensemble proprement.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Projets</p>
          <h2>Projets sélectionnés</h2>
        </div>

        <div className={styles.projectGrid}>
          {featuredProjects.map((project) => (
            <article key={project.title} className={styles.projectCard}>
              <p className={styles.projectType}>{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className={styles.projectStack}>{project.stack}</p>
            </article>
          ))}
        </div>

        <Link href="/projects" className={styles.textLink}>
          Voir tous les projets →
        </Link>
      </section>

      <section className={styles.section}>
  <div className={styles.sectionHeader}>
    <p className={styles.sectionLabel}>Statut professionnel</p>
    <h2>{professionalStatus.title}</h2>
  </div>

  <p className={styles.largeText}>{professionalStatus.description}</p>

  <div className={styles.skillsCloud}>
    {professionalStatus.highlights.map((item) => (
      <span key={item}>{item}</span>
    ))}
  </div>
</section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Compétences</p>
          <h2>Technologies utilisées</h2>
        </div>

        <div className={styles.skillsCloud}>
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2>Disponible pour une alternance en développement dès septembre 2026.</h2>
        <p>
          Mobilité prévue à Lyon dans le cadre de mon Master Informatique à
          l’Université Lumière Lyon 2.
        </p>

        <Link href="/contact" className={styles.primaryButton}>
          Discutons ensemble
        </Link>
      </section>
    </main>
  );
}