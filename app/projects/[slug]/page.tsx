// app/projects/[slug]/page.tsx

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '../../../data/portfolio';
import styles from '../../../styles/DetailPage.module.css';

type ProjectDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: ProjectDetailPageProps) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    return {
      title: 'Projet introuvable',
    };
  }

  return {
    title: `${project.title} — Projet`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className={`${styles.page} ${styles.projectsTheme}`}>
      <Link href="/projects" className={styles.backLink}>
        ← Retour aux projets
      </Link>

      <section className={styles.hero}>
        <p className={styles.label}>{project.category}</p>

        <h1>{project.title}</h1>

        <p className={styles.intro}>{project.description}</p>

        <div className={styles.tags}>
          {project.stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Ce que j’ai développé</h2>

        <ul className={styles.list}>
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </section>

      {'longSections' in project && project.longSections && (
        <section className={styles.longContent}>
          {project.longSections.map((section) => (
            <article key={section.title} className={styles.longBlock}>
              <h2>{section.title}</h2>
              <p>{section.content}</p>
            </article>
          ))}
        </section>
      )}

      {'gallery' in project && project.gallery && (
        <section className={styles.section}>
          <h2>Captures et supports visuels</h2>

          <div className={styles.galleryGrid}>
            {project.gallery.map((item) => (
              <article key={item.title} className={styles.galleryCard}>
                <div className={styles.imagePlaceholder}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={styles.galleryImage}
                  />
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {project.link && (
        <section className={styles.cta}>
          <h2>Lien du projet</h2>
          <p>
            Le projet est disponible en ligne ou sur GitHub selon le contexte.
          </p>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            Ouvrir le lien
          </a>
        </section>
      )}
    </main>
  );
}