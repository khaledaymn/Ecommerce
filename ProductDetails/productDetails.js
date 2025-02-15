var Data = JSON.parse(localStorage.getItem("productDetails"))[0];
var addtocart = document.getElementsByClassName("add-to-cart")[0];
document.addEventListener('DOMContentLoaded', function() {
    const mainImage = document.getElementById('main-image');
    var image = Data.image;

    
    mainImage.src = "/Image/"+image;

    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    var existingItem = cartItems.find(item => item.id === cartData.id);

    if (existingItem) 
        {
        addtocart.setAttribute("style", "background-color: #666;cursor: not-allowed;");
    } 

    const menuToggle = document.getElementById('menu-toggle');
    const navUl = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        navUl.classList.toggle('show');
    });
});


var na = document.getElementById("name");console.log("Product Details:", Data);
console.log("Cart Items:", cartItems);
console.log("Existing Item:", existingItem);
console.log("Cart Data:", cartData);
var data = JSON.parse(localStorage.getItem("userData"));
na.textContent = data.name;

var Pname = document.getElementById("ProductName");
Pname.textContent = Data.name;
var price = document.getElementsByClassName("price")[0];
price.textContent = "$"+Data.price;

var disc = document.getElementsByClassName("description")[0];
// disc.textContent = Data.description;

var cartData = {
    "id": Data.id,
    "name": Data.name,
    "price": Data.price,
    "image": Data.image,
    "quantity": document.getElementById("quantity").value,
    "size": this.quantity.onchange = function(){
        document.getElementById("size").value;
    }
}

var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    var existingItem = cartItems.find(item => item.id === cartData.id);
    
    if (existingItem) {
        addtocart.setAttribute("style", "background-color: #666;cursor: not-allowed;");
    } 



addtocart.addEventListener("click", function() {

    addtocart.disabled = true;  
    
    cartItems.push(cartData);

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
});


