// Este script se encarga de crear una presentación de diapositivas (slideshow).

// Inicializa el índice de la diapositiva actual en 1.
var slideIndex = 1;

// Función que incrementa o decrementa el índice de la diapositiva actual.
// @param n: el número que se suma al índice actual (puede ser positivo o negativo).
function plusDivs(n) {
  // Actualiza el índice de la diapositiva sumando n.
  slideIndex = slideIndex + n;
  // Llama a la función showDivs con el nuevo índice para mostrar la diapositiva correspondiente.
  showDivs(slideIndex);
}

// Función que muestra la diapositiva correspondiente basada en el índice proporcionado.
// @param n: el índice de la diapositiva a mostrar.
function showDivs(n) {
  // Obtiene todas las diapositivas con la clase "mySlides".
  var x = document.getElementsByClassName("mySlides");
  // Si el índice supera el número de diapositivas, reinicia el índice a 1.
  if (n > x.length) {
    slideIndex = 1;
  }
  // Si el índice es menor que 1, lo establece al número de la última diapositiva.
  if (n < 1) {
    slideIndex = x.length;
  }
  // Oculta todas las diapositivas.
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  // Muestra la diapositiva correspondiente al índice actual.
  x[slideIndex - 1].style.display = "block";
}

// Muestra la primera diapositiva al cargar la página.
showDivs(1);
