document.addEventListener('DOMContentLoaded', function() {
    // Get cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    
    
    // Display user name
    const userData = JSON.parse(localStorage.getItem('userData'));
    const nameElement = document.getElementById('name');
    if (userData && nameElement) {
        nameElement.textContent = userData.name;
    }

    function updateCart() {
        cartContainer.innerHTML = '';
        let totalPrice = 0;

        cartItems.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="/Image/${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price}</div>
                    <div class="quantity-controls">
                        <button class="quantity-btn minus" onclick="updateQuantity(${index}, -1)">-</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn plus" onclick="updateQuantity(${index}, 1)">+</button>
                    </div>
                </div>
                <button class="delete-btn" onclick="deleteItem(${index})">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            cartContainer.appendChild(cartItem);
            totalPrice += item.price * item.quantity;
        });

        totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
    }

    // Update quantity function
    window.updateQuantity = function(index, change) {
        if (cartItems[index]) {
            cartItems[index].quantity = Math.max(1, cartItems[index].quantity + change);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            updateCart();
        }
    };
// Delete item function
window.deleteItem = function(index) {
    if (confirm('Are you sure you want to remove this item from your cart?')) {
        cartItems.splice(index, 1);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        updateCart();
    }
};
    // Initial cart render
    updateCart();

    // Buy Now button handler
    const buyNowBtn = document.querySelector('.buy-now-btn');
    buyNowBtn.addEventListener('click', function() {
        updateCart();
        window.location.href="/ConfirmBuy/confirmBuy.html"
    });

    // Menu toggle for responsive design
    const menuToggle = document.getElementById('menu-toggle');
    const navUl = document.querySelector('nav ul');
    
    menuToggle.addEventListener('click', function() {
        navUl.classList.toggle('show');
    });
});

