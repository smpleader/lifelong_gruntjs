
$(document).ready(function(){
    var canvasMenu =  new mlPushMenu( 
        document.getElementById( 'mp-menu' ), 
        document.getElementById( 'mp-menu-trigger' ), 
        document.getElementById( 'navigation' ), 
        { type : 'cover' }
    );
    $(".mp-menu-close").click(function(){
        canvasMenu._resetMenu();
    });
    var max_h = 0;
    $(".mp-menu .mp-level").each(function(){
        if($(this).prop('scrollHeight') > max_h) max_h = $(this).prop('scrollHeight');
    });
    $(".mp-menu .mp-level").each(function(){
        $(this).css('height', max_h);
    });
    
});