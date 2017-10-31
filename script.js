var num = 10; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('nav').addClass('sticky-top');
    } else {
        $('nav').removeClass('sticky-top');
    }
});
