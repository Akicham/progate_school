$(function() {
	$('a[href^=#]').click(function(){
   var speed = 400;
   
   var href= $(this).attr("href");

   var target = $(href == "#" || href == "" ? 'html' : href);
   
   var position = target.offset().top;

   $('body,html').animate({scrollTop:position} , speed , 'swing' );
    return false;
  });


	$('#login-msg').click(function(){
     if($(this).hasClass('active')){
      $(this).removeClass('active').text('もっと詳しく');
      $('.top-message').fadeOut();

     }else{

      $(this).addClass('active').text('閉じる');
      $('.top-message').fadeIn();
     }

	});


  $('.lesson-hover').hover(

    function(){
    $(this).find('p').fadeIn();

    },

    function(){
    $(this).find('p').fadeOut();

    }
  );


$('.image-section').hover(
  function(){
   $(this).addClass('column-change');

  },

  function(){
   $(this).removeClass('column-change');
  });

});
 

