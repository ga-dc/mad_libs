$(document).ready(function(){
  $('.render').on('click', function() {
      var noun1 = $('#noun1').val();
      var verb1 = $('#verb1').val();
      var noun2 = $('#noun2').val();
      var adjective1 = $('#adjective1').val();
      var adverb1 = $('#adverb1').val();
      var verb2 = $('#verb2').val();
      var noun3 = $('#noun3').val();

      $('#n1').text(noun1);
      $('#v1').text(verb1);
      $('#n2').text(noun2);
      $('#adj1').text(adjective1);
      $('#adv1').text(adverb1);
      $('#v2').text(verb2);
      $('#n3').text(noun3);
    })
})
