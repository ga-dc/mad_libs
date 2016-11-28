// Psuedo code, display placeholder text when render button is clicked


// var placeHolder []
//
// document.getElementsByClassName("placeHolder").onchange = function()(render());
//
// function render() {
//   document.getElementsByClassName("placeHolder").innerHTML
// };
//
// eventHandler

function displayAnswers(){
  document.getElementsByClassName("placeHolder").innerHTML= Answers();
}

function myFunction(){
  var x = document.getElementsByClassName("placeHolder").value;
  document.getElementsByClassName("first").innerHTML = x;
}
