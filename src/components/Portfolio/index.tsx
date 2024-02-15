"use client";

import { useState } from "react";
import MainTitle from "../MainTitle";
import styles from "./portfolio.module.scss";
import PortfolioTabControl from "./PortfolioTabControl";

const Portfolio = () => {
  const [portfolioTab1, setPortfolioTab1] = useState(true);
  const [portfolioTab2, setPortfolioTab2] = useState(false);
  const [portfolioTab3, setPortfolioTab3] = useState(false);
  const [portfolioTab4, setPortfolioTab4] = useState(false);
  const [hiddenPortfolioItems, setHiddenPortfolioItems] = useState(false);

  const toggleHiddenPortfolioItems = () => setHiddenPortfolioItems(!hiddenPortfolioItems);

  
  const handleShowPortfolioItems1 = () => {
    setPortfolioTab1(true);
    setPortfolioTab2(false);
    setPortfolioTab3(false);
    setPortfolioTab4(false);
  };

  const handleShowPortfolioItems2 = () => {
    setPortfolioTab1(false);
    setPortfolioTab2(true);
    setPortfolioTab3(false);
    setPortfolioTab4(false);
  };

  const handleShowPortfolioItems3 = () => {
    setPortfolioTab1(false);
    setPortfolioTab2(false);
    setPortfolioTab3(true);
    setPortfolioTab4(false);
  };

  const handleShowPortfolioItems4 = () => {
    setPortfolioTab1(false);
    setPortfolioTab2(false);
    setPortfolioTab3(false);
    setPortfolioTab4(true);
  };

  const portfolioTabControls = [
      { id: 1, title: 'Веб-сайты', isActive: portfolioTab1, handler: handleShowPortfolioItems1 },
      { id: 2, title: 'UI/UX дизайн', isActive: portfolioTab2, handler: handleShowPortfolioItems2 },
      { id: 3, title: 'Внешний интерфейс', isActive: portfolioTab3, handler: handleShowPortfolioItems3 },
      { id: 4, title: 'Все проекты', isActive: portfolioTab4, handler: handleShowPortfolioItems4 },
  ];
  
  return (
    <section className={styles.portfolio} id="portfolio">
      <div className="container">
        <MainTitle text="Портфолио" />
      </div>
      <div className="sub-container">
        <div className={styles.portfolio__inner}>
          <div className={styles.portfolio__inner__wrapper}>
            <ul className={styles.portfolio__tabs}>
              {portfolioTabControls.map((item) => {
                return (
                  <PortfolioTabControl
                    key={item.id}
                    title={item.title}
                    isActive={item.isActive}
                    handleShowTab={item.handler}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio