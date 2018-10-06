

var set_callbox_dimension = function(){
    $(".callbox .bg").each(function(){
        var par = $(this).parents(".callbox");
        $(this).height( par.innerHeight() -8 ); 
        // console.log(  par.innerHeight() , $(this).height());
        $(this).width( par.innerWidth() - 8);
    });
}
$(document).ready( function(){
    set_callbox_dimension();
});
$( window ).resize(function(){ 
    set_callbox_dimension();
});