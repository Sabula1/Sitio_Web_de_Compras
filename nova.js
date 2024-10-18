// Función para manejar eventos en la página de inicio
document.addEventListener('DOMContentLoaded', function() {
    // Ejemplo: mostrar un mensaje cuando se hace clic en un producto
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('click', function() {
            alert('Producto seleccionado: ' + this.querySelector('h3').textContent);
        });
    });
});
