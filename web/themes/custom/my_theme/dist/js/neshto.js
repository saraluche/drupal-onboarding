"use strict";

(function ($, Drupal) {
  Drupal.behaviors.main_menu = {
    attach: function attach(context, settings) {
      $('.header-container', context).once('main_menu').each(function () {
        var menu_main = this.querySelector('.menu-wrap');
        var menu_toggler = this.querySelector('.toggler');
        var menu_clicked = false;
        menu_toggler.addEventListener('click', function () {
          menu_clicked = !menu_clicked;
          toggleNav(menu_main, menu_clicked);
          animateToggler(menu_toggler, menu_clicked);
        });

        var toggleNav = function toggleNav(menu, clicked) {
          if (clicked) {
            menu.classList.add('open-menu');
            menu.classList.remove('close-menu');
          } else {
            menu.classList.remove('open-menu');
            menu.classList.add('close-menu');
          }
        };

        var animateToggler = function animateToggler(toggler, clicked) {
          if (clicked) {
            toggler.classList.add('spin-burger');
          } else {
            toggler.classList.remove('spin-burger');
          }
        };
      });
    }
  };
})(jQuery, Drupal);
//# sourceMappingURL=neshto.js.map
