
$(document).ready(function(){
    $('.slick-sliders').slick({
        autoplay:true
    });
    $('.slick-stories').slick({
        autoplay:false,
        /*slidesPerRow:3,*/
        centerPadding: '10px',
        slidesToShow:3,
        slide:".item",
        responsive: [
            {
                breakpoint: 480,
                slidesToShow:1
            }
        ]
    });
    $('.member-logos').slick({
        autoplay:false,
         
        slidesToShow:5,
        slide:"li",
        responsive: [
            {
                breakpoint: 480,
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
});