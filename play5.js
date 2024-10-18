// Función para agregar al carrito desde la página de detalles del producto
document.getElementById('add-to-cart')?.addEventListener('click', function() {
    const product = {
        id: 1, // Identificador único del producto
        name: 'Consola PlayStation 5',
        price: 499.99,
        quantity: parseInt(document.getElementById('quantity').value), // Cantidad seleccionada
        image: 'ps5.jpeg' // Imagen del producto
    };

    addToCart(product); // Llamada a la función para agregar al carrito
});

// Función para agregar productos al carrito en localStorage
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Verificar si el producto ya está en el carrito
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
        // Si el producto ya está en el carrito, simplemente aumentamos la cantidad
        existingProduct.quantity += product.quantity;
    } else {
        // Si no está, lo agregamos al carrito
        cart.push(product);
    }

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Producto agregado al carrito.');
}
