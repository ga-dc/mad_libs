$ (function(){

$('.render').on('click', function(){
  console.log('button works');
  var firstNoun = $('.firstNoun').val();
  var secondNoun = $('.secondNoun').val();
  var thirdNoun = $('.thirdNoun').val();
  var fourthNoun = $('.fourthNoun').val();
  var fifthNoun = $('.fifthNoun').val();
  var sixthNoun = $('.sixthNoun').val();
  var seventhNoun = $('.seventhNoun').val();
  var firstVerb = $('.firstVerb').val();
  var secondVerb = $('.secondVerb').val();
  var thirdVerb = $('.thirdVerb').val();
  var fourthVerb = $('.fourthVerb').val();
  $('input').hide();
  $('#firstNoun').show();
  $('#firstNoun').text(firstNoun);
  $('#secondNoun').show();
  $('#secondNoun').text(secondNoun);
  $('#thirdNoun').show();
  $('#thirdNoun').text(thirdNoun);
  $('#fourthNoun').show();
  $('#fourthNoun').text(fourthNoun);
  $('#fifthNoun').show();
  $('#fifthNoun').text(fifthNoun);
  $('#sixthNoun').show();
  $('#sixthNoun').text(sixthNoun);
  $('#seventhNoun').show();
  $('#seventhNoun').text(seventhNoun);
  $('#firstVerb').show();
  $('#firstVerb').text(firstVerb);
  $('#secondVerb').show();
  $('#secondVerb').text(secondVerb);
  $('#thirdVerb').show();
  $('#thirdVerb').text(thirdVerb);
  $('#fourthVerb').show();
  $('#fourthVerb').text(fourthVerb);
});
});
// $('#btn-show').on('click', function(){
//   console.log('user clicked on show button');
//   var firstName = $('#fname').val();
//   var lastName = $('#lname').val();
//
//   console.log(firstName, lastName);
//
//   $('#first').text(firstName);
//   $('#second').text(lastName);
// })
// })
