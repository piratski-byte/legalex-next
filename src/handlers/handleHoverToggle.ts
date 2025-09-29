const handleHoverToggle = (id: string) => {
  const identificator = id.startsWith("#") ? id.slice(1) : id;
  const targetElement = document.getElementById(identificator);

  targetElement?.classList.toggle("hidden");
};

export default handleHoverToggle;
