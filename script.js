// ======= MENU MOBILE =======
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// ======= FERMER LE MENU APRÈS CLIC =======
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});

// ======= EFFET DE DÉFILEMENT DOUX =======
const links = document.querySelectorAll('a[href^="#"]');

for (let link of links) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    let target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
}

        // Animation fluide
        document.querySelectorAll('.social-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            });
        });
     function openLinkedIn() {
        // REMPLACEZ par votre VRAIE URL LinkedIn
        const linkedinUrl = 'www.linkedin.com/in/mohamed-billy-camara-87955a299';
         // Vérification
        if (linkedinUrl.includes('linkedin.com/in/') && linkedinUrl.startsWith('https://')) {
            window.open(linkedinUrl, '_blank');
        } else {
            alert('URL LinkedIn incorrecte. Vérifiez le lien.');
            console.error('URL LinkedIn invalide:', linkedinUrl);
        // }
    }



// ======= ANIMATION D’APPARITION LENTE =======
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 300;
    const sectionHeight = section.clientHeight;
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    } else {
      section.style.opacity = '0';
      section.style.transform = 'translateY(50px)';
      section.style.transition = 'all 0.8s ease';
    }
  });
})};
