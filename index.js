document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenuButton = document.getElementById('closeMenu');
    const overlay = document.getElementById('overlay');
    const menuItemsWithSubmenu = document.querySelectorAll('.has-submenu');

    hamburger.addEventListener('click', () => {
        mobileMenu.style.display = 'block';
        mobileMenu.classList.toggle('open');
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
        hamburger.setAttribute('aria-expanded', 'true');
        mobileMenu.setAttribute("aria-hidden", "false");
    });

    closeMenuButton.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        mobileMenu.style.display = 'none';
        overlay.style.display = 'none';
        document.body.style.overflow = '';
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute("aria-hidden", "true");
    });

    menuItemsWithSubmenu.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const submenu = item.querySelector('.submenu');
            if (submenu) {
                submenu.classList.toggle('visible');
            }
        });
    });

    const searchInput = document.getElementById('searchInput');
    const menuContent = document.getElementById('menuContent');

    searchInput.addEventListener('focus', () => {
        menuContent.style.display = 'none';
    });

    searchInput.addEventListener('blur', () => {
        menuContent.style.display = 'block';
    });

});
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll('.main-menu-item');

    items.forEach(item => {
        const trigger = item.querySelector('.menu');

        if (!trigger) return;

        trigger.addEventListener('click', function (e) {
            if (window.innerWidth <= 499) {
                e.preventDefault();

                const isOpen = item.classList.contains('open');

                // Chiudi tutti
                items.forEach(i => i.classList.remove('open'));

                // Se non era già aperto, aprilo
                if (!isOpen) {
                    item.classList.add('open');
                }
            }
        });
    });

    const closeBtn = document.getElementById('closeMenu');
    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            document.querySelectorAll('.main-menu-item.open').forEach(item => {
                item.classList.remove('open');
            });
        });
    }
});