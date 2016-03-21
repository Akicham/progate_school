$(function() {
	$('.header-right-menu a').click(function(){
   
   var href= $(this).attr("href");

   // var target = $(href == "#" || href == "" ? 'html' : href);
   
   // var position = target.offset().top;

   $('body,html').animate({scrollTop:$(href).offset().top} , 400);
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

    });

//modal fadeIn&close modal 2week

  $('.btn-signin').click(function(){
    $('#signup-modal').fadeIn();
    var id = $(this).parents('.course-item').attr('id');
    // textメソッドでh2の値を取得
    var title= $('#' + id).children('h2').text();
    // textメソッドでh2の値を書き換え
    $('#signup-form').children('h2').text('【' + title + '】に申し込む');

    $('#course-select').val(id);

  });


 $('.close-modal').click(function(){
    $('#signup-modal').fadeOut();

 });

// modal fadeIn&closemodal a month

// // id属性を取得する
// var id = $('.options').attr('id'); // id-hello
// // id属性がもってる中身を取得。例) Hello
// $('#' + id).text();
// // 取得したid属性の中身を書き換え 
// $('#output').text(id) 


// modal fadeIn&closemodal weekdays


$('.image-section').hover(
  function(){
   $(this).addClass('zoom');
   $(this).find('.black-overlay').fadeIn();

  },

  function(){
   $(this).removeClass('zoom');
 $(this).find('.black-overlay').fadeOut();

  });

});
 

