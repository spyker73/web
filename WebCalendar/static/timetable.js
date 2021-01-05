// 텝 메뉴 구현
$(document).ready(function(){
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
});

// 달력 1
document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar1');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    
    initialView: 'dayGridMonth',
    locale : 'ko', 
    initialDate: '2020-10-01' , 
    showNonCurrentDates: false, // 31일 이후로 안보이게
    dayMaxEventRows: 4 , // 화면에 최대 몇개를 디스플레이 할것인가

    headerToolbar: {

      left: '',

      center: 'title',
      right:''

     },
     events: [
      { //초혼점등
        backgroundColor: '#F9D8AF',
        borderColor: '#F9D8AF',
        title: '읍·면·동 상징 등 거리행렬', 
        start: '2020-10-01',
        end: '2020-10-01'
      },
      {
        backgroundColor: '#F9D8AF',
        borderColor: '#F9D8AF',
        title: '고유제',
        start: '2020-10-01',
        end: '2020-10-01'
      },
      {
        backgroundColor: '#F9D8AF',
        borderColor: '#F9D8AF',
        title: '초혼점등',
        start: '2020-10-01',
        end: '2020-10-01'
      },
      {
        backgroundColor: '#F9D8AF',
        borderColor: '#F9D8AF',
        title: '수상 불꽃놀이',
        start: '2020-10-01',
        end: '2020-10-13'
      },
      
      {
        backgroundColor: '#EBB281',
        borderColor: '#EBB281',
        title: '소망등 달기', //소망등 달기
        start: '2020-10-01',
        end: '2020-10-13'
      },

      {
        backgroundColor: '#F4CA8A',
        borderColor: '#F4CA8A',
        title: '유등 띄우기', //유등 띄우기 ㄴ
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#D6DEA5',
        borderColor: '#D6DEA5',
        title: '추억의 유등 띄우기', //추억의 유등 띄우기 
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#EBB281',
        borderColor: '#EBB281',
        title: '세계풍물 등(燈) 및 한국의 미등(燈)', //수상등 전시 
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#EBB281',
        borderColor: '#EBB281',
        title: '동화나라 등(燈)', 
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#EBB281',
        borderColor: '#EBB281',
        title: '진주의 혼 등(燈)', 
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#EBB281',
        borderColor: '#EBB281',
        title: '기업 참여 등(燈)', 
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#EBB281',
        borderColor: '#EBB281',
        title: '전국지자체 참여 등(燈) 전시', 
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#ECA83A',
        borderColor: '#ECA83A',
        title: '30개 읍면동 상징 등 전시',  //육상등 전시
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#ECA83A',
        borderColor: '#ECA83A',
        title: '세계의 귀신',  
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#ECA83A',
        borderColor: '#ECA83A',
        title: '세계로 뻗어나가는 유등시리즈 "머라이언상"',  
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#ECA83A',
        borderColor: '#ECA83A',
        title: '백악기월드 인 진주',  
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#ECA83A',
        borderColor: '#ECA83A',
        title: '종교참여 등(燈)전시',  
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#ECA83A',
        borderColor: '#ECA83A',
        title: '창작등(燈) 전시', //창작등 전시  
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#CFD75B',
        borderColor: '#CFD75B',
        title: '추억의 문이 열립니다 | -100년의 추억', // 빛의로 되살아난 진주성 전시
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#CFD75B',
        borderColor: '#CFD75B',
        title: '한국의 풍습 등(燈)', 
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#CFD75B',
        borderColor: '#CFD75B',
        title: '유물 등(燈)', 
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#CFD75B',
        borderColor: '#CFD75B',
        title: '진주성전투 재현 등(燈)', 
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#CFD75B',
        borderColor: '#CFD75B',
        title: '삼강오륜(三綱五倫) 등', 
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#CFD75B',
        borderColor: '#CFD75B',
        title: '속담 등(燈)', 
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#CFD75B',
        borderColor: '#CFD75B',
        title: '민화 등(燈)', 
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#CFD75B',
        borderColor: '#CFD75B',
        title: '10월의 크리스마스', 
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#CFD75B',
        borderColor: '#CFD75B',
        title: '현대 등(燈)', 
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#CFD75B',
        borderColor: '#CFD75B',
        title: '민속놀이', 
        start: '2020-10-01',
        end: '2020-10-13'
      },
      




 

    ]

  });
  calendar.render();
});

// 달력 2
document.addEventListener('click', function() {
  var calendarEl = document.getElementById('calendar2');
  
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    locale : 'ko',
    initialDate: '2020-10-01' ,
    showNonCurrentDates: false, // 31일 이후로 안보이게
    dayMaxEventRows: 4 , // 화면에 최대 몇개를 디스플레이 할것인가
    headerToolbar: {

      left: '',

      center: 'title',
      right:''
     },
     events: [
      {
        backgroundColor: '#CFD75B',
        borderColor: '#CFD75B',
        title: '2019 진주남강유등축제 "워터라이딩쇼"',
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#F9D8AF',
        borderColor: '#F9D8AF',
        title: '소망등 달기 체험',
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#F9D8AF',
        borderColor: '#F9D8AF',
        title: '소형등 만들기 체험',
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#F9D8AF',
        borderColor: '#F9D8AF',
        title: '유등 만들어 띄우기 체험',
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#F9D8AF',
        borderColor: '#F9D8AF',
        title: '사랑다리 건너기 체험',
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#F9D8AF',
        borderColor: '#F9D8AF',
        title: '사랑의 프러포즈 이벤트(로멘틱연애조작단)',
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#F9D8AF',
        borderColor: '#F9D8AF',
        title: '시민참여 등 만들기 체험',
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#F9D8AF',
        borderColor: '#F9D8AF',
        title: '전통놀이 체험',
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#F9D8AF',
        borderColor: '#F9D8AF',
        title: '진주음식큰잔치 및 농.특산품 판매코너',
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#F9D8AF',
        borderColor: '#F9D8AF',
        title: '소원성취 나무 등체험',
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#F9D8AF',
        borderColor: '#F9D8AF',
        title: '스템프랠리',
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#EBB281',
        borderColor: '#EBB281',
        title: '대한민국 등 공모 대전출품작 전시',
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#F9D8AF',
        borderColor: '#F9D8AF',
        title: '유람선으로 아름다운 등 관람체험',
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#F9D8AF',
        borderColor: '#F9D8AF',
        title: '로봇물고기 유영 쇼',
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#ECA83A',
        borderColor: '#ECA83A',
        title: '남가람 어울마당',
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#F9D8AF',
        borderColor: '#F9D8AF',
        title: 'DJ와 함께 하는 추억의 음악다방 ',
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#F9D8AF',
        borderColor: '#F9D8AF',
        title: 'MBC경남 &#39;유등LIVE&#39;',
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#F9D8AF',
        borderColor: '#F9D8AF',
        title: '빛터널',
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#F9D8AF',
        borderColor: '#F9D8AF',
        title: '축등 설치 ',
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#F9D8AF',
        borderColor: '#F9D8AF',
        title: '수상 등 카페 운영',
        start: '2020-10-01',
        end: '2020-10-13'
      },

    ]
  });
  calendar.render();
});

// 달력 3
document.addEventListener('click', function() {
  var calendarEl = document.getElementById('calendar3');
  
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    locale : 'ko',
    showNonCurrentDates: false, // 31일 이후로 안보이게
    dayMaxEventRows: 4 , // 화면에 최대 몇개를 디스플레이 할것인가
    initialDate: '2020-10-01' ,

    headerToolbar: {

      left: '',

      center: 'title',
      right:''

     },
     events: [
      {
        backgroundColor: '#F9D8AF',
        borderColor: '#F9D8AF',
        title: '진주성 수성중군영 교대의식',
        start: '2020-10-01',
        end: '2020-10-02'
      },
      {
        backgroundColor: '#F9D8AF',
        borderColor: '#F9D8AF',
        title: '박물관 문화체험',
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#ECA83A',
        borderColor: '#ECA83A',
        title: '3D입체영화 진주성전투',
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#CFD75B',
        borderColor: '#CFD75B',
        title: '2019한일문화교류특별전',
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#EBB281',
        borderColor: '#EBB281',
        title: '거리아트페스티벌',
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#F9D8AF',
        borderColor: '#F9D8AF',
        title: '진진주성 전통무기 및 무예체험',
        start: '2020-10-11',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#F9D8AF',
        borderColor: '#F9D8AF',
        title: '진주성 한복체험',
        start: '2020-10-01',
        end: '2020-10-13'
      },
      {
        backgroundColor: '#F9D8AF',
        borderColor: '#F9D8AF',
        title: '제 13회 대한민국 농악축제',
        start: '2020-10-05',
        end: '2020-10-05'
      },
      {
        backgroundColor: '#F9D8AF',
        borderColor: '#F9D8AF',
        title: '진주 역사 골든벨',
        start: '2020-10-12',
        end: '2020-10-12'
      },
    ]
  });
  calendar.render();
});

// 올라가는 버튼 구현 //
$(function(){
$('#back-to-top').on('click',function(e){
e.preventDefault();
$('html,body').animate({scrollTop:0},600);
  });
  
  $(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
      $('#back-to-top').addClass('show');
    } else {
      $('#back-to-top').removeClass('show');
    }
  });
});

