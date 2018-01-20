function scrollToSection(name) {
    // Scroll to a certain element
    document.getElementById(name).scrollIntoView({ 
        behavior: 'smooth' 
    });
}

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

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var portfolio = $('#portfolio-section-holder').offset().top;
    var contact = $('#contact-section-holder').offset().top;
    if (scroll >= contact){
        $('#title-text').text("danielcovelli.com/contact");
    } else if (scroll >= portfolio) {
        $('#title-text').text("danielcovelli.com/portfolio");
    } else {
        $('#title-text').text("danielcovelli.com");
    }
});