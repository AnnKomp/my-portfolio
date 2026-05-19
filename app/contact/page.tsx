// app/contact/page.tsx

import { profile } from '../../data/portfolio';
import styles from '../../styles/Subpage.module.css';

export default function ContactPage() {
  return (
    <main className={`${styles.page} ${styles.contactTheme}`}>
      <section className={styles.header}>
        <p className={styles.label}>Contact</p>
        <h1>Discutons d’une alternance ou d’un projet.</h1>
        <p>
          Je recherche une alternance en développement full stack ou backend à
          partir de septembre 2026, avec une mobilité prévue à Lyon.
        </p>
      </section>

      <section className={styles.contactCard}>
        <div>
          <p className={styles.meta}>Email</p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>

        <div>
          <p className={styles.meta}>Téléphone</p>
          <a href={`tel:${profile.phone.replaceAll(' ', '')}`}>{profile.phone}</a>
        </div>

        <div>
          <p className={styles.meta}>Localisation</p>
          <p>{profile.location}</p>
        </div>
      </section>
    </main>
  );
}