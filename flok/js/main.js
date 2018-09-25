$(document).ready(function () {
    //fade out loader
    $('.loading, .loading > img').fadeOut(1000, function () {
        $('body').css('overflowY', 'visible');
        $(this).remove();
    });

    //add active class to navbar links 
    $('.nav-wrapper ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});