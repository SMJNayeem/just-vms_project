$(function(){

    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
     
        
        if(scrolling > 90){
            $('.navbar').addClass('navbg');
        } else{
            $('.navbar').removeClass('navbg')
        }
    });

    // $('.counter').counterUp({
    //     delay: 10000,
    //     time: 1000
    // });

});
$('.counter').counterUp({
    delay: 10000,
    time: 1000
});