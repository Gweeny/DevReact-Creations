"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./header.module.css";
import burger from "../../public/Burger.png";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handlechange = () => {
    setIsVisible(!isVisible);
  };
  const scroll2El = (elID) => {
    window.scrollTo({
      top: document.getElementById(elID).offsetTop - 60,
      behavior: "smooth",
    });
  };

  const onBtnClick = (e) => {
    e.preventDefault();
    const goto = e.target.getAttribute("goto");
    handlechange();
    setTimeout(() => {
      scroll2El(goto);
    }, 100);
  };
  return (
    <>
      <div className={isVisible ? styles.menu : "hidden"}>
        <div className={styles.burger} onClick={handlechange}>
          <img src="/Burger.png" alt="burger" />
        </div>
        {isVisible && (
          <>
            <div className={styles.links}>
              <Link
                className={styles.link}
                href="/"
                goto="divCompetences"
                onClick={onBtnClick}
              >
                Mes compétences
              </Link>
              <Link
                className={styles.link}
                href="/"
                goto="divPortfolio"
                onClick={onBtnClick}
              >
                Portfolio
              </Link>
              <Link
                className={styles.link}
                href="/"
                goto="divAPropos"
                onClick={onBtnClick}
              >
                A propos
              </Link>
              <Link
                className={styles.link}
                href="/"
                goto="divContact"
                onClick={onBtnClick}
              >
                Contact
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Header;
