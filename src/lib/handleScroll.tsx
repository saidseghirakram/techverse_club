import { NavigateFunction, Location } from "react-router-dom";

export const handleScroll = (
  href: string,
  navigate: NavigateFunction,
  location: Location,
  callback?: () => void
) => {
  const scrollToSection = () => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    if (callback) callback();
  };

  if (location.pathname !== "/") {
    navigate("/", { replace: true });
    setTimeout(scrollToSection, 100); // Delay to ensure navigation is complete
  } else {
    scrollToSection();
  }
};
