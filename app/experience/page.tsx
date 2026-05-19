// app/experience/page.tsx

import Link from 'next/link';
import { experiences, professionalStatus } from '../../data/portfolio';
import styles from '../../styles/Subpage.module.css';

export default function ExperiencePage() {
  return (
    <main className={`${styles.page} ${styles.experienceTheme}`}>
      <section className={styles.header}>
        <p className={styles.label}>Expériences</p>
        <h1>Stages, projets clients et développement web concret.</h1>
        <p>
          Une sélection de mes expériences professionnelles et projets réalisés
          dans des contextes réels ou proches du réel.
        </p>
      </section>

      <section className={styles.grid}>
        <article className={styles.card}>
  <p className={styles.meta}>{professionalStatus.location}</p>
  <h2>{professionalStatus.title}</h2>
  <h3>Statut professionnel</h3>
  <p>{professionalStatus.description}</p>

  <div className={styles.tags}>
    {professionalStatus.highlights.map((item) => (
      <span key={item}>{item}</span>
    ))}
  </div>
</article>
        {experiences.map((experience) => (
          <article key={experience.slug} className={styles.card}>
            <p className={styles.meta}>{experience.period}</p>
            <h2>{experience.title}</h2>
            <h3>{experience.company}</h3>
            <p>{experience.shortDescription}</p>

            <div className={styles.tags}>
              {experience.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <Link href={`/experience/${experience.slug}`} className={styles.link}>
              Voir le détail →
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}