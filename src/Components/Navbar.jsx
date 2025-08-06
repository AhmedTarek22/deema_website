import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const translate = useSelector((state) => state.language.translation);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const navLinks = [
    { name: translate.Home, href: "#home" },
    { name: translate.AboutUs, href: "#about-us" },
    { name: translate.Store, href: "#store" },
    // { name: translate.Advantages, href: "#advantages" },
    // { name: translate.Services, href: "#services" },
    // { name: translate.Partners, href: "#partners" },
    // { name: translate.Awards, href: "#awards" },
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
    <nav className="fixed top-0 z-50 h-[90px] w-full bg-[#FCFCF9] shadow-md md:px-12">
      <div className="container mx-auto flex items-center justify-between px-3">
        {/* Logo */}
        <figure className="w-24">
          <a href="#home">
            <img className="w-full" src="nav-logo.png" alt="Logo" />
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
                className={`text-xl font-semibold transition hover:text-[#AB506D] ${
                  activeLink === link.href ? "text-[#AB506D]" : "text-gray-800"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile Menu */}
        <ul
          className={`${
            isOpen
              ? "absolute left-0 top-full w-full bg-zinc-50 shadow-md"
              : "hidden"
          } flex flex-col md:hidden`}
        >
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={`cursor-pointer px-5 py-2 font-semibold text-gray-700 transition hover:bg-slate-100 hover:text-blue-600 ${
                activeLink === link.href && "bg-slate-200"
              }`}
              onClick={() => {
                setActiveLink(link.href);
                setIsOpen(false); // إغلاق القائمة بعد الضغط
              }}
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
        <div className="flex items-center gap-4">
          <figure className="h-[45px] w-[45px]">
            <img src="basket.png" alt="basket" />
          </figure>
          <figure className="h-[45px] w-[45px]">
            <img src="profile.png" alt="basket" />
          </figure>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
