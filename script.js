
$(document).ready(function(){
  //hide form until button clicked
  $('.render_form').hide();

  //cick render button to show form
  $('.render').on('click', function(){

    //save inputs into variabls
    var noun_one = $(".noun_1").val();
    var verb_one =  $(".verb_1").val();
    var noun_two = $('.noun_2').val();
    var adj_one = $('.adjective_1').val();
    var adverb_one = $('.adverb_1').val();
    var verb_two = $('.verb_2').val();
    var noun_three = $('.noun_3').val();

    //set span text to input variables
    $('#first_noun').text(noun_one);
    $('#first_verb').text(verb_one);
    $('#second_noun').text(noun_two);
    $('#first_adjective').text(adj_one);
    $('#first_adverb').text(adverb_one);
    $('#second_verb').text(verb_two);
    $('#third_noun').text(noun_three);


    //show filled out form
    $('.render_form').show();
  })
});
