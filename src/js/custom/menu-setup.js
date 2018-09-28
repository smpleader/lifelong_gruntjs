
$(document).ready(function(){
    var canvasMenu =  new mlPushMenu( 
        document.getElementById( 'mp-menu' ), 
        document.getElementById( 'mp-menu-trigger' ), 
        document.getElementById( 'navigation' ), 
        { type : 'cover' }
    );
    $(".mp-menu-close").click(function(){
        canvasMenu._resetMenu();
    })
});