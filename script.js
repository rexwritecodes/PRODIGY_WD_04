// nav active ui
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60, 
        behavior: 'smooth'
      });
    }
  });
});

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + 100; 

  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));

    if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
});



// toggle button for mobile navigation
const toggleBtn = document.getElementById('mobile-toggle');
const nav = document.querySelector('.main-nav');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active');
  nav.classList.toggle('active');
});

// Close menu on nav item click  
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    toggleBtn.classList.remove('active');
    nav.classList.remove('active');
  });
});
