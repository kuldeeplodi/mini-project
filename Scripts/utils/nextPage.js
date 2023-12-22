export function nextPageFunction(newProducts,shoesDetails){
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
    shoesDetails = document.querySelectorAll(".pro");
    console.log(shoesDetails);
    return nextShopHTML;
}