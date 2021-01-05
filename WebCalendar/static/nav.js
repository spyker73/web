$(document).ready(function() {
	// 기존 css에서 플로팅 배너 위치(top)값
	var floatPosition = parseInt($("#sidebox").css('top'));
    // scroll발생 시
	$(window).scroll(function() {
		// 현재 스크롤 위치
        var scrollTop = $(window).scrollTop();
        // 새로 이동할 위치
		var newPosition = scrollTop + floatPosition + "px";
        // 새 위치로 이동
		$("#sidebox").css('top', newPosition);
		$("#sidebox").stop().animate({"top" : newPosition}, 500);
	}).scroll();
});