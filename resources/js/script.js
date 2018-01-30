$(document).ready(function(){
    $('html, body').css({
        overflow: 'hidden',
        height: '100%'
    });
    
    $('.slide-show').slick({
        dots: true
    });
});

$(window).on("load", function() {
    $('html, body').css({
        overflow: 'auto',
        height: 'auto'
    });

    $('#loader').fadeOut(1000);
});

$(".slide-show").on("beforeChange", function (){
    $('.carousel-text').show();
})

function scrollToSection(name) {
    // Scroll to a certain element
    $('html, body').animate({
        scrollTop: $("#" + name).offset().top
    }, 500);
}

function reloadSlider(num) {
    $('.slide-show')[num].slick.refresh();
    $('.carousel-text').show();
}

$(".toggle-content").click(function(){
    var carousel = $('.carousel-text'); 
    if (carousel.is(':visible')) {
        carousel.hide();
    } else {
        carousel.show();   
    }
});

$("#intern-button").click(function(){
    $("#intern-button").hide();
    $("#internship-content").show();
});

$("#personal-button").click(function(){
    $("#personal-button").hide();
    $("#independant-content").show();
});

$("#contact-button").click(function(){
    $("#contact-button").hide();
    $("#contact-content").show();
});

$("#contact-content").click(function(){
    $("#contact-content").hide();
    $("#contact-button").show();
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var portfolio = $('#portfolio-section-holder').offset().top;
    var contact = $('#contact-section-holder').offset().top;

    var internship = $('#internship-content');
    var independant = $('#independant-content');

    if (scroll >= contact){
        $('#title-text').text("danielcovelli.com/contact");
    } else if (scroll >= portfolio) {
        $('#title-text').text("danielcovelli.com/portfolio");
    } else {
        $('#title-text').text("danielcovelli.com");
    }

});