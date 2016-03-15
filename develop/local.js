$(function() {
	// body...

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
 

