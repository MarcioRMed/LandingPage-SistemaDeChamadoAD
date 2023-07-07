var script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';
script.integrity = 'sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz';
script.crossOrigin = 'anonymous';
document.head.appendChild(script);



// Corrigi o problemas do menu sanduiche
// ao clicar fora do menu ele fecha

document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  menuIcon.addEventListener('click', function() {
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show'); // Fechar o menu
    } else {
      navbarCollapse.classList.add('show'); // Abrir o menu
    }
  });

  const menuItems = document.querySelectorAll('.navbar-nav .nav-link');

  menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
      navbarCollapse.classList.remove('show'); // Fechar o menu ao clicar em um item
    });
  });
});

document.addEventListener('click', function(event) {
  const targetElement = event.target;
  const navbarCollapse = document.querySelector('.navbar-collapse');

  if (!targetElement.classList.contains('navbar-toggler') && !navbarCollapse.contains(targetElement)) {
    navbarCollapse.classList.remove('show'); // Fechar o menu quando clicar fora do menu
  }
});
