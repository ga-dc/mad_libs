$(document).ready(function(){

$('.story').hide();

  $('.render').on('click',function(){
      console.log("render clicked");
    var noun1 = $('#noun1').val();
    var verb1 = $('#verb1').val();
    var noun2 = $('#noun2').val();
    var adj = $('#adj').val();
    var adverb = $('#adverb').val();
    var verb2 = $('#verb2').val();
    var noun3 = $('#noun3').val();

    $('#sNoun1').text(noun1);
    $('#sVerb1').text(verb1);
    $('#sNoun2').text(noun2);
    $('#sAdj').text(adj);
    $('#sAdverb').text(adverb);
    $('#sVerb2').text(verb2);
    $('#sNoun3').text(noun3);

    $('.story').show();
    });

});

//create text
