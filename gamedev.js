$( document ).ready(function() {

	$("#start").click(function() {
		$("#exploreBody").css("background-image", "url('img/2doors.jpg')");
		$("#goRight1").show();
		$("#q1").show();
		$("#q2").hide();
		$("#q3").hide();
		$("#goLeft1").show();

	$("#goRight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/2doors.jpg')");
		$("#goRight1").hide();
		$("#q1").hide();
		$("#q2").show();
		$("#q3").hide();
		$("#goRight1-Right2").show();
		$("#goRight1-Left2").show();
		$("#goRight2-Right3").hide();
		$("#goRight2-Left3").hide();
	});

	$("#goLeft1").click(function() {
		$("#exploreBody").css("background-image", "url('img/rko.png')");
		$("#goRight1").hide();
		$("#q1").hide();
		$("#q2").hide();
		$("#q3").hide();
		$("#goRight1-Right1").hide);
		$("#goRight1-Left1").hide();
	});
	
	$("#goRight1-Right2").click(function() {
		$("#exploreBody").css("background-image", "url('img/2doors.jpg')");
		$("#goRight1").hide();
		$("#q1").hide();
		$("#q2").hide();
		$("#q3").show();
		$("#goRight1-Right2").show();
		$("#goRight1-Left2").show();
	});
	
	$("#goRight1-Left2").click(function() {
		$("#exploreBody").css("background-image", "url('img/rko.png')");
		$("#goRight1").hide();
		$("#q1").hide();
		$("#q2").hide();
		$("#q3").hide();
		$("#goRight1-Right2").hide);
		$("#goRight1-Left2").hide();
	});

	$("#goRight2-Right3").click(function() {
		$("#exploreBody").css("background-image", "url('img/2doors.jpg')");
		$("#goRight1").hide();
		$("#q1").hide();
		$("#q2").hide();
		$("#q3").hide();
	});

	$("#goRight2-Left3").click(function() {
		$("#exploreBody").css("background-image", "url('img/rko.png')");
		$("#goRight1").hide();
		$("#q1").hide();
		$("#q2").hide();
		$("#q3").hide();
	});
});