let currentIndex = 0;
	const slider = document.getElementById('slider');
	const totalImages = slider.children.length;
	const imagesPerView = 3;

  function moveSlider(direction) {
    const maxIndex = totalImages - imagesPerView;
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > maxIndex) currentIndex = maxIndex;
    slider.style.transform = `translateX(-${(100 / imagesPerView) * currentIndex}%)`;
  }

  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-links li');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    links.forEach(link => { 
        link.classList.toggle("fade");
    
    });
});