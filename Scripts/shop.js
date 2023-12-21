import { Products, newlyLaunchShoes } from "../data/Products.js";

const  allProducts = [...Products, ...newlyLaunchShoes] ;
console.log(allProducts)
let shopHTML ="";
allProducts.forEach((Product) => {
  shopHTML +=
    `
     <div class="pro">
          <img src="${Product.image}"/>
          <div class="des">
            <span>${Product.name}</span>
            <h5>High Quality Shoes</h5>
             <img class="product-rating stars" src="images/rating/rating-${Product.rating * 10}.png">
            <h4>RS ${Product.price}</h4>
          </div>
          <a href="#" class="cart"><i class="fa-solid fa-cart-shopping"></i></a>
      </div>
  `
});

document.querySelector(".js-allShoes-container").innerHTML = shopHTML ; 

let product = document.querySelectorAll(".pro");
product.forEach((Shoes)=>{
  Shoes.addEventListener('click', () => {
    window.location.href = "singlepro.html";
  })
})

// Product.forEach(element => {
//   element.addEventListener('click',()=>{
//     window.location.href = "singlepro.html";
//   })
// });
// Product[0].addEventListener("click", () => {
//   window.location.href = "singlepro.html";
// });
// Product[1].addEventListener("click", () => {
//   window.location.href = "singlepro.html";
// });
// Product[2].addEventListener("click", () => {
//   window.location.href = "singlepro.html";
// });
// Product[3].addEventListener("click", () => {
//   window.location.href = "singlepro.html";
// });
// Product[4].addEventListener("click", () => {
//   window.location.href = "singlepro.html";
// });
// Product[5].addEventListener("click", () => {
//   window.location.href = "singlepro.html";
// });
// Product[6].addEventListener("click", () => {
//   window.location.href = "singlepro.html";
// });
// Product[7].addEventListener("click", () => {
//   window.location.href = "singlepro.html";
// });
// Product[8].addEventListener("click", () => {
//   window.location.href = "singlepro.html";
// });
// Product[9].addEventListener("click", () => {
//   window.location.href = "singlepro.html";
// });
// Product[10].addEventListener("click", () => {
//   window.location.href = "singlepro.html";
// });
// Product[11].addEventListener("click", () => {
//   window.location.href = "singlepro.html";
// });
// Product[12].addEventListener("click", () => {
//   window.location.href = "singlepro.html";
// });
// Product[13].addEventListener("click", () => {
//   window.location.href = "singlepro.html";
// });
// Product[14].addEventListener("click", () => {
//   window.location.href = "singlepro.html";
// });
// Product[15].addEventListener("click", () => {
//   window.location.href = "singlepro.html";
// });
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
