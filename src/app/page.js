import Image from "next/image";
import styles from "./page.module.css";
import { Inter } from "next/font/google";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.competences} id="divCompetences">
        <h1 className={styles.titleCompetences}>Mes compétences</h1>
        <div className={styles.blueBg} />
        <h2 className={styles.design}>Design</h2>
      </div>

      <div className={styles.portfolio} id="divPortfolio">
        <h1>Portfolio</h1>
      </div>
      <div className={styles.apropos} id="divAPropos">
        <h1>A propos</h1>
      </div>

      <div className={styles.contact} id="divContact">
        <h1>Contact</h1>
      </div>
    </main>
  );
}
