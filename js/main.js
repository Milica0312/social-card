$('.socialiconfb').mouseover(function(){
  //  $('.fbtxt').slideToggle();
		$(".fbtxt").stop().animate({
			 left: '50px',


	 });
	 $(".instatxt").stop().animate({
 		 left: '-300px',

  });

		$(".twtxt").stop().animate({
			 left: '-300px',

	});
	$(".yttxt").stop().animate({
			 left: '-300px',

	});
});
$('.socialiconinsta').mouseover(function(){
	$(".instatxt").stop().animate({
		 left: '50px',

 });
 $(".fbtxt").stop().animate({
	 left: '-300px',

});

	$(".twtxt").stop().animate({
		 left: '-300px',

});$(".yttxt").stop().animate({
		 left: '-300px',

});
});
$('.socialiconyt').mouseover(function(){
	$(".yttxt").stop().animate({
		 left: '50px',

 });
 $(".fbtxt").stop().animate({
	 left: '-300px',

});

	$(".twtxt").stop().animate({
		 left: '-300px',

});$(".twtxt").stop().animate({
		 left: '-300px',

});
});
$('.socialicontw').mouseover(function(){
	$(".twtxt").stop().animate({
		 left: '50px',

});
$(".instatxt").stop().animate({
	left: '-300px',

});

 $(".fbtxt").stop().animate({
		left: '-300px',

});
});


$('.fb').mouseleave(function(){
	$(".fbtxt").stop().animate({
		 left: '-300px',
 });
});



$('.tw').mouseleave(function(){
	$(".twtxt").stop().animate({
		 left: '-300px',
 });
});



$('.insta').mouseleave(function(){
	$(".instatxt").stop().animate({
		 left: '-300px',
 });

});
 $('.yt').mouseleave(function(){
	$(".yttxt").stop().animate({
		 left: '-300px',
 });
});