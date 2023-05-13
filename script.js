$(window).on('load', function() {
    console.log("hello")
})
$(document).scroll(function() {
           if($(window).scrollTop() > 900){

            $("#abt-start").animate({"opacity": "1"},2000);
            // $("#abt-overlap").css({"opacity": "1"},1000);
            // $("#abt-overlap2").css({"opacity": ".5"},1000);
           }
    });
    $(document).scroll(function() {
        if($(window).scrollTop() > 1300){

         $("#abt-edu").animate({"opacity": "1"},2000);
        }
 });