$(function() {
	// body...

  $('#login-msg').click(function(){
 
   if($(this).hasClass('active')){
    $(this).removeClass('active').text('もっと詳しく');
    $('.top-message').fadeOut();
 
  }else{

    $(this).addClass('active').text('閉じる');
    $('.top-message').fadeIn();
   
  };

   });


$('.lesson-hover').hover(
function(){
 $(this).find('p').fadeIn();
},

function(){
 $(this).find('p').fadeOut();


}

);

});
  // $('.lesson-hover').hover(
  //   function() {
  //     // 子要素の「.text-contents」の要素を取得し、text-activeクラスをつけてください
  //    $(this).find('.text-contents').addClass('text-active'); 
      
  //   },
  //   function() {
  //     // 子要素の「.text-contents」の要素を取得し、text-activeクラスを外してください
  //     $(this).find('.text-contents').removeClass('text-active');
      
  //   }
  // );

// $('.lesson-hover').hover(function(){
//   $(this).find('p').fadeIn();

// },

// {function(){
// 	$(this).find('p').fadeOut();
// };


