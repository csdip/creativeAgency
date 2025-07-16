
// Mobile Menu JS

let navBtn = document.querySelector('.nav-btn');
let mainMenu = document.querySelector('.main-menu');
let overlay = document.querySelector('.overlay');
let body = document.querySelector('body');
let preloader = document.querySelector('#preloader');
let hiddenPreloader = document.querySelector('.preloader-hidden');

navBtn.addEventListener('click', ()=>{
    navBtn.classList.toggle('active');
    mainMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    body.classList.toggle('fix');
})




//Guideline Slides
const content = [
    {
      slide: "slide-1",
      main: "Brand naming & guidelines",
      title: "Lean Product Roadmap",
      desc: "2019 project",
    },
    {
      slide: "slide-2",
      main: "Brand identity & merchandise",
      title: "New Majestic Hotel",
      desc: "2018 Project",
    },
    {
      slide: "slide-3",
      main: "Brand identity & web design",
      title: "Crypto Dashboard",
      desc: "2016 Project",
    },
  ];



const guidline = document.getElementById("guidline");
guidline.innerHTML = `
        <div class="left">
            <img src="assets/img/shape-light.svg" alt="shape" class="bg-shape-light">
            <div class="content">
                <h5 class="main-title"></h5>
            <div class="slider-btn">
                <div class="btn prev-btn"></div>
                <div class="btn next-btn"></div>
            </div>
            </div>
        </div>
        <div class="right">
            <div class="slider-img">
                <div class="content">
                    <h6 class="guidline-title">Lean Product Roadmap</h6>
                    <p class="guidline-des"></p>
                </div>
            </div>
        </div>
`;


const heading = document.querySelector('.main-title');
const title = document.querySelector('.guidline-title');
const des = document.querySelector('.guidline-des');
const bgImg = document.querySelector('.slider-img');


let baseIndex = 0;

function updateContent() {
  heading.innerHTML = content[baseIndex].main;
  title.innerHTML = content[baseIndex].title;
  des.innerHTML = content[baseIndex].desc;
  bgImg.style.backgroundImage = `url(assets/img/${content[baseIndex].slide}.jpg)`;
}

updateContent();

const previous = document.querySelector(".prev-btn");
const next = document.querySelector(".next-btn");

previous.addEventListener("click", () => {
  baseIndex = (baseIndex - 1 + content.length) % content.length;
  updateContent();
});

next.addEventListener("click", () => {
  baseIndex = (baseIndex + 1) % content.length;
  updateContent();
});



AOS.init({
    duration: 600,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});








