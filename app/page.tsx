// app/page.tsx

import React from 'react';
import styles from '../styles/Home.module.css'; // Assurez-vous que le chemin est correct

const Page = () => {
  return (
    <div className={styles.container}>
      <header>
        <h1 className={styles.title}>Anna Kompaniets</h1>
        <p className={styles.description}>IT Student | Aspiring Software Developer</p>
        
        {/* Navigation Bar */}
        <nav className={styles.navbar}>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Work Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#interests">Interests</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="about" className={styles.section}>
          <h2 className={styles.h2}>About Me</h2>
          <p>
            I am a third-year university student in computer science, looking to enhance my skills through hands-on experience in software development.
          </p>
        </section>

        <section id="skills" className={styles.section}>
          <h2 className={styles.h2}>Skills</h2>

          <div className={styles.skillsContainer}>
            {/* Programming Languages */}
            <div className={styles.skill}>
              <h3>Programming Languages</h3>
              <ul>
                <li>C#</li>
                <li>Python (Flask)</li>
                <li>PHP (Laravel)</li>
                <li>JavaScript (Next.js, Vue.js)</li>
                <li>HTML/CSS</li>
              </ul>
            </div>

            {/* Frameworks & Tools */}
            <div className={styles.skill}>
              <h3>Frameworks & Tools</h3>
              <ul>
                <li>Laravel</li>
                <li>Flutter</li>
                <li>PostgreSQL</li>
                <li>Odoo</li>
                <li>GitHub</li>
                <li>Vercel</li>
                <li>Figma</li>
                <li>Azure</li>
                <li>Photoshop</li>
              </ul>
            </div>

            {/* Languages */}
            <div className={styles.skill}>
              <h3>Languages</h3>
              <ul>
                <li>French (Native)</li>
                <li>Russian (Native)</li>
                <li>English (Upper Intermediate, B2)</li>
              </ul>
            </div>

            {/* Personal Skills */}
            <div className={styles.skill}>
              <h3>Personal Skills</h3>
              <ul>
                <li>Strong problem-solving abilities</li>
                <li>Teamwork</li>
                <li>Adaptability</li>
                <li>Effective communication skills</li>
              </ul>
            </div>
          </div>
        </section>


        <section id="experience" className={styles.section}>
          <h2 className={styles.h2}>Work Experience</h2>
          <div className={styles.experience}>

            {/* Projet 3: 10-week Internship */}
            <div className={styles.experienceItem}>
              <h3>10-week Internship</h3>
              <p><strong>Ste-Geneviève-des-Bois, France</strong></p>
              <p><strong>Technologies:</strong> NextJS, Vercel, Geolocation</p>
              <p>
                Developed and deployed a cemetery tour website that incorporated geolocation features, allowing visitors to navigate through the cemetery. 
                Key functionalities included:
              </p>
              <ul>
                <li>Creation of &apos;tour routes&apos; based on notable figures</li>
                <li>Geolocation services to track visitor locations on the map</li>
                <li>Interactive map interface for user-friendly navigation</li>
              </ul>
              <p>
                This project emphasized the importance of user interface design and accessibility for an enhanced visitor experience.
              </p>
            </div>
    
            {/* Projet 1: BMW Motorrad */}
            <div className={styles.experienceItem}>
              <h3>University Group Project (BMW Motorrad)</h3>
              <p><strong>September 2023 - January 2024</strong></p>
              <p><strong>Technologies:</strong> Laravel, UML Diagrams</p>
              <p>
                Developed a website for BMW Motorrad based on detailed specifications. 
                Key features included:
              </p>
              <ul>
                <li>Accessory purchases</li>
                <li>Motorcycle selection and reservation</li>
                <li>User account management</li>
              </ul>
              <p>
                This project utilized the SCRUM methodology for agile project management, enhancing collaboration and efficiency within the team.
              </p>
              <p>
                <strong>GitHub Link:</strong> <a href="https://github.com/AnnKomp/BMWmotorrad" target="_blank" rel="noopener noreferrer" className={styles.link}>View Project on GitHub</a>
              </p>
            </div>

            {/* Projet 2: 2D Game Development */}
            <div className={styles.experienceItem}>
              <h3>2D Game Development Project</h3>
              <p><strong>January 2023</strong></p>
              <p><strong>Technologies:</strong> C#, WPF</p>
              <p>
                Created a 2D game that allowed players to explore different areas such as bedrooms, forests, and courtyards. 
                Features included:
              </p>
              <ul>
                <li>Turn-based combat system</li>
                <li>Interactive map with chests and NPCs</li>
              </ul>
              <p>
                This project was a collaborative effort with a team of three, focusing on game design and user experience.
              </p>
            </div>
          </div>
        </section>

        <section id="education" className={styles.section}>
          <h2 className={styles.h2}>Education</h2>

          {/* Bachelor's Degree */}
          <div className={styles.educationItem}>
            <h3>Bachelor&apos;s Degree in Technology</h3>
            <p><strong>Université Savoie Mont Blanc - IUT Annecy</strong> (Sept 2022 - present)</p>
            <p>Department: INFO, Track A - Application Development: Design, Development, Validation</p>
          </div>

          {/* Baccalaureate */}
          <div className={styles.educationItem}>
            <h3>Baccalaureate</h3>
            <p><strong>Lycée Général Blaise Pascal, Orsay</strong> (2022)</p>
            <p>Option: Mathematics, NSI (Informatics), Physics-Chemistry with honors</p>
          </div>
        </section>

        <section id="interests" className={styles.section}>
          <h2 className={styles.h2}>Interests</h2>
          <p>Reading fantasy novels, playing video games (open-world, strategy, action-RPG) like RDR2, GOW, Elden Ring or Skyrim, and pastry making.</p>
        </section>

        <section>
          <div className={styles.downloadContainer}>
            <h2 className={styles.h2}>Download My CV:</h2>
            <a
              href="/CV_KOMPANIETS_Anna.pdf"
              download="CV_Anna_Kompaniets.pdf"
              className={styles.downloadButton}
            >
              Download CV
            </a>
          </div>
        </section>

        {/* References Section */}
        <section id="references" className={styles.section}>
          <h2 className={styles.h2}>References</h2>
          <p><strong>Luc Damas</strong>, Associate Professor, IUT Annecy<br />
            Email: <a href="mailto:luc.damas@univ.smb.fr">luc.damas@univ.smb.fr</a>
          </p>
          <p><strong>Stephanie Vibrac</strong>, Professor, IUT<br />
            Email: <a href="mailto:stephanie.vibrac@univ.smb.fr">stephanie.vibrac@univ.smb.fr</a>
          </p>
        </section>

      </main>

      <footer id="contact" className={styles.footer}>
        <h2 className={styles.h2}>Contact</h2>
        
        <p>Email: <a href="mailto:anyakomp2004@gmail.com">anyakomp2004@gmail.com</a></p>
        <p>Phone: +33 6 49 19 00 20</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/anna-kompaniets-138846259/" target="_blank" rel="noopener noreferrer">View Profile</a></p>
      </footer>
    </div>
  );
};

export default Page;
