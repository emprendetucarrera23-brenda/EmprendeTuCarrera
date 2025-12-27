// pde-button.js
document.addEventListener('DOMContentLoaded', function() {
    const pdeHTML = `
        <a href="http://pde.emprendetucarrera.com.co/" 
           class="pde-float" 
           target="_blank"
           rel="noopener noreferrer"
           aria-label="PDE - Portal Del Estudiante">
            <img src="https://ik.imagekit.io/fh0aexvy1/logo%20pde.svg" alt="PDE Logo">
        </a>
    `;
    document.body.insertAdjacentHTML('beforeend', pdeHTML);
});