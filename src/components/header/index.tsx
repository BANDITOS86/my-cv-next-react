"use client"

import { Link } from "react-scroll";
import Logo from "../logo";
import styles from "./header.module.scss";

const Header = () => {
  const spy = true;
  const smooth = true;
  const offset = 140;
  const duration = 500;

  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__container}`}>
        <Logo />
        <nav className={styles.header__nav}>
          <ul className={styles.header__nav__list}>
            <li className={styles.header__nav__list__item}>
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
            <li className={styles.header__nav__list__item}>
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
            <li className={styles.header__nav__list__item}>
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
            <li className={styles.header__nav__list__item}>
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
