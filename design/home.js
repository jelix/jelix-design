

$(document).ready(function() {

	var	nbSections = $("#carrousel .section").length;
    var sections = $("#carrousel .carrousel-sections");

	sections.css("width", ($("#carrousel .carrousel-container").width() * nbSections) );
  
    var numSection = 0;
    $(".carrousel-next").click(function(event) {
        if(numSection < (nbSections-1) ) {
            numSection++;
            $("#carrousel .carrousel-sections").animate({
                marginLeft : - ($("#carrousel .carrousel-container").width() * numSection)
            });
        }
        event.preventDefault();
    });

    $(".carrousel-previous").click(function(event) {
        if(numSection > 0) {
            numSection--;
            $("#carrousel .carrousel-sections").animate({
                marginLeft : - ($("#carrousel .carrousel-container").width() * numSection)
            });
        }
        event.preventDefault();
        //
    });

    $("#jelix-users li a").hover(function (event) {
                $($(this).attr('href')).show();
            },
            function (event) {
                $($(this).attr('href')).hide();
    
            }
        ).click(function(event){event.preventDefault();})


});
    
    
