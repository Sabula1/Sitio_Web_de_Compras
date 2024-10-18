// Función para agregar al carrito desde la página de detalles del producto
document.getElementById('add-to-cart')?.addEventListener('click', function() {
    const product = {
        id: 1, // Identificador único del producto
        name: 'Consola PlayStation 5',
        price: 499.99,
        quantity: parseInt(document.getElementById('quantity').value),
        image: 'ps5.jpeg'
    };

    addToCart(product);
});

// Función para agregar productos al carrito en localStorage
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Verificar si el producto ya está en el carrito
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
        // Actualizar la cantidad si ya está en el carrito
        existingProduct.quantity += product.quantity;
    } else {
        // Agregar nuevo producto al carrito
        cart.push(product);
    }

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Producto agregado al carrito.');
}

// Función para obtener los productos del carrito
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Función para eliminar un producto del carrito
function removeFromCart(productId) {
    let cart = getCart();

    // Filtrar el producto que se desea eliminar
    cart = cart.filter(item => item.id !== productId);

    // Guardar el carrito actualizado
    localStorage.setItem('cart', JSON.stringify(cart));

    // Recargar la página
    loadCartItems();
}

// Función para cargar los productos del carrito en la página del carrito
function loadCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let cart = getCart();

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>No hay productos en el carrito.</p>';
        totalPriceElement.innerText = 'Total: $0.00';
    } else {
        cartItemsContainer.innerHTML = '';
        let totalPrice = 0;

        cart.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div>
                    <h3>${product.name}</h3>
                    <p>Precio: $${product.price}</p>
                    <p>Cantidad: ${product.quantity}</p>
                    <button class="remove-btn" data-id="${product.id}">Eliminar</button>
                </div>
            `;
            cartItemsContainer.appendChild(productItem);

            totalPrice += product.price * product.quantity;
        });

        totalPriceElement.innerText = `Total: $${totalPrice.toFixed(2)}`;

        // Agregar evento a los botones de eliminar
        document.querySelectorAll('.remove-btn').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(button.getAttribute('data-id'));
                removeFromCart(productId);
            });
        });
    }
}

// Cargar los productos del carrito cuando se carga la página del carrito
document.addEventListener('DOMContentLoaded', loadCartItems);
