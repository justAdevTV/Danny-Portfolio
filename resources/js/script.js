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