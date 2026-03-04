import NavbarDesktop from "./navbarDesktop";
import NavbarSmartphone from "./navbarSmartphone";

export default function Header() {
  return (
    <div className="z-50">
      <section id="navbar" className="!text-caf-noir">
        <div className="hidden md:block">
          <NavbarDesktop />
        </div>
        <div className="md:hidden">
          <NavbarSmartphone />
        </div>
      </section>
    </div>
  );
}
