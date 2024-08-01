'use strict';

// Utility function to add event listeners
const addEventListenerList = (list, event, fn) => {
  list.forEach(element => element.addEventListener(event, fn));
};

// Modal functionality
const modal = document.querySelector('[data-modal]');
const closeModal = () => modal.classList.add('closed');

addEventListenerList(
  [document.querySelector('[data-modal-close]'), document.querySelector('[data-modal-overlay]')],
  'click',
  closeModal
);

// Notification toast functionality
const notificationToast = document.querySelector('[data-toast]');
document.querySelector('[data-toast-close]').addEventListener('click', () => notificationToast.classList.add('closed'));

// Mobile menu functionality
const mobileMenuOpenBtns = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenus = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtns = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

mobileMenuOpenBtns.forEach((btn, i) => {
  const openMenu = () => {
    mobileMenus[i].classList.add('active');
    overlay.classList.add('active');
  };

  const closeMenu = () => {
    mobileMenus[i].classList.remove('active');
    overlay.classList.remove('active');
  };

  btn.addEventListener('click', openMenu);
  mobileMenuCloseBtns[i].addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
});

// Accordion functionality
const accordionBtns = document.querySelectorAll('[data-accordion-btn]');
const accordions = document.querySelectorAll('[data-accordion]');

accordionBtns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    const isActive = btn.nextElementSibling.classList.contains('active');

    if (!isActive) {
      accordions.forEach((accordion, j) => {
        accordion.classList.remove('active');
        accordionBtns[j].classList.remove('active');
      });
    }

    btn.nextElementSibling.classList.toggle('active');
    btn.classList.toggle('active');
  });
});
