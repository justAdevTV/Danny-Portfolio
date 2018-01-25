$(document).ready(function(){
    $('.slide-show').slick({
        dots: true
    });
});

$(".slide-show").on("beforeChange", function (){
    $('.carousel-text').hide();
})

function scrollToSection(name) {
    // Scroll to a certain element
    $('html, body').animate({
        scrollTop: $("#" + name).offset().top
    }, 500);
}

function reloadSlider(num) {
    $('.slide-show')[num].slick.refresh();
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