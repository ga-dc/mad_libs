$(function() {

$('.render').on('click', function() {
  var firstNoun = $('#fnoun').val();
  var firstVerb = $('#fverb').val();
  var secondNoun = $('#snoun').val();
  var adjective = $('#fadj').val();
  var adverb = $('#fadv').val();
  var secondVerb = $('#sverb').val();
  var thirdNoun = $('#tnoun').val();
   $(this).next(".container").slideToggle(600);

$(".container").toggle();
$('#noun1').text(firstNoun);
$('#verb1').text(firstVerb);
$('#noun2').text(secondNoun);
$('#adj').text(adjective);
$('#adv').text(adverb);
$('#verb2').text(secondVerb);
$('#noun3').text(thirdNoun);




  });

});
