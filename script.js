// JavaScript for the hamburger menu
// and the fade-in effect on the links

  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-links li');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    links.forEach(link => { 
        link.classList.toggle("fade");
    
    });
});