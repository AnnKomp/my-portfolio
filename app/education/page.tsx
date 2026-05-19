// app/education/page.tsx

import { education } from '../../data/portfolio';
import styles from '../../styles/Subpage.module.css';

export default function EducationPage() {
  return (
    <main className={styles.page}>
      <section className={styles.header}>
        <p className={styles.label}>Études</p>
        <h1>Un parcours orienté conception, développement et validation.</h1>
        <p>
          Ma formation m’a permis de travailler sur des applications web,
          mobiles, bases de données, méthodes agiles et projets en équipe.
        </p>
      </section>

      <section className={styles.timeline}>
        {education.map((item) => (
          <article key={item.title} className={styles.timelineItem}>
            <p className={styles.meta}>{item.period}</p>
            <h2>{item.title}</h2>
            <h3>{item.school}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}