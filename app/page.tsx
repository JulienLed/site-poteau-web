import Presentation from "@/src/component/presentation/presentation";
import AnimHero from "@/src/component/animHero/animHero";

export default function Home() {
  return (
    <div className="w-full">
      <section id="hero" className="w-full h-[20vw] py-10">
        <AnimHero />
      </section>
      <div className="h-[20vw]"></div>
      <section id="presentation" className="grid grid-cols-3">
        <Presentation />
      </section>
      <section id="services-resume"></section>
      <section id="to-contact-and-tarifs"></section>
    </div>
  );
}
