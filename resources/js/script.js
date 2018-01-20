function scrollToPortfolio() {
    // Scroll to a certain element
    document.getElementById('portfolio-section-holder').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

$("#intern-button").click(function(){
    $("#intern-button").hide();
    $("#internship-content").show();
});