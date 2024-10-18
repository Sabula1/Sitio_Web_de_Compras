// Función para manejar eventos en la página de categorías
document.addEventListener('DOMContentLoaded', function() {
    // Ejemplo: mostrar un mensaje cuando se selecciona una categoría
    const categoryLinks = document.querySelectorAll('.categories ul li a');

    categoryLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evitar el comportamiento por defecto del enlace
            alert('Categoría seleccionada: ' + this.textContent);
        });
    });
});
