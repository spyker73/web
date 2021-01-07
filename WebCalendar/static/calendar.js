/*document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar1');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    
    initialView: 'dayGridMonth',
    locale : 'ko', 
    initialDate: '2021-01-01' , 
    showNonCurrentDates: false, // 31일 이후로 안보이게
    dayMaxEventRows: 4 , // 화면에 최대 몇개를 디스플레이 할것인가

    headerToolbar: {

      left: '',

      center: 'title',
      right:'month,agendaweek,agendaDay'

     },
  });

  
  
  calendar.render();
});*/

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar1');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      locale :  'ko',
      initialDate: '2021-01-07',
      showNonCurrentDates: false,
      dayMaxEventRows: 4,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth timeGridWeek timeGridDay'
      },
       
      events: [
        {
            title: "오늘의 할 일 1",
            start: "2021-01-07",
            end: "2021-01-10",
        },
        {
            title: "오늘의 할 일 3",
            start: "2021-01-10",
        },
        {
            title: "오늘의 할 일 4",
            start: "2021-01-03",
            end: "2021-01-05",
        }
    ]
    });
  
    calendar.render();
  });
  /*
  document.addEventListener('DOMContentLoaded', function() {
    var Calendar = FullCalendar.Calendar;
    var Draggable = FullCalendarInteraction.Draggable;
  
    var containerEl = document.getElementById('external-events');
    var calendarEl = document.getElementById('calendar');
    var checkbox = document.getElementById('drop-remove');
  
    // initialize the external events
    // -----------------------------------------------------------------
  
    new Draggable(containerEl, {
      itemSelector: '.fc-event',
      eventData: function(eventEl) {
        return {
          title: eventEl.innerText,
        };
      }
    });
  
    // initialize the calendar
    // -----------------------------------------------------------------
  
    var calendar = new Calendar(calendarEl, {
      plugins: [ 'interaction', 'dayGrid', 'timeGrid' ],
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      defaultView: 'dayGridMonth',
      locale: 'ko',
      editable: true,
      droppable: true, // this allows things to be dropped onto the calendar
      eventAllow: function(dropLocation, draggedEvent){
          // Can an event be created from the "eventData" 
          // and passed into this callback from external? 
          // When dragging and event, its physical 
          // representation of duration is displayed 
          // so should have access before officially "dropped"
        
          // Note:  works fine for internally dragged items
        
          // see browser console for "invalid" draggedEvent
          // properties access to title yeilds:
          // " [Exception: TypeError: Cannot read property 'title' of undefined at e.get [as title] (https://fullcalendar.io/releases/core/4.0.1/main.min.js:7:22476) at e.invokeGetter (<anonymous>:2:14)]"
        
          console.log(draggedEvent);
        
      
          return true;
      },
      drop: function(info) {
        // is the "remove after drop" checkbox checked?
        if (checkbox.checked) {
          // if so, remove the element from the "Draggable Events" list
          info.draggedEl.parentNode.removeChild(info.draggedEl);
        }
      }
    });
  
    calendar.render();
  });*/