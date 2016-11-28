$(function() {

  // The DOM has safely loaded, add your code in here

  $('.render').on('click', function(e){
    console.log('User clicked on render button');
    var firstNoun = $('#firstNoun').val();
    var firstVerb = $('#firstVerb').val();
    var secondNoun = $('#secondNoun').val();
    var firstAdjective = $('#firstAdjective').val();
    var firstAdverb = $('#firstAdverb').val();
    var secondVerb = $('#secondVerb').val();
    var thirdNoun = $('#thirdNoun').val();

    console.log(firstNoun, firstVerb, secondNoun, firstAdjective, secondVerb, thirdNoun);

    $('#spanNoun').text(firstNoun);
    $('#spanVerb').text(firstVerb);
    $('#spanNoun2').text(secondNoun);
    $('#spanAdjective').text(firstAdjective);
    $('#spanAdverb').text(firstAdverb);
    $('#spanVerb2').text(secondVerb);
    $('#spanNoun3').text(thirdNoun);
  });

});
