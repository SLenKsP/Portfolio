// $('.container div:nth-child(odd').addClass('parallax');

$('.overlay').on('click', function() {
	var imgAlt = $(this).next().attr('alt');
	window.open(imgAlt, '_blank');
});
