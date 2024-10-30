import logo from "@/assets/images/logo.png";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { Icon } from "@iconify-icon/react/dist/iconify.js";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { handleScroll } from "../lib/handleScroll";
import { NavLink } from "react-router-dom";

// Links and corresponding sections
const Links = [
  { label: "Home", href: "#Home" },
  { label: "About", href: "#About" },
  { label: "Events", href: "#Events" },
  { label: "Members", href: "#Members" },
  { label: "Partners", href: "#Partners" },
];

function Navbar() {
  const [isMenuHidden, setIsHiddenMenu] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsHiddenMenu(!isMenuHidden);
  };

  useEffect(() => {
    const handleScrollPosition = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScrollPosition);

    return () => {
      window.removeEventListener("scroll", handleScrollPosition);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.7,
      }
    );

    Links.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => {
      Links.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 px-8 ${
        isScrolled ? "bg-white/10 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center py-4 w-full">
        <NavLink to={'/'}>
          <img className="w-32 h-10" src={logo} alt="" />
        </NavLink>
        <div className="lg:flex items-center gap-4 text-lg hidden">
          {Links.map((link) => (
            <div
              key={link.label}
              className={`cursor-pointer duration-200 transition-all ${
                activeSection === link.href
                  ? "text-secondary font-semibold"
                  : "hover:text-secondary font-normal"
              }`}
              onClick={() => handleScroll(link.href)}
            >
              {link.label}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <NavLink to="contact-us">
            <HoverBorderGradient
              containerClassName="rounded-full hidden md:flex"
              as="button"
              className="bg-primary font-semibold items-center space-x-2"
            >
              <div className="flex items-center gap-2">
                <Icon icon="fluent-mdl2:contact" width="16" height="16" />
                <span>Contact us</span>
              </div>
            </HoverBorderGradient>
          </NavLink>

          <Icon
            icon="pepicons-pencil:menu"
            width="24"
            height="24"
            className="lg:hidden cursor-pointer hover:bg-secondary p-2 rounded-full"
            onClick={toggleMenu}
          />
        </div>

        {!isMenuHidden && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-screen h-screen fixed top-0 left-0 bg-primary flex flex-col items-center gap-8 text-xl lg:hidden z-50"
          >
            <div className="w-full flex justify-end p-8">
              <Icon
                onClick={toggleMenu}
                icon="material-symbols:close"
                width="32"
                height="32"
                className="cursor-pointer duration-200 transition-all hover:text-secondary"
              />
            </div>
            {Links.map((link) => (
              <div
                key={link.label}
                className={`cursor-pointer duration-200 transition-all ${
                  activeSection === link.href
                  ? "text-secondary font-semibold"
                  : "hover:text-secondary font-normal"
                }`}
                onClick={() =>
                  handleScroll(link.href, () => setIsHiddenMenu(true))
                }
              >
                {link.label}
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
