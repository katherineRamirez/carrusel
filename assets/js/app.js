/* Función que se usa cuando se carga la página */
$(document).ready(function(){
/* Declaramos una variable para saber cuantas imagenes tenemos */
  var imgItems = $('.slider li').length;
  var imgPos = 1;

/* Ciclo para agregar circulos por cada imagen de imgItems */ 
  for(i = 1; i <= imgItems; i++){
/* A la clase paginación le agregamos el ícono del circulo por cada imagen*/
    $('.pagination').append('<li class="fa fa-circle"></li>');
  }

/* Ocultamos todas las imagenes de la lista de la clase slider */
  $('.slider li').hide();
/* Dejamos visible solo a la primera imagen de la lista */
  $('.slider li:first').show();

/* Agregamos estilos al primer icono de la paginación */
  $('.pagination li:first').css({'color': '#01DFA5'});

/* Ejecutando funciones */
  $('.pagination li').click(pagination);
  $('.arrow-right span').click(nextSlider);
  $('.arrow-left span').click(prevSlider);

/* Función de intervalo de 3s cambia la imagen siguiente */
  setInterval(function(){
    nextSlider();
  }, 3000);

  function pagination(){
/* Estamos llamando al valor de la posición de la imagen seleccionada */
    var paginationPos = $(this).index() + 1;

/* Ocultando la primera imagen */
    $('.slider li').hide();

/* Llamamos a número de la posición para que se muestre la imagen que se ha seleccionado */
    $('.slider li:nth-child('+ paginationPos +')').fadeIn();

/* Agregando color a los iconos de circulo */
    $('.pagination li').css({'color': '#585858'});

/* Agregando color solo al icono circulo que se le a dado click */
    $(this).css({'color': '#01DFA5'});
    
    imgPos = paginationPos;
  }

/* Función de la flecha derecha, página siguiente */
  function nextSlider(){

/* Condicional para que muestre la imagen siguiente cada vez que se dé click a la
  flecha siguiente */
    if(imgPos >= imgItems){
      imgPos = 1;
    } else {
      imgPos++;
    }

/* Cada vez que se dé click a la flecha siguiente, el color del ícono
  circulo de la clase paginación va a cambiar su color */
    $('.pagination li').css({'color': '#585858'});
    $('.pagination li:nth-child('+ imgPos +')').css({'color': '#01DFA5'});
    
/* Ocultamos las imagenes */
    $('.slider li').hide();

/* Mostramos la imagen seleccionada */
    $('.slider li:nth-child('+ imgPos +')').fadeIn();
  }

/* Función de la flecha izquierda, página anterior */
    function prevSlider(){

/* Condicional para que muestre la imagen anterior cada vez que se dé click a la
  flecha anterior */
    if(imgPos <= 1){
      imgPos = imgItems;
    } else {
      imgPos--;
    }

/* Cada vez que se dé click a la flecha anterior, el color del ícono
  circulo de la clase paginación va a cambiar su color */
    $('.pagination li').css({'color': '#585858'});
    $('.pagination li:nth-child('+ imgPos +')').css({'color': '#01DFA5'});
    
/* Ocultamos las imagenes */
    $('.slider li').hide();

/* Dejamos visible sólo la imagen seleccionada */
    $('.slider li:nth-child('+ imgPos +')').fadeIn();
  }
});
	
