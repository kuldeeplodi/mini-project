const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "AIR FORCE",
    price: 299,
    colors: [
      {
        code: "black",
        img: "/images/image 1.webp",
      },
      {
        code: "darkblue",
        img: "/images/image 7.webp",
      },
    ],
  },
  {
    id: 2,
    title: "AIR JORDAN",
    price: 299,
    colors: [
      {
        code: "green",
        img: "/images/image 8.webp",
      },
      {
        code: "lightgray",
        img: "/images/image 6(a).webp",
      },
    ],
  },
  {
    id: 3,
    title: "BLAZER",
    price: 199,
    colors: [
      {
        code: "green",
        img: "/images/image 6(a).webp",
      },
      {
        code: "lightgray",
        img: "/images/image 8.webp",
      },
    ],
  },
  {
    id: 4,
    title: "CRATER",
    price: 399,
    colors: [
      {
        code: "green",
        img: "/images/image 6(a).webp",
      },
      {
        code: "lightgray",
        img: "/images/image 8.webp",
      },
    ],
  },
  {
    id: 5,
    title: "HIPPIE",
    price: 499,
    colors: [
      {
        code: "green",
        img: "/images/image 6(a).webp",
      },
      {
        code: "lightgray",
        img: "/images/image 8.webp",
      },
    ],
  },
];

let choosenproduct = products[0];
const currentproductImg = document.querySelector(".productImg");
const currentproductTitle = document.querySelector(".productTitle");
const currentproductPrice = document.querySelector(".productprice");
const currentproductColor = document.querySelectorAll(".color");
const currentproductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    choosenproduct = products[index];
    currentproductTitle.textContent = choosenproduct.title;
    currentproductPrice.textContent = "Rs" + choosenproduct.price;

    currentproductImg.src = choosenproduct.colors[0].img;
  });
});
currentproductColor.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentproductImg.src = choosenproduct.colors[index].img;
  });
});
currentproductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentproductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});
const productButton = document.querySelector(".productbutton");
const Payment = document.querySelector(".payment");
const Close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  Payment.style.display = "flex";
});
Close.addEventListener("click", () => {
  Payment.style.display = "none";
});

// let Circle = document.querySelector(".color-options");
// Circle.addEventListener("click", (e) => {
//   let target = e.target;
//   if (target.classList.contains("circle")) {
//     Circle.querySelector(".active").classList.remove("active");
//     target.classList.add("active");
//     document.querySelector(".main-img .active").classList.remove("active");
//     document.querySelector(`.main-img .${target.id}`).classList.add("active");
//   }
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
