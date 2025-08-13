document.addEventListener("DOMContentLoaded", () => {
    console.log("Website Loaded: Hotel Saras Bar & Resto");
    setupSmoothScroll();
    animateNavbar();
  });
  
  function setupSmoothScroll() {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }
  
  function animateNavbar() {
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    });
  }

  // <script>
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
// </script>

document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('#menu .bg-white');

  menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const img = item.querySelector('img');
      img.style.transform = 'scale(1.05)';
    });

    item.addEventListener('mouseleave', () => {
      const img = item.querySelector('img');
      img.style.transform = 'scale(1)';
    });
  });
});



