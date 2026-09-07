// ===== Аккордеон в боковом меню =====
const menuToggles = document.querySelectorAll('.menu-toggle');

menuToggles.forEach(function(toggle) {
    toggle.addEventListener('click', function(e) {
        e.stopPropagation();

        const submenu = toggle.nextElementSibling;
        toggle.classList.toggle('active');
        submenu.classList.toggle('open');
    });
});

// ===== Открытие/закрытие сайдбара =====
const burger = document.getElementById('burger');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

function toggleSidebar() {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
}

burger.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);

// ===== Появление хэдера при скролле =====
const topbar = document.getElementById('topbar');

window.addEventListener('scroll', function() {
    if (window.scrollY > window.innerHeight - 100) {
        topbar.classList.add('visible');
    } else {
        topbar.classList.remove('visible');
    }
});