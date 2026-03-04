import Presentation from "@/src/component/home/presentation/presentation";
import AnimHero from "@/src/component/home/animHero/animHero";
import ServiceResume from "@/src/component/home/services-resume/service";
import ButtonDown from "@/src/component/home/button-down/ButtonDown";

export default function Home() {
  return (
    <div className="w-full">
      <section id="hero" className="w-full h-[75vh] md:h-[40vh] md:py-15">
        <AnimHero />
      </section>
      <ButtonDown />
      <section
        id="presentation"
        className="flex flex-col items-center md:grid md:grid-cols-3 md:scroll-mt-30"
      >
        <Presentation />
      </section>
      <section id="services-resume"></section>
      <ServiceResume />
    </div>
  );
}
