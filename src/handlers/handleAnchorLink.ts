const handleAnchorLink = (href: string) => {
  const id = href.startsWith("#") ? href.slice(1) : href;
  const headerHeight = 80;

  const element = document.getElementById(id);
  if (!element) return;

  const elementPosition =
    element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - headerHeight;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth", // если хочешь плавность
  });

  // Обновляем URL без прыжка и перезагрузки
  history.pushState(null, "", href);
};

export default handleAnchorLink;
