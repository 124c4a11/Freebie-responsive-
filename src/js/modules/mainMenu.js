'use strict';

import pageNavigation from './pageNavigation';

var
  $menu = $('.main-menu'),
  $menuToggle = $menu.find('.main-menu__toggle'),
  $menuNav = $menu.find('.main-menu__nav');


function init() {
  $menuToggle.on('click', function(e) {
    e.preventDefault();

    if ($menu.hasClass('main-menu_open')) {
      close();
    } else {
      open();
    }
  });

  $('.main-menu__item').on('click', function(e) {
    var
      $menuItem = $(this),
      $menuLink = $menuItem.find('.main-menu__link');

    if ($menu.hasClass('main-menu_open')) close();

    pageNavigation.scrollToTarget($menuLink.attr('href'), true);
  });
}


function open() {
  $menuToggle.addClass('hamburger_close');
  $menu.addClass('main-menu_open');
  $('html, body').css('overflow', 'hidden');
}


function close() {
  $menu.removeClass('main-menu_open');
  $menuToggle.removeClass('hamburger_close');
  $('html, body').css('overflow', '')
}


function onResize(windowWidth) {
  if (windowWidth > 992 && $menu.hasClass('main-menu_open')) {
    close();
  }
}


export default {
  init: init,
  open: open,
  close: close,
  onResize: onResize
};