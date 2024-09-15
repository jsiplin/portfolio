let date = new Date();

function renderCalendar(BatchObject) {
    date.setDate(1);

    const monthDays = document.getElementById('calendar-body');
    const month = document.getElementById('month');
    const daysElement = document.getElementById('days');

    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    const days = [
        'S',
        'M',
        'T',
        'W',
        'T',
        'F',
        'S'
    ];

    month.innerText = `${months[date.getMonth()]} ${date.getFullYear()}`;
    daysElement.innerHTML = days.map(day => `<div class="daydiv">${day}</div>`).join('');

    let dates = '';

    for (let x = firstDayIndex; x > 0; x--) {
        dates += `<div class='prev-date'>${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        
        const production1 = BatchObject.Batches[1].production;
        const tap1 = BatchObject.Batches[1].tap;        
        const distribute1 = BatchObject.Batches[1].distribute;
        const production2 = BatchObject.Batches[2].production;
        const tap2 = BatchObject.Batches[2].tap;
        const distribute2 = BatchObject.Batches[2].distribute;
        if (
            i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth() &&
            date.getFullYear() === new Date().getFullYear()
        ) {
            dates += `<div class='today'>${i}<br>Today</div>`;
        } else if (production1.includes(i)){
            dates += `<div class='production1'>${i}<br>BREW\nBlkMnt</div>`;
        } else if (tap1.includes(i)){
            dates += `<div class='tap1'>${i}<br>TAP\nBlkMnt</div>`;
        } else if (distribute1.includes(i)){
            dates += `<div class='distribute'>${i}<br>Disto\nBlkMnt</div>`;
        } else if (production2.includes(i)){
            dates += `<div class='production2'>${i}<br>BREW\nLemGin</div>`;
        } else if (tap2.includes(i)){
            dates += `<div class='tap2'>${i}<br>TAP\nLemGin</div>`;
        } else if (distribute2.includes(i)){
            dates += `<div class='distribute'>${i}<br>Disto\nLemGin</div>`;      
        } else {
            dates += `<div>${i}</div>`;
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        dates += `<div class='next-date'>${j}</div>`;
    }
    monthDays.innerHTML = dates;
   
}

document.getElementById('month-prev').addEventListener('click', () => {
    document.getElementById('calendar-body').classList.add('fade-out');
    setTimeout(() => {
        date.setMonth(date.getMonth() - 1);
        renderCalendar();
        document.getElementById('calendar-body').classList.remove('fade-out');
    }, 500);
});

document.getElementById('month-next').addEventListener('click', () => {
    document.getElementById('calendar-body').classList.add('fade-out');
    setTimeout(() => {
        date.setMonth(date.getMonth() + 1);
        renderCalendar();
        document.getElementById('calendar-body').classList.remove('fade-out');
    }, 500);

});

function batchsetup() {
    // Define the batchlist
    let batchlist = {
        "Batches": [{
            "batch": 101,
            "month": "August",
            "year": 2024,
            "flavor": "Lemon/Blueberry/Ginger",
            "rating": "9/10",
            "ingreditents": "6/1Pint/0.25oz",
            "production": [31],
            "tap": [31],
            "distribute": [31]
        },{
            "batch": 102,
            "month": "September",
            "year": 2024,
            "flavor": "Blackberry/Mint",
            "rating": "9/10",
            "ingreditents": "6/1Pint/0.25oz",
            "production": [1, 2, 3, 4],
            "tap": [5],
            "distribute": [7, 8]
        },
        {
            "batch": 103,
            "month": "September",
            "year": 2024,
            "flavor": "Lemon/Ginger/Mint",
            "rating": "TBD",
            "ingreditents": "6ea/8oz/1oz",
            "production": [9, 10, 11, 12, 13],
            "tap": [15],
            "distribute": [16, 17]
        }]
  };
    // Convert batchlist to JSON and parse it (not necessary unless receiving it as a string)
const batchcalendar = JSON.parse(JSON.stringify(batchlist));
  
    // Display the first batch elemetes in the "showme" paragraph

const batchnumbers = ["batch101","batch102","batch103"];




document.getElementById(batchnumbers[1]).innerHTML = batchcalendar.Batches[1].batch + " - " 
        +  batchcalendar.Batches[1].month + " - "
        +  batchcalendar.Batches[1].year + " - "
        +  batchcalendar.Batches[1].flavor + " - "
        +  batchcalendar.Batches[1].ingreditents + " - "
        +  batchcalendar.Batches[1].rating + " - "
        +  batchcalendar.Batches[1].production + " - "
        +  batchcalendar.Batches[1].tap + " - "
        +  batchcalendar.Batches[1].distribute;

document.getElementById(batchnumbers[2]).innerHTML = batchcalendar.Batches[2].batch + " - " 
    +  batchcalendar.Batches[2].month + " - "
    +  batchcalendar.Batches[2].year + " - "
    +  batchcalendar.Batches[2].flavor + " - "
    +  batchcalendar.Batches[2].ingreditents + " - "
    +  batchcalendar.Batches[2].rating + " - "
    +  batchcalendar.Batches[2].production + " - "
    +  batchcalendar.Batches[2].tap + " - "
    +  batchcalendar.Batches[2].distribute;
return(batchcalendar);
};

passbatchobj = batchsetup();
renderCalendar(passbatchobj);
