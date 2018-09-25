
var equal_slick_stories_items = function(){
    var max = 0;
    $(".slick-stories .item").each(function(){
        if($(this).outerHeight() > max) max = $(this).outerHeight();
    });
    $(".slick-stories .item").css("height",max+"px");
}
$(document).ready(function(){
    $(".slick-header").slick({
        autoplay:true,
        prevArrow:"<a class=\"slick-nav prev\"></a>",
        nextArrow: "<a class=\"slick-nav next\"></a>"
    });
    $(".slick-stories").slick({
        autoplay:false,
        centerPadding: "15px",
        slidesToShow:3,
        slide:".item",
        prevArrow:"<a class=\"slick-nav prev\"></a>",
        nextArrow: "<a class=\"slick-nav next\"></a>",
        responsive: [
            {
                breakpoint: 780,
                settings: {
                    slidesToShow:1
                }
            }
        ]
    });
    $(".member-logos").slick({
        autoplay:false,         
        slidesToShow:5,
        slide:"li",
        responsive: [
            {
                breakpoint: 360,
                settings: {
                    prevArrow:'',
                    nextArrow:'',
                    autoplay:true,
                    slidesPerRow:1,
                    slidesToShow:1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesPerRow:2,
                    slidesToShow:2,
                }
            },
            {
                breakpoint: 1326,
                settings: {
                    slidesToShow:4
                }
            }
        ]
    });
    /** equal items */
    equal_slick_stories_items();
});
$( window ).resize(function(){ equal_slick_stories_items() });