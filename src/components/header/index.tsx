"use client";

import { Link } from "react-scroll";
import Logo from "../logo";
import { useMediaQuery } from "@/src/hooks";
import { useState } from "react";
import styles from "./header.module.scss";
import stylesMenu from "./mobileMenu.module.scss"


const Header = () => {
  const isMobile = useMediaQuery(640);
  const [menuOpen, setMenuOpen] = useState(false);
  const spy = true;
  const smooth = true;
  const offset = 140;
  const duration = 500;
  const currentMenuItemClass = isMobile
    ? stylesMenu.menu__item
    : styles.header__nav__list__item;

  const handleToggleMenu = () => {
    (document.querySelector("body") as HTMLBodyElement).classList.toggle(
      "overflow-hidden"
    );
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    (document.querySelector("body") as HTMLBodyElement).classList.remove(
      "overflow-hidden"
    );
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__container}`}>
        <Logo />
        {isMobile && (
          <button
            className={`${styles.burger_menu} ${menuOpen ? styles.open : ""}`}
            onClick={handleToggleMenu}
          >
            <span />
            <span />
            <span />
          </button>
        )}
        <nav className={`${isMobile ? stylesMenu.menu : styles.header__nav} ${menuOpen ? stylesMenu.open : ""}`}>
          <ul className={`${isMobile ? styles.list_reset : styles.header__nav__list}`}>
            <li className={currentMenuItemClass}>
              <Link
                className={styles.header__nav__list__item__link}
                to="about"
                spy={spy}
                smooth={smooth}
                offset={offset}
                duration={duration}
              >
                Обо мне
              </Link>
            </li>
             <li className={currentMenuItemClass}>
              <Link
                className={styles.header__nav__list__item__link}
                to="about"
                spy={spy}
                smooth={smooth}
                offset={offset}
                duration={duration}
              >
                Навыки
              </Link>
            </li>
             <li className={currentMenuItemClass}>
              <Link
                className={styles.header__nav__list__item__link}
                to="about"
                spy={spy}
                smooth={smooth}
                offset={offset}
                duration={duration}
              >
                Портфолио
              </Link>
            </li>
             <li className={currentMenuItemClass}>
              <Link
                className={styles.header__nav__list__item__link}
                to="about"
                spy={spy}
                smooth={smooth}
                offset={offset}
                duration={duration}
              >
                Связаться со мной
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
