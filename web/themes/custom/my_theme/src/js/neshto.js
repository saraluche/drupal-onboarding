(function ($, Drupal) {
    Drupal.behaviors.main_menu = {
      attach: function (context, settings) {
        $('.header-container', context).once('main_menu').each(function () {
          const menu_main = this.querySelector('.menu-wrap');
          const menu_toggler = this.querySelector('.toggler');
          let menu_clicked = false;
          menu_toggler.addEventListener('click', () => {
            menu_clicked = !menu_clicked;
            toggleNav(menu_main, menu_clicked);
            animateToggler(menu_toggler, menu_clicked);
          });
          const toggleNav = (menu, clicked) => {
            if (clicked) {
              menu.classList.add('open-menu');
              menu.classList.remove('close-menu');
            } else {
              menu.classList.remove('open-menu');
              menu.classList.add('close-menu');
            }
          }
          const animateToggler = (toggler, clicked) => {
            if (clicked) {
              toggler.classList.add('spin-burger');
            } else {
              toggler.classList.remove('spin-burger');
            }
          }
        });
      }
    }
  }(jQuery, Drupal));