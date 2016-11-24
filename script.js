$(function(){
  $('h2').text('Fun Stuff');



  $('.render').on('click', function(){
    var noun = $('.noun').val();
    $('#noun').text(noun);
    $('.noun').css({
      'display': 'none'
    });
    var adj = $('.adj').val();
    $('#adj').text(adj);
    $('.adj').css({
      'display': 'none'
    });
    var verb = $('.verb').val();
    $('#verb').text(verb);
    $('.verb').css({
      'display': 'none'
    });
  });
});
