const slides = [
  {
    "image": "slide1.jpg",
    "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    "image": "slide2.jpg",
    "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    "image": "slide3.jpg",
    "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    "image": "slide4.png",
    "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>",
  },
]; 

const bannerImg = document.querySelector(".banner-img");
const txtImg = document.querySelector("p");
const blocImgDot = document.querySelector(".dots");
let index = 0;

document.querySelector(".arrow_right").addEventListener("click", next);
function next() {
  if (index < slides.length - 1) {
    index++;
  } else {
    index = 0;
  }
  // change l image et le txt
  imgSlide();
}

document.querySelector(".arrow_left").addEventListener("click", previous);
function previous() {
  if (index > 0) {
    index--;
  } else {
    index = slides.length - 1;
  }
  imgSlide();
}

function imgSlide() {
  bannerImg.src = "./assets/images/slideshow/" + slides[index].image;
  txtImg.innerHTML = slides[index].tagLine;
  // point visible
  btnDots();
}

function btnDots() {
  const dotImgs = blocImgDot.querySelectorAll(".dot");

  dotImgs.forEach((dotImg) => {
    dotImg.classList.remove("dot_selected");
  });

  dotImgs[index].classList.add("dot_selected");
}

// efface les points existant
blocImgDot.innerHTML = ""; 

for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.dataset.order = i;
  dot.addEventListener("click", dotSelected);
  blocImgDot.appendChild(dot);
}

// activation du premier point
blocImgDot.children[0].classList.add("dot_selected"); 
function dotSelected(e) {
  index = parseInt(e.target.dataset.order);
  imgSlide();
}
