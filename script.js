$(document).ready(function(){
    $('.render').on('click', runMadLib)
});

$('.madlib').hide();

function runMadLib(e){
  alert('HERE WE GO');
  $('.madlib').show();
  $('form').hide();
  $('span').first().empty().text($('#noun1').val())
  $('span').eq(1).empty().text($('#verb1').val())
  $('span').eq(2).empty().text($('#noun2').val())
  $('span').eq(3).empty().text($('#adjective1').val())
  $('span').eq(4).empty().text($('#adverb1').val())
  $('span').eq(5).empty().text($('#verb2').val())
  $('span').eq(6).empty().text($('#noun3').val())
}
