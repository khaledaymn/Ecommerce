document.addEventListener('DOMContentLoaded', function() {
    // Get cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const invoiceBody = document.getElementById('invoice-body');
    const invoiceTotalAmount = document.getElementById('invoice-total-amount');
    const confirmPurchaseBtn = document.getElementById('confirm-purchase');
    const menuToggle = document.getElementById('menu-toggle');
    const navUl = document.querySelector('nav ul');

    // Populate the invoice table
    let totalPrice = 0;
    cartItems.forEach(item => {
        const row = document.createElement('tr');
        const itemTotal = item.quantity * item.price;
        totalPrice += itemTotal;

        row.innerHTML = `
            <td>
                <div class="product-info">
                    <img src="/Image/${item.image}" alt="${item.name}" class="product-image">
                    <span>${item.name}</span>
                </div>
            </td>
            <td>${item.quantity}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>$${itemTotal.toFixed(2)}</td>
        `;
        invoiceBody.appendChild(row);
    });

    // Update the total amount
    invoiceTotalAmount.textContent = totalPrice.toFixed(2);

    // Confirm purchase button click event
    confirmPurchaseBtn.addEventListener('click', function() {
        if (cartItems.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        
        // Clear the cart after successful purchase
        localStorage.removeItem("cartItems");
        alert('Purchase confirmed! Thank you for your order.');
        // Redirect to home page or order confirmation page
        window.location.href = '/HomePage/home.html';
    });

    // Mobile menu toggle
    menuToggle.addEventListener('click', function() {
        navUl.classList.toggle('show');
    });
});

