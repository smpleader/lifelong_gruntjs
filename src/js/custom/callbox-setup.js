

var set_callbox_dimension = function(){
    $(".callbox .bg").each(function(){
        par = $(this).parents(".callbox");
        extra = 0;
        if(par.hasClass("topleft")) extra = 48;
        if(par.hasClass("topright")) extra = 48;
        if(par.hasClass("bottomleft")) extra = 53;
        if(par.hasClass("bottomright")) extra = 53;
        $(this).height( par.innerHeight() -8 ); 
        // console.log($(this),par.children(".content").outerHeight(),$(this).height());
        $(this).width( par.innerWidth() - 8); //console.log($(this).width() );
    });
}
$(document).ready( function(){
    set_callbox_dimension();
});
$( window ).resize(function(){ 
    set_callbox_dimension();
});