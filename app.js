//Set global font value
Chart.defaults.global.defaultFontColor = '#b2b2b2';
Chart.defaults.global.defaultFontFamily = "'Source Sans Pro', sans-serif";
Chart.defaults.global.defaultFontSize = '14';
// Line Traffic Chart
let lineChart = document.getElementById('traffic-chart').getContext('2d');

let lineChartData = {
   labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],

   datasets: [{
      data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
      backgroundColor: 'rgba(116,119,191,0.3)',
      borderColor: 'rgba(116,119,191,1)',
      borderWidth: 3,
      lineTension: 0,
      pointRadius: 6,
      pointBorderColor: 'rgba(116,119,191,1)',
      pointBackgroundColor: 'white',
      pointBorderWidth: '3',
   }],
}

let lineChartOptions = {
   aspectRatio: 2.5,
   animation: {
      duration: 0
   },
   scales: {
      yAxes: [{
         ticks: {
            beginAtZero: false,
         },
         stacked: false,
         gridLines: {
            display: true,
            lineWidth: 1,
         }
      }]
   },
   legend: {
      display: false,
   },
   layout: {
      padding: {
         left: 20,
         right: 20,
         top: 20,
         bottom: 20,
      }
   },

}

let drawLineChart = new Chart(lineChart, {
   type: 'line',
   data: lineChartData,
   options: lineChartOptions
});

//bar chart
let barChart = document.getElementById('daily-chart').getContext('2d');

let barChartData = {
   labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],

   datasets: [{
      label: '# of Hits',
      data: [75, 115, 175, 125, 225, 200, 100],
      backgroundColor: '#7477BF',
      borderWidth: 1,

   }],
}

let barChartOptions = {
   scales: {
      yAxes: [{
         ticks: {
            beginAtZero: true
         }
      }]
   },
   legend: {
      display: false
   },
   layout: {
      padding: {
         left: 20,
         right: 20,
         top: 20,
         bottom: 20,
      }
   },
}

let drawBarChart = new Chart(barChart, {
   type: 'bar',
   data: barChartData,
   options: barChartOptions,
});

//pie chart
let pieChart = document.getElementById("mobile-chart").getContext("2d");

let pieChartData = {
   labels: ['Desktop', 'Tablet', 'Phone'],

   datasets: [{
      label: '# of Users',
      data: [2000, 550, 500],
      borderWidth: 0,
      backgroundColor: [
         '#7477BF',
         '#78CF82',
         '#51B6C8'
      ]
   }],
}

let pieChartOptions = {
   legend: {
      position: 'right',
      labels: {
         boxWidth: 20,
         fontStyle: 'bold',
      },
   },
   layout: {
      padding: {
         left: 20,
         right: 20,
         top: 20,
         bottom: 20,
      }
   },


}

let drawPieChart = new Chart(pieChart, {
   type: 'doughnut',
   data: pieChartData,
   options: pieChartOptions,
});

// Alert Banner
const alert = document.getElementById('alert');

//create the html for the banner
alert.innerHTML =
   `
   <div class="alert-banner">
   <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
   to complete</p>
   <p class="alert-banner-close">x</p>
   </div>
   `
alert.addEventListener('click', e => {
   let element = e.target;
   if (element.classList.contains("alert-banner-close")) {
      alert.style.display = "none";
   }
});

//Alert Bell
const alertNotification = document.getElementById('notification');
const alertBell = document.getElementById('alertBell');

alertNotification.innerHTML = `
   <ul class="alertNav">
   <li class="alertList">
      <div class="mark-wrapper">
         <p class="greenMark"></p>
         <div>
            You have 6 unread messages
         </div>
      </div>
      <p class="alert-list-close">X</p>
   </li>
   <li class="alertList">
      <div class="mark-wrapper">
         <p class="greenMark"></p>
         <div>
            You have 3 new followers
         </div>
      </div>
      <p class="alert-list-close">X</p>
   </li>
   <li class="alertList">
      <div class="mark-wrapper">
         <p class="greenMark"></p>
         <div>
            Your password expires in 7 days
         </div>
      </div>
      <p class="alert-list-close">X</p>
   </li>
   </ul>
`
alertBell.addEventListener('click', e => {
   alertNotification.style.display = "block";
});

alertNotification.addEventListener('mouseleave', e => {
   alertNotification.style.display = "none";
})

const alertListMessage = document.getElementsByClassName("alertList");
function alertBellListener() {
   if (alertListMessage.length !== 0) {
      for (let i = 0; i < alertListMessage.length; i++) {
         alertListMessage[i].addEventListener('click', e => {
            let element = e.target;
            if (element.classList.contains("alert-list-close")) {
               element.parentElement.style.display = "none";
            }
         })
      }
   }
}

alertBellListener();


// Message User Widget
// $(function () {
//    var userName = [
//       "Andrew",
//       "Anna",
//       "Bowen",
//       "Caroline",
//       "Cherk",
//       "Esssi",
//       "Fox",
//       "God",
//       "Hanna",
//       "Jenny",
//       "Jessi",
//       "Leo",
//       "Peter",
//       "Photo",
//       "Rio",
//       "Selena",
//       "Steven"
//    ];
//    $("#user").autocomplete({
//       source: userName
//    });
// });
const sendButton = document.getElementById('sbtButton');
sendButton.addEventListener('click', e => {

});
