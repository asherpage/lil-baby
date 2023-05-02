$(window).on('load', function() {
    console.log("hello")
})
$(document).scroll(function() {
           if($(window).scrollTop() > 950){

            $("#abt-start").animate({"opacity": "1"},900).delay(2000);
            $("#abt-start").animate({"transform": "perspective(70vw) rotateX(0) rotateY(30deg)"},900);
            $("#abt-overlap").animate({"opacity": "1"},900);
           }
    });