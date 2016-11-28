
var selectors = ['#inp1','#inp2','#inp3','#inp4','#inp5','#inp6','#inp7'];

$('.render').on('click',function(){
  for(i=0; i<selectors.length; i++){
    var id_tag = selectors[i];
    var x = $(id_tag).val();
    $(id_tag).replaceWith(x);
  }
});

for(i=0; i<selectors.length; i++){
  $(selectors[i]).on('blur',function(){
    var id_tag = this;
    var x = $(id_tag).val();
    $(id_tag).replaceWith(x);
  });
}
