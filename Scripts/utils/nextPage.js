export function nextPageFunction(shoes){
  shoes.forEach(shoes => {
    shoes.addEventListener('click', () => {
      window.location.href = "singlepro.html"
      console.log("done");
    })
  });

}

export function nextPageFunction(newProducts){
    let nextShopHTML = "";
    newProducts.forEach((Product) => {
        nextShopHTML +=
            `
       <div class="pro">
          <img src="${Product.image}"/>
          <div class="des">
            <span>Air Jordan sneaker</span>
            <h5>${Product.name}</h5>
             <img class="product-rating stars" src="images/rating/rating-${Product.rating * 10}.png">
            <h4>RS ${Product.price}</h4>
          </div>
          <a href="#" class="cart"><i class="fa-solid fa-cart-shopping"></i></a>
      </div>
  `
    });
    return nextShopHTML;
}