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
