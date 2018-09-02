/* Open the sidenav */
function openNav() {
  document.getElementById('navbar').style.width = '250px';
  document.getElementById('main-doc').style.marginLeft = '250px';
  document.getElementById('menu-icon').style.display = 'none';
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById('navbar').style.width = '0';
  document.getElementById('main-doc').style.marginLeft = '0';
  document.getElementById('menu-icon').style.display = 'block';
}
