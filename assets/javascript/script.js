$('.codeOnGithub').on('click', function () {
	var imgAlt = $(this).parent().parent().next().attr("alt")
	console.log(imgAlt);
	window.open(imgAlt, '_blank');
});
$('.currentVersion').on('click', function () {
	var dataLink = $(this).parent().parent().next().attr("data")
	console.log(dataLink);
	window.open(dataLink, '_blank');
});
$(document).ready(function () {
	$("li").prepend('<i class="fa fa-angle-double-right"></i>', " ");
	$("#error").hide();
	var config = {
		apiKey: "AIzaSyCafVsPaIWWNFKImMZ4eH_i8cqwiNbXg4A",
		authDomain: "fbase-first-project.firebaseapp.com",
		databaseURL: "https://fbase-first-project.firebaseio.com",
		projectId: "fbase-first-project",
		storageBucket: "fbase-first-project.appspot.com",
		messagingSenderId: "173552719130",
		appId: "1:173552719130:web:1e8a1d1a42e01fa8cc48a3",
		measurementId: "G-NXXTWZFBCQ"
	};
	firebase.initializeApp(config);
	var database = firebase.database();
	$("#submitMessage").click(function (e) {
		e.preventDefault();
		var userFirstName = $("#firstName").val();
		var userLastName = $("#lastName").val();
		var userEmail = $("#email").val();
		var userSubject = $("#subject").val();
		var userMessage = $("#message").val();
		if (userFirstName.length === 0 || userLastName.length === 0 || userEmail.length === 0 || userSubject.length === 0 || userMessage.length === 0) {
			$("#error").show();
			$("input, textarea").val("");
		} else {
			$("#error").hide();
			database.ref().push({
				firstname: userFirstName,
				lastName: userLastName,
				email: userEmail,
				subject: userSubject,
				message: userMessage
			})
			$("input, textarea").val("");
		}

	});

});