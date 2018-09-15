
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
});