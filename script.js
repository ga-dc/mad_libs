$('input').on('click', function (){
  $(this).css('border', 'solid 2px white');
});
$('.render').on('click', function(){
  var inputOne = $('#inputone').val();
  var inputTwo = $('#inputtwo').val();
  var inputThree = $('#inputthree').val();
  var inputFour = $('#inputfour').val();
  var inputFive = $('#inputfive').val();
  var inputSix = $('#inputsix').val();
  var inputSeven = $('#inputseven').val();
  $('input').css('border', 'white');
  $('.one').text(inputOne);
  $('.two').text(inputTwo);
  $('.three').text(inputThree);
  $('.four').text(inputFour);
  $('.five').text(inputFive);
  $('.six').text(inputSix);
  $('.seven').text(inputSeven);
  $('.render').text('Play Again');
  $('p').css('color', 'white');
  $('.render').on('click', function(){
    window.open("index.html", "_self");
  });
});
