// scroll-top-button.js
document.addEventListener('DOMContentLoaded', function() {
    const scrollTopHTML = `
        <button class="scroll-top-float" aria-label="Volver arriba">
            <i class="fas fa-arrow-up"></i>
        </button>
    `;
    
    document.body.insertAdjacentHTML('beforeend', scrollTopHTML);
    
    const scrollTopButton = document.querySelector('.scroll-top-float');
    
    // Mostrar/ocultar botón según scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopButton.classList.add('show');
        } else {
            scrollTopButton.classList.remove('show');
        }
    });
    
    // Scroll suave hacia arriba al hacer click
    scrollTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});