// Initialize cart count and total
let cartCount = 0;
let totalPrice = 0;

// Function to update cart display
function updateCartDisplay() {
    document.getElementById('cart').innerText = `Cart (${cartCount})`;
}

// Function to add item to cart
function addToCart(productName, price) {
    cartCount++;
    totalPrice += price;
    alert(productName + ' has been added to your cart!You have all '+ cartCount +' Product in your cart for Total: Rs.' + totalPrice.toFixed(2));
    updateCartDisplay();
}

// Function to simulate buy now
function buyNow(productName, price) {
    alert('You are buying ' + productName + ' for Rs.' + price.toFixed(2));
}

document.getElementById('cart').addEventListener('click' , (event1) => {
    event1.preventDefault();
    if(cartCount>0) {
        alert('You have '+ cartCount +' items in your cart.');
    }
    else
    {
        alert('Your Cart is Empty.');
    }
})

document.getElementById('contact').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Retrieve form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
   const message = document.getElementById('message').value;
    
    // Simple form validation
    if (name && email && message) {
        document.getElementById('formMessage').innerHTML = 
            `<p>Thank you, ${name}! Your message has been sent.</p>`;
        
        // Clear form fields
        
        event.target.reset();
    } 
});