
$(document).ready(function(){
    $("#sitetop").sticky({
      topSpacing:0,
      zIndex:1
    });
   // var topspacing =  $(window).height() - $("#foot-free-app").height(); console.log(topspacing);
    $("#foot-free-app").sticky({
      topSpacing: topspacing ,
      bottomSpacing:0,
      zIndex:1
    });
  });