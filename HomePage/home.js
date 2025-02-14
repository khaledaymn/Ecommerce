// JavaScript for basic interactivity
const products = [
    { id: 1, name: "MacBook Air M2", price: 1099.99, category: "electronics", image: "macbook_air_m2.jpg" },
    { id: 2, name: "iPhone 15 Pro", price: 999.99, category: "electronics", image: "iphone_15_pro.jpg" },
    { id: 3, name: "Samsung Galaxy S23", price: 1199.99, category: "electronics", image: "galaxy_s23_ultra.jpg" },
    { id: 4, name: "Sony WH-1000XM5", price: 349.99, category: "electronics", image: "sony_wh1000xm5.jpg" },

    { id: 5, name: "Nike Air Force 1", price: 120.00, category: "clothing", image: "nike_air_force_1.jpg" },
    { id: 6, name: "Adidas Ultraboost", price: 180.00, category: "clothing", image: "adidas_ultraboost.jpg" },
    { id: 7, name: "Levi's 501 Jeans", price: 89.99, category: "clothing", image: "levis_501.jpg" },
    { id: 8, name: "Polo Ralph T-Shirt", price: 45.00, category: "clothing", image: "ralph_lauren_tshirt.jpg" },

    { id: 9, name: "LG 55-inch OLED TV", price: 1399.99, category: "home_appliances", image: "lg_oled_tv.jpg" },
    { id: 10, name: "Vacuum Cleaner", price: 699.99, category: "home_appliances", image: "dyson_v15.jpg" },
    { id: 11, name: "Bosch Dishwasher", price: 799.99, category: "home_appliances", image: "bosch_dishwasher.jpg" },
    { id: 12, name: "Samsung Refrigerator", price: 2499.99, category: "home_appliances", image: "samsung_fridge.jpg" },

    { id: 13, name: "Dior Lipstick", price: 38.00, category: "beauty", image: "dior_lipstick.jpg" },
    { id: 14, name: "Estee Foundation", price: 42.00, category: "beauty", image: "estee_lauder_foundation.jpg" },
    { id: 15, name: "Chanel Perfume", price: 135.00, category: "beauty", image: "chanel_perfume.jpg" },
    { id: 16, name: "Olaplex Hair", price: 28.00, category: "beauty", image: "olaplex_hair_treatment.jpg" },

    { id: 17, name: "PlayStation 5", price: 499.99, category: "gaming", image: "ps5.jpg" },
    { id: 18, name: "Xbox Series X", price: 499.99, category: "gaming", image: "xbox_series_x.jpg" },
    { id: 19, name: "Nintendo Switch", price: 349.99, category: "gaming", image: "nintendo_switch_oled.jpg" },
    { id: 20, name: "Wireless Mouse", price: 129.99, category: "gaming", image: "logitech_g_pro.jpg" },
];

const productGrid = document.getElementById('product-grid');
const categoryButtons = document.querySelectorAll('.category-filters button');

function displayProducts(category = 'all') {
    productGrid.innerHTML = '';
    products.forEach(product => {
        var p = product;
        if (category === 'all' || product.category === category) {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
            <div class="productimg">
                <img  src="/Image/${product.image}" alt="${product.name}">
                </div>
                <div class="product-info"   >
                    <h3>${product.name}</h3>
                    <p>$${product.price.toFixed(2)}</p>
                    <div style="display:flex;justify-content: space-between;">
                    <button class="addtocart" id="atc" onClick="add(${product.id})">
                    <i class="fas fa-shopping-cart"></i>
                    </button>
                    <button class="view" id="vD" onClick ="view(${product.id})">View Details</button>
                    </div>
                </div>
            `;
            productGrid.appendChild(productCard);
        }
    });
}

localStorage.setItem("products",JSON.stringify(products));
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        displayProducts(button.dataset.category);
    });
}); 

// Initial display
displayProducts();


const images = [
    "/Image/1.jpg",
    "/Image/2.jpg",
    "/Image/3.jpg",
    "/Image/4.jpg",
  ]
  
  
  let currentIndex = 0
  const sliderImage = document.getElementById("slider-image")
  const prevButton = document.getElementById("prev-button")
  const nextButton = document.getElementById("next-button")
  
  function showImage(index) {
    currentIndex = (index + images.length) % images.length
    sliderImage.src = images[currentIndex]
  }
  
  function showNextImage() {
    showImage(currentIndex + 1)
  }
  
  function showPrevImage() {
    showImage(currentIndex - 1)
  }
  
  prevButton.addEventListener("click", showPrevImage)
  nextButton.addEventListener("click", showNextImage)
  
  // Auto-rotate every 3 seconds
  setInterval(showNextImage, 5000)
  
  // Initial image load
  showImage(currentIndex)
  
  
  window.onscroll = function() {
    let button = document.getElementById("goToTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}


document.getElementById("logout").addEventListener("click", function() {
    window.location.href = "/Login/index.html";
});


document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navUl = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        navUl.classList.toggle('show');
    });
});


var na = document.getElementById("name");

var data = JSON.parse(localStorage.getItem("userData"));
na.textContent = data.name;


var addtocart = document.getElementById("atc");

function view(id) {
    var product = products.filter(p => p.id === id);
    console.log(product);
    
    localStorage.setItem("productDetails",JSON.stringify(product));
    window.location.href = "/ProductDetails/productDetails.html";

}



document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        history.pushState(null, null, location.href);
        window.onpopstate = () => {
          history.pushState(null, null, location.href);
        };
      }, 0);
    });

    
function add(id) {
    
    var product = products.filter(p => p.id === id)[0];
    console.log(product);
    
    var cartData = {
        "id": product.id,
        "name": product.name,
        "price": product.price,
        "image": product.image,
        "quantity": 1,
        "size": "s"
    }
    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

var existingItem = cartItems.find(item => item.id === cartData.id);

if (existingItem) {
    addtocart.setAttribute("style", "background-color: #666;cursor: not-allowed;");
    addtocart.disabled = true;  
} 
else{
    console.log("aaa");
    cartItems.push(cartData);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}
}

