$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });
    
    $('.tv-section').addClass("tv-hidden").viewportChecker({
        classToAdd: 'tv-visible tv-animated', // Class to add to the elements when they are visible
        offset: 400
    });

});
