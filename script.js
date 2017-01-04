$(function() {
  $('#render').on('click', function() {
    $('input').replaceWith(function(){
   return '<span class='+this.className+'>'+this.value+'</span>'
    });
  });
  $('#refresh').click(function() {
    location.reload();
  });
});
