export const handleScroll = (href: string, callback?: () => void) => {
  const section = document.querySelector(href);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }

  if (callback) {
    callback();
  }
};
