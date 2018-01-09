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
    var response='In your cart, you have'

    if (cart.length === 0 ) {
        console.log('Your shopping cart is empty.')
    }

    for (var i=0; i < cart.length; i++) {
        if (i === 0) {
            // This is the first iteration
            response=`${response} ${formatCartItem(cart[i])}`
        } else if ( i === (cart.length - 1) && i === 1 ) {
            // This is the last iteration of a cart with two elements
            response=`${response} and ${formatCartItem(cart[i])}`
        } else if ( i === (cart.length - 1) ) {
            // This is the last iteration of a cart with more than two elements
            response=`${response}, and ${formatCartItem(cart[i])}`
        } else {
            // This is an intermediate iteration
            response=`${response}, ${formatCartItem(cart[i])}`
        }
    }
    response=`${response}.`
    console.log(response)
}

function formatCartItem(item) {
    for (var property in item) {
        if (item.hasOwnProperty(property)) {
            return `${property} at \$${item[property]}`
        }
    }
}



function total() {
    var total = 0
    for (var i=0; i < cart.length; i++) {      
        total += getCartItemPrice(cart[i])
     }
     return total
}

function getCartItemPrice(item) {
    for (var property in item) {
        if (item.hasOwnProperty(property)) {
            return item[property]
        }
    }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
