document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.menu_icon img');
  const navMenu = document.querySelector('.container3');

  let isMenuOpen = false;

  menuIcon.addEventListener('click', function () {
    if (isMenuOpen) {
      navMenu.style.display = 'none';
      isMenuOpen = false;
    } else {
      navMenu.style.display = 'flex';
      isMenuOpen = true;
    }
  });
});