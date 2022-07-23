/* Open Cart Functionality */
let cartOverlay = document.querySelector('.cart-overlay');
let cartDOM = document.querySelector('.cart');
let cartBtn = document.querySelector('.cart-btn');
let closeCartBtn = document.querySelector('.close-cart');


// Showing Cart
cartBtn.addEventListener('click', () => {
  cartDOM.classList.add('showCart');
  cartOverlay.classList.add('transparentBg');
});

// Hidding Cart
closeCartBtn.addEventListener('click', () => {
  cartDOM.classList.remove('showCart');
  cartOverlay.classList.remove('transparentBg');
});
/* ------------------------------------------------------------------ */

const clearCartBtn = document.querySelector('.clear-cart');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const productsDOM = document.querySelector('.products-center');

// Cart
let cart = [];

// Getting The Products
class Products {
  async getProducts() {
    try {
      let result = await fetch("products.json");
      let data = await result.json();
      let products = data.items;

      // Destructuring JSON Object To Make It Easy
      products = products.map((item) => {
        let {title, price} = item.fields;
        let {id} = item.sys;
        let image = item.field.image.fields.file.url;
      });
      console.log(products);
      return products;
    } catch (error) {
      console.log(error);
    }
  }
}

// Display Products
class UI {
  displayProducts(products) {

  }
}

// Local Storage
class Storage {}

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
  const products = new Products();

  // Get all products
  products.getProducts().then((products) => {
    ui.displayProducts(products)
  }
  );
});