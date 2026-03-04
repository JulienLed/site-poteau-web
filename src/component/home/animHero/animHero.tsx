import AnimHeroDesktop from "./animHeroDesktop";
import AnimHeroMobile from "./animHeroMobile";

export default function Hero() {
  return (
    <>
      <div className="hidden md:flex">
        <AnimHeroDesktop />
      </div>
      <div className="md:hidden flex">
        <AnimHeroMobile />
      </div>
    </>
  );
}
