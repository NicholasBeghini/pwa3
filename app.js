document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const sideMenu = document.getElementById('side-menu');
    const themeToggle = document.getElementById('theme-toggle');


    // Lógica para abrir/fechar o menu lateral
    menuBtn.addEventListener('click', () => {
        sideMenu.classList.toggle('open');
    });



    // Lógica para alternar entre modo claro e escuro
    themeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-theme', themeToggle.checked);
        localStorage.setItem('dark-theme', themeToggle.checked);
    });

    // Carrega a preferência do usuário ao iniciar
    const savedTheme = localStorage.getItem('dark-theme') === 'true';
    if (savedTheme) {
        document.body.classList.add('dark-theme');
        themeToggle.checked = true;
    }
});
// Registra o Service Worker para habilitar funcionalidades de PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(reg => console.log('Service Worker registrado com sucesso:', reg.scope))
            .catch(err => console.log('Falha ao registrar Service Worker:', err));

    });
}

