// app/projects/page.tsx

import Link from 'next/link';
import { projects } from '../../data/portfolio';
import styles from '../../styles/Subpage.module.css';

export default function ProjectsPage() {
  return (
    <main className={`${styles.page} ${styles.projectsTheme}`}>
      <section className={styles.header}>
        <p className={styles.label}>Projets</p>
        <h1>Des projets web, techniques et personnels.</h1>
        <p>
          Cette section regroupe mes projets principaux : applications web,
          interfaces interactives, projets universitaires et jeu développé avec Godot.
        </p>
      </section>

      <section className={styles.grid}>
        {projects.map((project) => (
          <article key={project.slug} className={styles.card}>
            <p className={styles.meta}>{project.category}</p>
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <div className={styles.tags}>
              {project.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <Link href={`/projects/${project.slug}`} className={styles.link}>
              Voir le projet →
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}