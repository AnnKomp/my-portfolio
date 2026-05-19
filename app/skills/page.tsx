// app/skills/page.tsx

import { skillGroups } from '../../data/portfolio';
import styles from '../../styles/Subpage.module.css';

export default function SkillsPage() {
  return (
    <main className={`${styles.page} ${styles.skillsTheme}`}>
      <section className={styles.header}>
        <p className={styles.label}>Compétences</p>
        <h1>Une stack full stack avec une base solide en développement web.</h1>
        <p>
          Mes compétences couvrent le frontend, le backend, les bases de données,
          les outils de conception et les environnements de développement modernes.
        </p>
      </section>

      <section className={styles.grid}>
        {skillGroups.map((group) => (
          <article key={group.title} className={styles.card}>
            <h2>{group.title}</h2>

            <div className={styles.tags}>
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}