"use client"

import { Link } from "react-scroll";
import { useMediaQuery } from "@/src/hooks";
import styles from "./hero.module.scss";

const Hero = () => {
  const isMobile800 = useMediaQuery(800);
  const isMobile485 = useMediaQuery(485);

  return (
    <section 
      className={styles.hero}
    >
      <div className="sub-container">
        <div className={styles.hero__inner}>
          <h1 className={styles.hero__title}>Web development</h1>
          <p className={styles.hero__description}>
            Вы работаете над чем-то великим? Я с удовольствием помогу вам в
            этом! Напишите мне письмо и мы начнем проект прямо сейчас!
          </p>
          <Link
            className={styles.hero__btn}
            to="contact"
            spy={true}
            smooth={true}
            offset={30}
            duration={500}
          >
            Связаться с разработчиком
          </Link>
          {!isMobile800 && <Link
            className={styles.hero__arrow}
            to="about"
            spy={true}
            smooth={true}
            offset={30}
            duration={500}
          />}
        </div>
      </div>
    </section>
  );
}

export default Hero