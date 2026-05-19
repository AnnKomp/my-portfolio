// app/experience/[slug]/page.tsx

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { experiences } from '../../../data/portfolio';
import styles from '../../../styles/DetailPage.module.css';

type ExperienceDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return experiences.map((experience) => ({
    slug: experience.slug,
  }));
}

export function generateMetadata({ params }: ExperienceDetailPageProps) {
  const experience = experiences.find((item) => item.slug === params.slug);

  if (!experience) {
    return {
      title: 'Expérience introuvable',
    };
  }

  return {
    title: `${experience.title} — ${experience.company}`,
    description: experience.shortDescription,
  };
}

export default function ExperienceDetailPage({
  params,
}: ExperienceDetailPageProps) {
  const experience = experiences.find((item) => item.slug === params.slug);

  if (!experience) {
    notFound();
  }

  return (
    <main className={`${styles.page} ${styles.experienceTheme}`}>
      <Link href="/experience" className={styles.backLink}>
        ← Retour aux expériences
      </Link>

      <section className={styles.hero}>
        <p className={styles.label}>{experience.period}</p>

        <h1>{experience.title}</h1>

        <div className={styles.metaGrid}>
          <div>
            <p className={styles.metaLabel}>Entreprise / projet</p>
            <p>{experience.company}</p>
          </div>

          <div>
            <p className={styles.metaLabel}>Localisation</p>
            <p>{experience.location}</p>
          </div>
        </div>

        <p className={styles.intro}>{experience.shortDescription}</p>

        <div className={styles.tags}>
          {experience.stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Missions principales</h2>

        <ul className={styles.list}>
          {experience.missions.map((mission) => (
            <li key={mission}>{mission}</li>
          ))}
        </ul>
      </section>

      {experience.links && experience.links.length > 0 && (
  <section className={styles.cta}>
    <h2>Liens liés à cette expérience</h2>
    <p>
      Certains projets réalisés ou suivis pendant cette expérience sont
      accessibles en ligne.
    </p>

    <div className={styles.buttonGroup}>
      {experience.links.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          {link.label}
        </a>
      ))}
    </div>
  </section>
)}
    </main>
  );
}