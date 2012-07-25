

$(document).ready(function() {

	var	nbSections = $("#carrousel .section").length;
    var sections = $("#carrousel .carrousel-sections");

	sections.css("width", ($("#carrousel .carrousel-container").width() * nbSections) );

    $(".carrousel-previous").hide();
    var numSection = 0;
    $(".carrousel-next").click(function(event) {
        if(numSection < (nbSections-1) ) {
            numSection++;
            var btn = $(this);
            $("#carrousel .carrousel-sections").animate({
                    marginLeft : - ($("#carrousel .carrousel-container").width() * numSection)
                }, 'fast', function() {
                    $(".carrousel-previous").show();
                    if (numSection == (nbSections-1)) {
                        btn.hide();
                    }
                    else {
                        btn.show();
                    }
                }
            );
        }
        event.preventDefault();
    });

    $(".carrousel-previous").click(function(event) {
        if(numSection > 0) {
            numSection--;
            var btn = $(this);
            $("#carrousel .carrousel-sections").animate({
                marginLeft : - ($("#carrousel .carrousel-container").width() * numSection)
                }, 'fast', function(){
                    $(".carrousel-next").show();
                    if (numSection == 0) {
                        btn.hide();
                    }
                    else {
                        btn.show();
                    }
                }
            );
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
    
    
