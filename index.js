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
            for (var item in cart[i]) {
                if (cart[i].hasOwnProperty(item)) {
                    response=`${response} ${item} at \$${cart[i][item]}`
                }
            }
        } else if ( i === (cart.length - 1) && i !== 1 ) {
            // This is the last iteration
            for (var item in cart[i]) {
                if (cart[i].hasOwnProperty(item)) {
                    response=`${response}, and ${item} at \$${cart[i][item]}`
                }
            }
        } else {
            // This is an intermediate iteration
            for (var item in cart[i]) {
                if (cart[i].hasOwnProperty(item)) {
                    response=`${response}, ${item} at \$${cart[i][item]}`
                }
            }
        }
    }
    response=`${response}.`
    console.log(response)
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
