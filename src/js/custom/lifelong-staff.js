
var place_img_for_lifelong_staff = function(){
    var wd = $( window ).width();
    if( wd > 1326 ){
        $("#lifelong-staff .content").show();
        $("#lifelong-staff #img-content").appendTo( $("#desktop-img-position"));
    }else if( wd > 480){
        $("#lifelong-staff .content").show();
        $("#lifelong-staff #img-content").appendTo( $("#tablet-img-position"));
    }else{
        $("#lifelong-staff #img-content").appendTo( $("#mobile-img-position"));
        $("#lifelong-staff .content").hide();
    }
}
$(document).ready( function(){
    place_img_for_lifelong_staff();
    $("#lifelong-staff a.readmore").click(function(){
        $("#lifelong-staff .content").toggle();
    });    
});
$( window ).resize(function(){ place_img_for_lifelong_staff() });