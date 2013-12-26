$(document).ready(function() {
	hljs.initHighlightingOnLoad();
	$('.item.add').hover(function(){
		$(this).addClass('animated');
		$(this).addClass('pulse');
	})
	$('.item.add').mouseleave(function() {
		$(this).removeClass('animated');
		$(this).removeClass('pulse');
	})
});