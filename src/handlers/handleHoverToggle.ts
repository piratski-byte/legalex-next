export const handleHoverToggle = (id: string) => {
  const identificator = id.startsWith("#") ? id.slice(1) : id;
  const targetElement = document.getElementById(identificator);

  console.log(targetElement);
  targetElement?.classList.toggle("hidden");
};
