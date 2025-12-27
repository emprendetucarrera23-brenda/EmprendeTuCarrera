// subscription-button.js
document.addEventListener('DOMContentLoaded', function() {
    // HTML del botón flotante de suscripción
    const subscriptionButtonHTML = `
        <a href="./../pages/suscripcion.html" class="subscription-float" aria-label="Gestiona tu suscripción">
            <i class="fas fa-credit-card"></i>
        </a>
    `;
    
    // Insertar el botón en el body
    document.body.insertAdjacentHTML('beforeend', subscriptionButtonHTML);
    
    console.log('✅ Botón flotante de suscripción inicializado');
});