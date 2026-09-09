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



// ===== Появление хэдера при скролле (только на страницах с hero-блоком) =====
const topbar = document.getElementById('topbar');
const heroSection = document.querySelector('.hero');

if (topbar && heroSection) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > window.innerHeight - 100) {
            topbar.classList.add('visible');
        } else {
            topbar.classList.remove('visible');
        }
    });
}

// ===== Выпадающие меню в хэдере (Язык / Соц. сети) =====
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(function(dropdown) {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    toggle.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdowns.forEach(function(d) {
            if (d !== dropdown) d.classList.remove('open');
        });
        dropdown.classList.toggle('open');
    });
});

// Закрытие меню при клике вне его
document.addEventListener('click', function() {
    dropdowns.forEach(function(d) {
        d.classList.remove('open');
    });
});

// ===== Выбор языка =====
const langRo = document.querySelector('.lang-ro');
if (langRo) {
    langRo.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Извините, пока недоступно');
    });
}

const langRu = document.querySelector('.lang-ru');
if (langRu) {
    langRu.addEventListener('click', function(e) {
        e.preventDefault();
        // сайт уже на русском — просто закрываем меню
        document.querySelectorAll('.dropdown').forEach(function(d) {
            d.classList.remove('open');
        });
    });
}

// ===== Вкладки дней недели на странице расписания =====
const dayTabs = document.querySelectorAll('.day-tab');
const dayPanels = document.querySelectorAll('.day-panel');

dayTabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
        dayTabs.forEach(t => t.classList.remove('active'));
        dayPanels.forEach(p => p.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById('day-' + tab.dataset.day).classList.add('active');
    });
});

// ===== Аккордеон описания программ =====
const categoryToggles = document.querySelectorAll('.category-toggle');

categoryToggles.forEach(function(toggle) {
    toggle.addEventListener('click', function() {
        const panel = toggle.nextElementSibling;
        toggle.classList.toggle('active');
        panel.classList.toggle('open');
    });
});

// ===== Форма "Оставьте заявку" =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // страница пока не перезагружается и никуда не отправляет данные

        document.getElementById('formSuccess').classList.add('show');
        contactForm.reset();
        contactForm.style.display = 'none'; // прячем форму после успешной "отправки"
    });
}