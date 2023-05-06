$(window).on('load', function() {
    console.log("hello")
})
$(document).scroll(function() {
           if($(window).scrollTop() > 910){

            $("#abt-start").css({"opacity": "1"},1000);
            $("#abt-overlap").css({"opacity": "1"},1000);
            $("#abt-overlap2").css({"opacity": ".5"},1000);
           }
    });