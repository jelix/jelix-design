

$(document).ready(function() {
    $("#jelix-users li a").hover(function (event) {
                $($(this).attr('href')).show();
            },
            function (event) {
                $($(this).attr('href')).hide();
    
            }
        ).click(function(event){event.preventDefault();})
});
    
    
