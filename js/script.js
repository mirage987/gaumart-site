const showPage = (pageName) => {
  const allPages = document.querySelectorAll(".page");
  allPages.forEach((page) => {
    page.style.display = "none";
  });
  document.querySelector(pageName).style.display = "flex";
};
const links = [
  {
    text: "Accueil",
    link: ".page.accueil",
  },
  {
    text: "Petit déjeuner",
    link: "",
  },
  {
    text: "Plateau repas",
    link: "",
  },
  {
    text: "Buffets",
    link: "",
  },
  {
    text: "Cocktails",
    link: "",
  },
  {
    text: "Menus",
    link: "",
  },
  {
    text: "Nous contacter",
    link: ".page.contact",
  },
];

for (let i = 0; i < links.length; i++) {
  const li = document.createElement("li");
  li.classList.add("nav-link");
  li.textContent = links[i].text;
  document.querySelector("#menu").appendChild(li);
  li.addEventListener("click", (e) => {
    const listOfLi = document.querySelectorAll("#menu li");
    for (let i = 0; i < listOfLi.length; i++) {
      if (listOfLi[i].classList.contains("active")) {
        listOfLi[i].classList.remove("active");
      }
    }
    e.target.classList.add("active");
    showPage(links[i].link);
    checkScreenSize();
  });
}

window.addEventListener("load", () => {
  document.querySelector(".page.accueil").style.display = "block";
  document.getElementsByTagName("li")[0].classList.add("active");
  checkScreenSize();
});

document.querySelector("#btnToggleTheme").addEventListener("click", (e) => {
  const allElementsToChange = document.querySelectorAll(".theme");
  if (e.currentTarget.classList.contains("light")) {
    // Change dot position
    e.currentTarget.classList.remove("light");
    e.currentTarget.classList.add("dark");
    // Change dot icon
    document.querySelector("#iconSun").style.display = "none";
    document.querySelector("#iconMoon").style.display = "block";
    // Change theme color
    for (let i = 0; i < allElementsToChange.length; i++) {
      const element = allElementsToChange[i];
      element.classList.remove("light");
      element.classList.add("dark");
    }
  } else {
    // Change dot position
    e.currentTarget.classList.remove("dark");
    e.currentTarget.classList.add("light");
    // Change dot icon
    document.querySelector("#iconSun").style.display = "block";
    document.querySelector("#iconMoon").style.display = "none";
    // Change theme color
    for (let i = 0; i < allElementsToChange.length; i++) {
      const element = allElementsToChange[i];
      element.classList.remove("dark");
      element.classList.add("light");
    }
  }
});

document.querySelector("#btnToggleMenu").addEventListener("click", () => {
  const elem = document.querySelectorAll("li.nav-link");
  elem.forEach((li) =>
    li.style.display === "block"
      ? (li.style.display = "none")
      : (li.style.display = "block")
  );
});

const checkScreenSize = () => {
  const elem = document.querySelectorAll("li.nav-link");
  if (window.matchMedia("(min-width: 1200px)").matches) {
    elem.forEach((li) => (li.style.display = "block"));
  } else {
    elem.forEach((li) => (li.style.display = "none"));
  }
};

window.addEventListener("resize", function () {
  checkScreenSize();
});
