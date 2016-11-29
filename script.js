$(document).ready(function(){
   
   //cick render button to show form
   $('.render').on('click', function(){

     $('.input_form').hide();
     //save inputs into variables
     var noun_one = $(".noun1").val();
     var verb_one =  $(".verb1").val();
     var noun_two = $('.noun2').val();
     var adj_one = $('.adjective1').val();
     var adverb_one = $('.adverb1').val();
     var verb_two = $('.verb2').val();
     var noun_three = $('.noun3').val();

     //input variables
     $('#first_noun').text(noun_one);
     $('#first_verb').text(verb_one);
     $('#second_noun').text(noun_two);
     $('#first_adjective').text(adj_one);
     $('#first_adverb').text(adverb_one);
     $('#second_verb').text(verb_two);
     $('#third_noun').text(noun_three);

     //filled out form
     $('.render_form').show();
   })
  });
