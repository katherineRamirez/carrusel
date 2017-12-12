$(document).ready(function(){
  var imgItems = $('.slider li').length;
  var imgPos = 1;

  for(i = 1; i <= imgItems; i++){
    $('.pagination').append('<li class="fa fa-circle"></li>');
  }

  $('.slider li').hide();
  $('.slider li:first').show();

  $('.pagination li:first').css({'color': '#01DFA5'});

  $('.pagination li').click(pagination);
  $('.arrow-right span').click(nextSlider);
  $('.arrow-left span').click(prevSlider);

  setInterval(function(){
    nextSlider();
  }, 3000);

  function pagination(){
  // Estamos llamando al valor del elemento seleccionado
    var paginationPos = $(this).index() + 1;

    $('.slider li').hide();
    $('.slider li:nth-child('+ paginationPos +')').fadeIn();

    $('.pagination li').css({'color': '#585858'});
    $(this).css({'color': '#01DFA5'});
    
    imgPos = paginationPos;
  }

  function nextSlider(){
    if(imgPos >= imgItems){
      imgPos = 1;
    } else {
      imgPos++;
    }

    $('.pagination li').css({'color': '#585858'});
    $('.pagination li:nth-child('+ imgPos +')').css({'color': '#01DFA5'});
    $('.slider li').hide();
    $('.slider li:nth-child('+ imgPos +')').fadeIn();
  }

    function prevSlider(){
    if(imgPos <= 1){
      imgPos = imgItems;
    } else {
      imgPos--;
    }

    $('.pagination li').css({'color': '#585858'});
    $('.pagination li:nth-child('+ imgPos +')').css({'color': '#01DFA5'});
    $('.slider li').hide();
    $('.slider li:nth-child('+ imgPos +')').fadeIn();
  }
});
	
