$(window).on('load', function() {
    console.log("hello")
})
$(document).scroll(function() {
           if($(window).scrollTop() > 910){

            $("#abt-start").css({"opacity": "1"},100);
            $("#abt-overlap").css({"opacity": "1"},100);
           }
    });