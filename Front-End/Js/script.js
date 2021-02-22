$(function(){

    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
     
        
        if(scrolling > 100){
            $('.navbar').addClass('navbg');
        } else{
            $('.navbar').removeClass('navbg')
        }
    });

});