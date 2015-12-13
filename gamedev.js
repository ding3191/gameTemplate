$( document ).ready(function() {

	$("#start").click(function() {
		$("#exploreBody").css("background-image", "url('img/2doors.jpg')");
		$("#goRight1").show();
		$("#q1").hide();
		$("#q2").hide();
		$("#q3").hide();
		$("#goLeft1").show();


	$("#goRight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/2doors.jpg')");
		$("#goRight1").hide();
		$("#q1").hide();
		$("#q2").show();
		$("#q3").hide();
		$("#goRight-Right1").show();
		$("#goRight-Left1").show();
	});

	$("#goLeft1").click(function() {
		$("#exploreBody").css("background-image", "url('img/rko.png')");
		$("#goRight1").hide();
		$("#q1").hide();
		$("#q2").hide();
		$("#q3").hide();
		$("#goRight-Right1").hide);
		$("#goRight-Left1").hide();
	});
	$("#goRight-Straight2").click(function() {
		$("#exploreBody").css("background-image", "url('img/2doors.jpg')");
		$("#goRight-Straight2").hide();
		$("#goRight-Straight3").show();
	});

	$("#goRight-Straight3").click(function() {
		$("#exploreBody").css("background-image", "url('img/2doors.jpg')");
		$("#goRight-Straight3").hide();
		$("#goRight-Right2").show();
	});

	$("#goRight-Right2").click(function() {
		$("#exploreBody").css("background-image", "url('img/2doors.jpg')");
		$("#goRight-Right2").hide();
		$("#goBack").show();
	});


	$("#goLeft1").click(function() {
		$("#exploreBody").css("background-image", "url('img/2doors.jpg')");
		$("#goLeft1").hide();
		$("#goLeft2").show();
	});

	$("#goLeft-Straight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/2doors.jpg')");
		$("#goLeft2").hide();
		$("#goLeft3").show();
	});

	$("#goLeft-Straight2").click(function() {
		$("#exploreBody").css("background-image", "url('img/2doors.jpg')");
		$("#goLeft3").hide();
		$("#goBack").show();
	});


	$("#goBack").click(function() {
		$("#exploreBody").css("background-image", "url('img/2doors.jpg')");
		$("#goBack").hide();
		$("#goRight1").show();
		$("#goLeft1").show();
	});



});