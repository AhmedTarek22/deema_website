import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const translate = useSelector((state) => state.language.translation);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navLinks = [
    { name: translate.Home, href: "#home" },
    { name: translate.AboutUs, href: "#about-us" },
    { name: translate.Advantages, href: "#advantages" },
    { name: translate.Services, href: "#services" },
    // { name: translate.Team, href: "#team" },
    { name: translate.Partners, href: "#partners" },
    // { name: translate.Media, href: "#media" },
    { name: translate.Awards, href: "#awards" },
    { name: translate.ContactUs, href: "#contact-us" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // متى نعتبر السكشن ظاهر؟ لما نصفه يدخل
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="relative bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-3">
        {/* Logo */}
        {/* <div className="text-2xl font-bold text-blue-600">Deema</div> */}
        <figure className="w-24">
          <a href="#home">
            <img className="w-full" src="Logo.png" alt="Logo" />
          </a>
        </figure>
        {/* Hamburger Button */}
        <button
          className="text-3xl focus:outline-none md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "X" : "☰"}
        </button>
        {/* Links */}
        <ul className="hidden flex-row gap-6 px-5 py-3 md:flex">
          {navLinks.map((link, index) => (
            <li key={index} onClick={() => setActiveLink(link.href)}>
              <a
                href={link.href}
                className={`font-semibold text-lg transition hover:text-blue-600 ${
                  activeLink === link.href ? "text-blue-600" : "text-gray-700"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <ul
          className={`${isOpen ? "absolute left-0 top-full w-full shadow-md" : "hidden"} flex flex-col md:hidden`}
        >
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={`cursor-pointer px-5 py-2 font-semibold text-gray-700 transition hover:bg-slate-100 hover:text-blue-600 ${
                activeLink === link.href && "bg-slate-200"
              }`}
              onClick={() => setActiveLink(link.href)}
            >
              <a
                href={link.href}
                className={`${activeLink === link.href && "text-blue-600"}`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
