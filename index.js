const header = document.querySelector('header');

 window.addEventListener('scroll', () => {
     if (window.scrollY > 50) {
         header.style.backgroundColor = 'rgba(45, 45, 45, 0.365)';
     } else {
         header.style.backgroundColor = 'rgba(45, 45, 45, 1)';
     }
 });