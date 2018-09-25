
$(document).ready(function(){
    $(document).on("mouseenter tap click","#top-readmores .green",function(){
        $(this).hide();
        $(this).parent().find(".gray").show();
    });
    $(document).on("mouseleave blur","#top-readmores .gray",function(){
        $(this).hide();
        $(this).parent().find(".green").show();
    });
});

