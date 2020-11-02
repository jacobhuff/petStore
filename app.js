var shop = [
  {
    image: 'images/toyProduct.png',
    price: '$5.99'
  },
  {
    image: 'images/toyProduct.png',
    price: '$2.99'
  },
  {
    image: 'images/toyProduct.png',
    price: '$19.99'
  },
  {
    image: 'images/toyProduct.png',
    price: '$39.99'
  },
  {
    image: 'images/toyProduct.png',
    price: '$10.99'
  }
]

var postHTML = `<h2 class='product-header'>Toys</h2>`;

document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < shop.length; i++) {
    postHTML += `<div class='product'><div class='product-img'>` +
      `<img src='` + shop[i].image + `' alt=''></div><p>` + shop[i].price + `</p>` +
      `<button>Buy</button></div>`;
  }

  document.getElementById("toys-row").innerHTML = postHTML;
});

