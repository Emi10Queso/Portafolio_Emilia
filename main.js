




//-------------------TYPING EFECT----------------
var typingEffect = new Typed(".TypedText",{
    // ERA STRINGS PORQUE SON VARIOS TEXTOS Y NO STRING DE UN SOLO TEXTO
    strings: ["Emilia Martín", "Diseñadora", "Animadora digital"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
    });
    
    //descargar pdf
    document.getElementById("DownloadCV").addEventListener("click", function() {
      var enlace = document.createElement('a');
      
      enlace.href = 'Images';
      
      enlace.download = 'koe.jpg';
      
      document.body.appendChild(enlace);
      
      enlace.click();
      
      document.body.removeChild(enlace);
    });
    
    
    
    //CAMBIAR ACTIVE LINK DE NAVBAR
    
    /* ----- CHANGE ACTIVE LINK ----- */
    /* Selecciona todas las secciones que tienen un atributo id */
    const sections = document.querySelectorAll('section[id]');
    
    /* Define la función scrollActive */
    function scrollActive() {
    /* Obtiene la posición actual del scroll vertical */
    const scrollY = window.scrollY;
    
    /* Itera sobre cada sección */
    sections.forEach(current => {
    /* Obtiene la altura de la sección actual */
    const sectionHeight = current.offsetHeight,
    /* Obtiene la distancia desde la parte superior de la página hasta la parte superior de la sección */
    sectionTop = current.offsetTop - 50,
    /* Obtiene el id de la sección actual */
    sectionId = current.getAttribute('id');
    
    /* Comprueba si la posición del scroll está dentro de la sección actual */
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
    /* Si está dentro, añade la clase 'active-link' al enlace del menú de navegación que apunta a esta sección */
    document.querySelector('.nav-menu a[href*="' + sectionId + '"]').classList.add('active-link');
    } else {
    /* Si no está dentro, elimina la clase 'active-link' del enlace del menú de navegación */
    document.querySelector('.nav-menu a[href*="' + sectionId + '"]').classList.remove('active-link');
    }
    });
    }
    /* Añade un event listener al objeto window que ejecuta la función scrollActive cada vez que se hace scroll en la página */
    window.addEventListener('scroll', scrollActive);

    const navLinks = document.querySelectorAll('.nav-link');
const iframes = document.querySelectorAll('.nav-iframe');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('data-target');
    iframes.forEach((iframe) => {
      iframe.style.display = 'none';
    });
    document.getElementById(`${target}-iframe`).style.display = 'block';
  });
});


var animateButton = function (e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove("animate");

  e.target.classList.add("animate");
  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener("click", animateButton, false);
}


// const ScrAnimation = ScrollReveal({
//   origin: 'right',
//   distance: '80px',
//   duration: 2000,
//   reset: true
// });

// ScrAnimation.reveal('.featured-image', { delay:300 });