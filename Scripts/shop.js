import { Products, newlyLaunchShoes, shoesProducts, babyShoes } from "../data/Products.js";
import { nextPageFunction} from "./utils/nextPage.js";

let shoesDetails = [];
const onsecondPage = document.querySelector(".js-second-page")
const onThirdPage = document.querySelector(".js-third-page")
const  allProducts = [...shoesProducts, ...newlyLaunchShoes] ;
// console.log(allProducts)

let shopHTML ="";
Products.forEach((Product) => {
  shopHTML +=
    `
     <div class="pro">
          <img src="${Product.image}"/>
          <div class="des">
            <span>Air Jordan sneaker</span>
            <h5>${Product.name}</h5>
             <img class="product-rating stars" src="images/rating/rating-${Product.rating.rate * 10}.png">
            <h4>RS ${Product.price}</h4>
          </div>
          <a href="#" class="cart"><i class="fa-solid fa-cart-shopping"></i></a>
      </div>
  `
});
document.querySelector(".js-allShoes-container").innerHTML = shopHTML;  
shoesDetails = document.querySelectorAll(".pro");


onsecondPage.addEventListener('click',()=>{
  document.querySelector(".js-allShoes-container").innerHTML.remove ;
  document.querySelector(".js-allShoes-container").innerHTML = nextPageFunction(allProducts);
});

onThirdPage.addEventListener('click',()=>{
  document.querySelector(".js-allShoes-container").innerHTML.remove ;
  document.querySelector(".js-allShoes-container").innerHTML = nextPageFunction(babyShoes);
  shoesDetails = document.querySelectorAll(".pro");
  console.log(shoesDetails);
});

shoesDetails.forEach(shoes => {
  shoes.addEventListener('click',()=>{
    window.location.href = "singlepro.html"
    console.log("done");
  })
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
