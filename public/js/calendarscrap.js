function printbatches() {
    document.querySelector("BATCHES").innerHTML = "Lets Make Sure this even works";
  };


document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    let allevents = [

        {
          title: 'Brewing Mango',
          start: '2024-09-19',
          end: '2024-09-26',
          color: 'orangered',
          textColor: 'black'

        },
        {
          title: 'Tap Mango',
          start: '2024-09-26',
          color: 'darkred'
        },
        {
          title: 'Distro Mango',
          start: '2024-09-27',
          end: '2024-09-30',
          color: 'greenyellow',
          textColor: 'black'
        },

        {
            title: 'Brewing Lemon Ginger Mint',
            start: '2024-09-09',
            end: '2024-09-14',
            color: 'yellow',
            textColor: 'black'
          },
        {
            title: 'Tap LemGinMnt',
            start: '2024-09-15',
            color: 'orange',
            textColor: 'black'
        },
        {
            title: 'Distro Lemon Ginger Mint',
            start: '2024-09-16',
            end: '2024-09-18',
            color: 'greenyellow',
            textColor: 'black'
        },
        {
            title: 'Brewing Blackbery Mint',
            start: '2024-09-01',
            end: '2024-09-05',
            color: 'indigo'
        },
        {
            title: 'Tap BlkMnt',
            start: '2024-09-05',
            color: 'violet',
            textColor: 'black'
        },
        {
            title: 'Disto BlkMnt',
            start: '2024-09-07',
            end: '2024-09-09',
            color: 'greenyellow',
            textColor: 'black'
        },

        {
            title: 'First Batch Lemon Blueberry Ginger (Batch 101)',
            start: '2024-08-15',
            end: '2024-08-31'
        },

        {
          title: 'Back Home',
          url: 'http://www.sipofbooch.com',
          start: '2024-11-01'
        },

        
        {
            title: 'Brewing Apple (KJP)',
            start: '2024-09-30',
            end: '2024-10-10',
            color: 'red',
            textColor: 'white'
  
          },

        {
          title: 'Tap Apple',
          start: '2024-10-10',
          color: 'crimson'
        },

        {
            title: 'Distro Apple',
            start: '2024-10-11',
            end: '2024-10-14',
            color: 'greenyellow',
            textColor: 'black'
          },
          {
            title: 'Brewing Raspberry Ginger (MP) Likely Extra Week',
            start: '2024-10-14',
            end: '2024-10-17',
            color: 'pink',
            textColor: 'black'
  
          },

        {
          title: 'Tap Raspberry Ginger',
          start: '2024-10-17',
          color: 'orange',
          textColor: 'black'
        },

        {
            title: 'Distro Raspbery Ginger',
            start: '2024-10-18',
            end: '2024-10-21',
            color: 'greenyellow',
            textColor: 'black'
          }
      ];
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      initialDate: '2024-10-01',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: allevents
    });
  
    calendar.render();
    printbatches();
    
  });


