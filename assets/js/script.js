$(function(){
   
    $('.navbar-toggler').click(function() {
    $(this).toggleClass('active');
    $('#navbarHeader').toggleClass('open');
    $('body').toggleClass('menu-open');
   });

   $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});
// scroll body to 0px on click
$('#back-to-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 400);
    return false;
});

});