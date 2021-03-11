$(document).ready(function() {
    $("body").css("display", "none");

    $("body").fadeIn(1500);

    $(".transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1500, redirectPage);      
    });

    function redirectPage() {
        window.location = linkLocation;
    }

});