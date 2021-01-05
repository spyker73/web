/* 구역 클릭시 */
var area = function toArea(event,from){
  //location.href=destination;
  $(from).click(function(){ 
    $("html, body").animate({
      scrollTop: $($(this).attr("data-target")).offset().top
    }, 400);
  });
}


/* 위치 아이콘 클릭시 */
var icon = function toLocation(event, from) {
  event.stopPropagation();
  //location.href=destination;
  $(from).click(function(){ 
    $("html, body").animate({
      scrollTop: $($(this).attr("data-target")).offset().top
    }, 400);
  });
}

function zoomIn(event) {
  event.target.style.transform = "scale(1.2)";
  event.target.style.zIndex = 2;
  event.target.style.transition = "all 0.5s";
  /*툴팁을 이용한 말풍선 띄우기*/
  $(function(){ $( document ).tooltip(); })
}

function zoomOut(event) {
  event.target.style.transform = "scale(1)";
  event.target.style.zIndex = 0;
  event.target.style.transition = "all 0.5s";
}

