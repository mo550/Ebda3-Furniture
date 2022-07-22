/* Open Cart Functionality */
let cartOverlay = document.querySelector('.cart-overlay');
let cartDOM = document.querySelector('.cart');
let cartBtn = document.querySelector('.cart-btn');
let closeCartBtn = document.querySelector('.close-cart');

cartBtn.addEventListener('click', () => {
  cartDOM.classList.add('showCart');
  cartOverlay.classList.add('transparentBcg');
});

closeCartBtn.addEventListener('click', () => {
  cartDOM.classList.remove('showCart');
  cartOverlay.classList.remove('transparentBcg');
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
class Products {}

// Display Products
class UI {}

// Local Storage
class Storage {}

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
  const products = new Products();
});