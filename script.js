$(function(){

$('.render').on('click', function(e){

console.log("clicked")

var linkNounLine1 = $('#nounline1').val();
var linkVerbLine2 = $('#verbline2').val();
var linkNounLine2 = $('#nounline2').val();
var linkAdjLine2 = $('#adjline2').val();
var linkAdvLine3 = $('#advline3').val();
var linkVerbLine3 = $('#verbline3').val();
var linkNounLine3 = $('#nounline3').val();

$('#spanNounLine1').text(linkNounLine1);
$('#spanVerbLine2').text(linkVerbLine2);
$('#spanNounLine2').text(linkNounLine2);
$('#spanAdjLine2').text(linkAdjLine2);
$('#spanAdvLine3').text(linkAdvLine3);
$('#spanVerbLine3').text(linkVerbLine3);
$('#spanNounLine3').text(linkNounLine3);

	})


})