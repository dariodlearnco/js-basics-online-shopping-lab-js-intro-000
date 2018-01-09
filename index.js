var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
    // write your code here
    getCart().push({ [item] : getRandomInt(1,100)})
    console.log(`${item} has been added to your cart.`)
    return getCart()
}

function getRandomInt(min, max) {
  // The maximum is exclusive and the minimum is inclusive
  // To make the maximum inclusive, we added 1 to the value.
  min = Math.ceil(min);
  max = Math.floor(max) + 1;
  return Math.floor(Math.random() * (max - min)) + min;
}

function viewCart() {
    var cart=getCart()
    var response='In your cart, you have '
    
    for (var i=0; i < cart.length; i++) {
        
    }
    `In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.`
        + If the cart is empty, the function should instead print out `Your shopping cart is empty.`
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
