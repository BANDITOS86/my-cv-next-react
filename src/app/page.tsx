import styles from "@/src/styles/page.module.css";
import About from "../components/About";
import Hero from "../components/hero";

export default function Main() {
  return (
    <main>
      <div className="background-animation">
        <div id="ball-one"></div>
        <div id="ball-two"></div>
        <div id="ball-three"></div>
      </div>

      <Hero />
      <About />
    </main>
  );
}
