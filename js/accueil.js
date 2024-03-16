const imagesLinks = [
  "./imgs/Slider 11.jpg",
  "./imgs/csm_patissier_traiteur_a_paris.jpg",
  "./imgs/csm_traiteur.jpg",
  "./imgs/csm_traiteur_creat.jpg",
  "./imgs/sale_sucre.jpg",
  "./imgs/Slider 7.jpg",
  "./imgs/traiteur_defile_mode.jpg",
];
const slider = document.getElementById("slider");
let currentIndexOfImg = 0;
let sliderAnimation;
const previousImage = () => {
  currentIndexOfImg -= 1;
  slide();
  clearInterval(sliderAnimation);
  sliderAnimation = setInterval(() => {
    currentIndexOfImg += 1;
    slide();
  }, 5000);
};

const nextImage = () => {
  currentIndexOfImg += 1;
  slide();
  clearInterval(sliderAnimation);
  sliderAnimation = setInterval(() => {
    currentIndexOfImg += 1;
    slide();
  }, 5000);
};

const slide = () => {
  const lastImg = document.querySelector("#slider");
  if (lastImg) {
    lastImg.remove();
  }
  if (currentIndexOfImg >= imagesLinks.length) {
    currentIndexOfImg = 0;
  }
  if (currentIndexOfImg < 0) {
    currentIndexOfImg = imagesLinks.length - 1;
  }
  btnAnimation();
  const img = document.createElement("img");
  img.setAttribute("id", "slider");
  img.setAttribute("src", imagesLinks[currentIndexOfImg]);
  // slider.setAttribute("src", imagesLinks[currentIndexOfImg]);
  document.querySelector("div.img-container").appendChild(img);
};

const btnAnimation = () => {
  const btnArray = document.querySelectorAll("div.btn-slider");
  for (let i = 0; i < btnArray.length; i++) {
    if (i === currentIndexOfImg) {
      btnArray[i].classList.add("active");
    } else {
      btnArray[i].classList.remove("active");
    }
  }
};

window.addEventListener("load", () => {
  for (let i = 0; i < imagesLinks.length; i++) {
    const div = document.createElement("div");
    div.classList.add("btn-slider");
    div.classList.add("theme");
    div.classList.add("light");
    div.setAttribute("data-value", i);
    div.addEventListener("click", (e) => {
      currentIndexOfImg = parseInt(e.target.getAttribute("data-value"));
      btnAnimation();
      slide();
      clearInterval(sliderAnimation);
      sliderAnimation = setInterval(() => {
        currentIndexOfImg += 1;
        slide();
      }, 5000);
    });
    document.querySelector(".btn-slider-group").appendChild(div);
  }
  slide();
  sliderAnimation = setInterval(() => {
    currentIndexOfImg += 1;
    slide();
  }, 5000);
});
