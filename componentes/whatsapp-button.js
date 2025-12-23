// whatsapp-button.js
document.addEventListener('DOMContentLoaded', function() {
    const whatsappHTML = `
        <a href="https://wa.me/573001234567?text=Hola,%20tengo%20una%20consulta" 
           class="whatsapp-float" 
           target="_blank"
           rel="noopener noreferrer">
            <i class="fab fa-whatsapp"></i>
        </a>
    `;
    document.body.insertAdjacentHTML('beforeend', whatsappHTML);
});