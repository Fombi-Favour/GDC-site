const contentLink = document.getElementById('contentLink');
const menu = document.querySelector('.menu');
const close = document.getElementById('close');

function showMenu() {
  contentLink.style.left = '0';
}

function hideMenu() {
  contentLink.style.left = '-900px';
}

menu.addEventListener('click', () => {
  showMenu();
});

close.addEventListener('click', () => {
  hideMenu();
});