window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      menu_items = document.querySelectorAll('.menu_item');

    hamburger.addEventListener('click', function(e) {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');

});

    menu_items.forEach(element => {
        element.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
});
