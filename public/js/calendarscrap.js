function printbatches() {
    document.querySelector("BATCHES").innerHTML = "Lets Make Sure this even works";
  };


document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    let allevents = [

          { title:'Distribute Lemon Ginger',start:'2026-02-16',end:'2026-02-28',color:'gold',textColor:'black'},
          { title:'Distribute Strawberry Jalapeno',start:'2026-02-14',end:'2026-02-28',color:'red',textColor:'green'},


          { title:'Distribute Strawbery Jalapeno',start:'2025-09-05',end:'2025-09-14',color:'red',textColor:'green'},
          { title:'Distribute Mango',start:'2025-09-10',end:'2025-09-20',color:'orange',textColor:'black'},
          { title:'Distribute Golden Beet Ginger',start:'2025-08-30',end:'2025-09-05',color:'pink',textColor:'black'},
          { title:'Distribute Pineapple Ginger',start:'2025-08-30',end:'2025-09-08',color:'gold',textColor:'black'},
          { title:'Distribute Ginger',start:'2025-08-02',end:'2025-09-05',color:'brown',textColor:'yellow'},
          
          { title:'Distribute Blackberry Mint',start:'2025-08-12',end:'2025-08-23',color:'purple',textColor:'green'}, { title:'Distribute Blue Lemon Ginger',start:'2025-07-19',end:'2025-08-09',color:'blue',textColor:'yellow'}, { title:'Distribute Pineapple Clementine',start:'2025-08-01',end:'2025-08-18',color:'orange',textColor:'yellow'}, { title:'Distribute Mango Lime',start:'2025-07-08',end:'2025-07-22',color:'orangered',textColor:'green'}, { title:'Brewing Mango',start:'2024-09-19',end:'2024-09-26',color:'orangered',textColor:'black'},{title:'Tap Mango',start:'2024-09-26',color:'darkred'},{title:'Distro Mango',start:'2024-09-27',end:'2024-09-30',color:'greenyellow',textColor:'black'},{title:'Brewing Lemon Ginger Mint',start:'2024-09-09',end:'2024-09-14',color:'yellow',textColor:'black'},{title:'Tap LemGinMnt',start:'2024-09-15',color:'orange',textColor:'black'},{title:'Distro Lemon Ginger Mint',start:'2024-09-16',end:'2024-09-18',color:'greenyellow',textColor:'black'},{title:'Brewing Blackbery Mint',start:'2024-09-01',end:'2024-09-05',color:'indigo'},{title:'Tap BlkMnt',start:'2024-09-05',color:'violet',textColor:'black'},{title:'Disto BlkMnt',start:'2024-09-07',end:'2024-09-09',color:'greenyellow',textColor:'black'},{title:'First Batch Lemon Blueberry Ginger (Batch 101)',start:'2024-08-15',end:'2024-08-31'},{title:'Brewing Apple (KJP)',start:'2024-09-30',end:'2024-10-10',color:'red',textColor:'white'},{title:'Tap Apple',start:'2024-10-10',color:'crimson'},{title:'Distro Apple',start:'2024-10-11',end:'2024-10-14',color:'greenyellow',textColor:'black'},{title:'Brewing Raspberry Ginger (MP) Likely Extra Week',start:'2024-10-14',end:'2024-10-25',color:'pink',textColor:'black'},{title:'Tap Raspberry Ginger',start:'2024-10-25',color:'orange',textColor:'black'},
          { title:'Distro Raspbery Ginger',start:'2024-10-26',end:'2024-11-03',color:'greenyellow',textColor:'black'},{title:'Brewing Pineapple Clemintine 5 Gallon',start:'2024-11-07',end:'2024-11-14',color:'Yellow',textColor:'black'},{title:'Tap Pineapple Clemintine',start:'2024-11-14',color:'Orange',textColor:'black'},{title:'Distro Pineapple Clementine',start:'2024-11-15',end:'2024-11-20',color:'greenyellow',textColor:'black'},{title:'Brewing Strawberry Basil 5 Gallon',start:'2024-11-20',end:'2024-12-05',color:'Pink',textColor:'black'},{title:'Tap Strawberry Basil',start:'2024-12-05',color:'Red',textColor:'black'},{title:'Distro Strawberry Basil',start:'2024-12-06',end:'2024-12-12',color:'greenyellow',textColor:'black'},{title:'Holiday Break',start:'2024-12-12',end:'2024-12-26',color:'black',textColor:'white'},{title:'Tap Pomegranate Ginger',start:'2025-01-04',color:'indigo',textColor:'white'}, { title: 'Distribute Raspberry Ginger', start: '2025-07-01', end: '2025-07-08', color: '#7C1715', textColor: 'yellow' }, { title: 'Distribute Strawberry Basil', start: '2025-06-21', end: '2025-07-05', color: '#FF0000', textColor: 'green' }, { title: 'Distribute Watermelon (sold out)', start: '2025-06-07', end: '2025-06-26', color: 'pink', textColor: 'black' }, { title: 'Distribute Lemon Ginger', start: '2025-06-10', end: '2025-07-05', color: 'yellow', textColor: 'black' }, { title: 'Brewing Mango Lime', start: '2025-01-28', end: '2025-02-07', color: 'orange', textColor: 'black' }, { title: 'Tap Mango Lime', start: '2025-02-07', color: 'green', textColor: 'white' }, { title: 'Distribute Mango Lime', start: '2025-02-08', end: '2025-02-15', color: 'yellowgreen', textColor: 'black' }, { title: 'Brewing Lemon Ginger', start: '2025-01-10', end: '2025-01-17', color: 'yellow', textColor: 'black' }, { title: 'Tap Lemon Ginger', start: '2025-01-17', color: 'orange', textColor: 'black' }, { title: 'Distribute Lemon Ginger', start: '2025-01-18', end: '2025-01-28', color: 'yellowgreen', textColor: 'black' }, { title: 'Brewing Pomegranate Ginger', start: '2024-12-26', end: '2025-01-04', color: 'violet', textColor: 'white' }, { title: 'Distribute Pomegranate Ginger', start: '2025-01-05', end: '2025-01-10', color: 'greenyellow', textColor: 'black' },

          {
            title: 'Back Home',
            url: 'http://www.sipofbooch.com',
            start: '2025-09-30'
          },

      ];
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      initialDate: '2026-02-01',
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


