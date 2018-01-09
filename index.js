var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

unction addToCart(item) {
    // write your code here
    var item = { [item] : getRandomInt(1,100)}


}

function getRandomInt(min, max) {
  // The maximum is exclusive and the minimum is inclusive
  // To make the maximum inclusive, we added 1 to the value.
  min = Math.ceil(min);
  max = Math.floor(max) + 1;
  return Math.floor(Math.random() * (max - min)) + min;
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
