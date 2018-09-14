
$(document).ready(function(){
    $(document).on("mouseenter tap click",".green",function(){
        $(this).hide();
        $(this).parent().find(".gray").show();
    });
    $(document).on("mouseout blur",".gray",function(){
        $(this).hide();
        $(this).parent().find(".green").show();
    });
});

