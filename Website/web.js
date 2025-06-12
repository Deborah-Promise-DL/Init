let currentUser = null;
let products = [
    { title: 'Smartphone', brand: 'Samsung', price: '₹25,000', description: 'Samsung Galaxy A52, 6GB RAM, 128GB Storage.' },
    { title: 'Laptop', brand: 'Dell', price: '₹55,000', description: 'Dell Inspiron 14, 8GB RAM, 512GB SSD.' },
    { title: 'Headphones', brand: 'Sony', price: '₹3,000', description: 'Sony WH-1000XM4, Noise-cancelling.' },
    { title: 'Washing Machine', brand: 'LG', price: '₹20,000', description: 'LG 6.5kg, Fully Automatic, Front Load.' }
];

// Simulate user login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email === 'user@domain.com' && password === 'password123') {
        currentUser = email;
        document.getElementById('login-page').classList.add('hidden');
        document.getElementById('product-page').classList.remove('hidden');
        displayProducts(products);
    } else {
        document.getElementById('login-error').textContent = 'Invalid email or password';
    }
});

// Logout function
function logout() {
    currentUser = null;
    document.getElementById('product-page').classList.add('hidden');
    document.getElementById('login-page').classList.remove('hidden');
}

// Search products based on query
function searchProducts() {
    const searchQuery = document.getElementById('product-search').value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(searchQuery) ||
        product.brand.toLowerCase().includes(searchQuery) ||
        product.price.toLowerCase().includes(searchQuery)
    );

    displayProducts(filteredProducts);
}

// Display products
function displayProducts(filteredProducts) {
    const productList = document.getElementById('products');
    productList.innerHTML = '';

    if (filteredProducts.length === 0) {
        productList.innerHTML = '<li>No products found.</li>';
    } else {
        filteredProducts.forEach(product => {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>${product.title}</strong> - ${product.brand} <br>
                Price: ${product.price} <br>
                <em>${product.description}</em>
            `;
            li.onclick = () => showProductDetails(product);
            productList.appendChild(li);
        });
    }
}

// Show product details (mock action)
function showProductDetails(product) {
    alert(`Product: ${product.title}\nBrand: ${product.brand}\nPrice: ${product.price}\n\nDescription: ${product.description}`);
}
