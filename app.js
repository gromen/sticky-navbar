document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.navbar__menu--toggle');
  if (!toggleButton) {
    return;
  }
  toggleButton.addEventListener('click', toggleMenu, false);
});

function toggleMenu() {
  const menu = document.querySelector('.navbar__menu');
  menu.classList.toggle('navbar__menu--active');
}
