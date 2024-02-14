import About from "../components/About";
import Hero from "../components/hero";
import Skills from "../components/Skills";

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
      <Skills />
    </main>
  );
}
