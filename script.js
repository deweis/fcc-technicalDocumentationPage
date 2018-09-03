/* Open the sidenav */
function openNav() {
  if (window.matchMedia('(max-device-width: 500px)').matches) {
    document.getElementById('navbar').style.width = '100%';

    /* Thank you:
    *  https://medium.com/@byrayray/5-ways-to-loop-over-dom-elements-from-queryselectorall-in-javascript-55bd66ca4128 */
    document.querySelectorAll('.anchor-link')
            .forEach(link => link.addEventListener('click', closeNav));
  } else {
    document.getElementById('navbar').style.width = '250px';
    document.getElementById('main-doc').style.marginLeft = '250px';
  }

  document.getElementById('menu-icon').style.display = 'none';
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById('navbar').style.width = '0';
  document.getElementById('main-doc').style.marginLeft = '0';
  document.getElementById('menu-icon').style.display = 'block';
}
