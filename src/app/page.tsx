import styles from "@/src/styles/page.module.css";
import About from "../components/about";

export default function Main() {
  return (
    <main className={styles.main}>
      <div className="background-animation">
        <div id="ball-one"></div>
        <div id="ball-two"></div>
        <div id="ball-three"></div>
      </div>

      <About />
    </main>
  );
}
