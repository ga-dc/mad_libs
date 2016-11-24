$(function() {

	$(".story").hide();
	$('#btn-show').on('click', function(){
		console.log(' clicked on show');

	var noun = $('#noun').val();
	var noun2 = $('#noun2').val();
	var noun3 = $('#noun3').val();
	var verb = $('#verb').val();
	var verb2 = $('#verb2').val();
	var adverb = $('#adverb').val();
	var adjective = $('#adjective').val();

	$('#firstNoun').text(noun);
	$('#firstVerb').text(verb);
	$('#secondNoun').text(noun2);
	$('#firstAdjective').text(adjective);
	$('#firstAdverb').text(adverb);
	$('#secondVerb').text(verb2);
	$('#thirdNoun').text(noun3);

	$('.story').show();
	$(':input').val('');
	$('form').hide();
	$('#btn-show').hide();

		$("#play-btn").click(function(e) {
	  $(".story").hide();
		$('form').show();
		$('#btn-show').show();

		});
	});
});
