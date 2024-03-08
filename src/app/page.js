"use client";
import Image from "next/image";
import styles from "./page.module.css";
import SierpinskiPyramid from "./SierpinskiPyramid";

export default function Home() {
  const nameDesign = ["Indesign", "Illustator", "Photoshop", "Figma"];
  const nameDevelopment = ["ReactJs", "NodeJs", "MongoDB", "Firebase"];
  const nom = ["Projet 1", "Projet 2", "Projet 3", "Projet 4"];

  return (
    <main className={styles.main}>
      <div className={styles.competences} id="divCompetences">
        <h1 className={styles.titleCompetences}>Mes compétences</h1>
        <div className={styles.blueBg} />
        <h2 className={styles.design}>Design</h2>
        <Jauge nameDesign={nameDesign} nameDevelopment={nameDevelopment} />
      </div>

      <div style={{ marginTop: 300 }} id="divPortfolio">
        <div className={styles.portfolio}>
          <h1
            style={{
              position: "absolute",
              marginTop: 50,
              fontSize: "10vw",
              color: "#28666E",
            }}
          >
            Portfolio
          </h1>
          <div className={styles.triangle}></div>
        </div>
        <Projets nom={nom} />
      </div>

      <div className={styles.apropos} id="divAPropos">
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 40,
            color: "#f9c22e",
            fontSize: "10vw",
          }}
        >
          A propos
        </h1>
        <div style={{ position: "relative" }}>
          <SierpinskiPyramid />
          <TriangleInverse />
        </div>
      </div>

      <div className={styles.contact} id="divContact">
        <h1
          style={{
            color: "#84DCCF",
            display: "flex",
            justifyContent: "center",
            fontSize: "10vw",
          }}
        >
          Contact
        </h1>
        <IndexPage />
      </div>
    </main>
  );
}

const Jauge = ({ nameDesign, nameDevelopment }) => {
  return (
    <div className={styles.jaugeContainer}>
      <div className={styles.jauges} style={{ alignItems: "flex-end" }}>
        {nameDesign.map((skill, index) => (
          <div
            key={`design_${index}`}
            className={styles.jaugeAr}
            style={{
              height: `${200 + index * 80}px`,
              display: "flex",
              flexDirection: "column-reverse",
              justifyContent: "space-between",
            }}
          >
            <h3
              style={{ display: "flex", flexDirection: "column" }}
              className={styles.jaugeText}
            >
              {skill.split("").map((letter, index) => (
                <span key={index}>{letter}</span>
              ))}
            </h3>
            <div
              className={styles.jaugeAv}
              style={{ height: `${70 + index * 10}px` }}
            ></div>
          </div>
        ))}
      </div>
      <hr className={styles.hr} />
      <div>
        <h2 className={styles.dvp}>Développement</h2>
      </div>
      <div className={styles.jauges} style={{ flexDirection: "row-reverse" }}>
        {nameDevelopment.map((skill, index) => (
          <div
            key={`development_${index}`}
            className={styles.jaugeAr}
            style={{ height: `${200 + index * 80}px` }}
          >
            <div
              className={styles.jaugeAv}
              style={{ height: `${130 + index * 50}px` }}
            >
              <h3
                style={{
                  display: "flex",
                  flexDirection: "column",
                  color: "#e48162",
                }}
                className={styles.jaugeText}
              >
                {skill.split("").map((letter, index) => (
                  <span key={index}>{letter}</span>
                ))}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Projets = ({ nom }) => {
  const handleClick = (index) => {
    console.log(`Clicked on project with index ${index}`);
    console.log(index);
  };
  return (
    <div>
      {nom.map((projet, index) => (
        <div
          className={styles.portfolio}
          key={index}
          onClick={() => handleClick(index + 1)}
        >
          <h2 style={{ position: "absolute", marginTop: 50, color: "#28666E" }}>
            {projet}
          </h2>
          <div className={styles.triangle}></div>
        </div>
      ))}
    </div>
  );
};

const TriangleInverse = () => {
  return (
    <>
      <div className={styles.triangleBG} />
      <div className={styles.triangleFG} />
    </>
  );
};

const Oval = ({ width, height, borderWidth, children }) => {
  return (
    <div
      style={{
        position: "relative",
        width: width + "%",
        height: height + "%",
        borderRadius: "50%",
        borderWidth: `${borderWidth * 0.07}em`,
        borderColor: "#E48162",
        borderStyle: "solid",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};

const IndexPage = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "60vh" }}>
      <div style={{ position: "relative", width: "100%", maxHeight: "35em" }}>
        <Oval width={100} height={40} borderWidth={15}>
          <Oval width={96} height={96} borderWidth={3}>
            <Oval width={92} height={92} borderWidth={12}>
              <Oval width={88} height={88} borderWidth={2}>
                <div>
                  <div
                    style={{
                      color: "#84DCCF",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <h3>Samya Hussain</h3>
                    <h3>E-Mail : samya.hussain@hotmail.fr</h3>
                    <h3>Téléphone : 0649236681</h3>
                  </div>
                  <div>
                    <img src="test" alt="Lin" />
                    <img src="test" alt="Indeed" />
                    <img src="test" alt="Github" />
                  </div>
                </div>
              </Oval>
            </Oval>
          </Oval>
        </Oval>
      </div>
    </div>
  );
};
