
$('.overlay').on('click', function () {
	var imgAlt = $(this).next().attr('alt');
	window.open(imgAlt, '_blank');
});
$(document).ready(function () {
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
	$("#contactSubmit").click(function (e) {
		e.preventDefault();
		var userName = $("#contactName").val();
		console.log(userName);
		var userEmail = $("#contactEmail").val();
		var userMessage = $("#contactMessage").val();

		database.ref().push({
			name: userName,
			email: userEmail,
			message: userMessage
		})
	});

});