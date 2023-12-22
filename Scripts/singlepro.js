import { Products, newlyLaunchShoes, shoesProducts, babyShoes } from "../data/Products.js";

let MainImg = document.getElementById("Mainimg");
let SmallImg = document.getElementsByClassName("Smallimg");


SmallImg[0].addEventListener("click", () => {
  MainImg.src = SmallImg[0].src;
});
SmallImg[1].addEventListener("click", () => {
  MainImg.src = SmallImg[1].src;
});
SmallImg[2].addEventListener("click", () => {
  MainImg.src = SmallImg[2].src;
});
SmallImg[3].addEventListener("click", () => {
  MainImg.src = SmallImg[3].src;
});


let Bar = document.getElementById("bar");
let CLOSE = document.getElementById("close");
let Nav = document.getElementById("navbar");
if (Bar) {
  Bar.addEventListener("click", () => {
    Nav.classList.add("active");
  });
}
if (CLOSE) {
  CLOSE.addEventListener("click", () => {
    Nav.classList.remove("active");
  });
}
