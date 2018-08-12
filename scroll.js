$(function(){
	$('a[href^=#]').click(function() {
		var speed = 400;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var headerHeight =　 170;  //maxであることに注意
		var position = target.offset().top - headerHeight; //headerズレ補正
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
});
