function checkLoginBtn() {
    let loginBtn = document.querySelector('#navbarsExampleDefault > ul.navbar-nav.ml-auto > li > a');
    if (!loginBtn) {
        // Si no existe el botón de login, redirigimos al cliente
        // Usamos replace para no dejar esta URL en el historial
        window.location.replace('https://normalizer.site.sfe.epesf/clientes');
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkLoginBtn);
} else {
    checkLoginBtn();
}