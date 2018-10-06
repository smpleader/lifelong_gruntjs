
$(document).ready(function(){
    $("#sitetop").sticky({
      topSpacing:0,
      zIndex:5
    });
    // push footer up to stop hide content
    $("footer").css("margin-bottom","45px");
  });