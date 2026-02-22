import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Technologies } from "@/components/sections/Technologies";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <section id="inicio" aria-label="Início">
        <Hero />
      </section>
      <section id="sobre" aria-label="Sobre">
        <About />
      </section>
      <section id="tecnologias" aria-label="Tecnologias">
        <Technologies />
      </section>
      <section id="projetos" aria-label="Projetos">
        <Projects />
      </section>
      <section id="contato" aria-label="Contato">
        <Contact />
      </section>
    </>
  );
}
