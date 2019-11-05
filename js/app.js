/* ============================================= */
/*                Local Storage                  */
/* ============================================= */

const emailNotification=document.getElementById('myonoffswitch1');
const profileToPublic=document.getElementById('myonoffswitch2');


$('#myonoffswitch1').on('click',()=>{
   const checkbox=$('#myonoffswitch1:checked').val();
   if(checkbox==='on'){
      localStorage.setItem("myonoffswitch1",'on');
   }else{
      localStorage.removeItem("myonoffswitch1");
   }
});

if(localStorage.getItem("myonoffswitch1")==="on"){
   emailNotification.checked=true;
}

$('#myonoffswitch2').on('click',()=>{
   const checkbox=$('#myonoffswitch2:checked').val();
   if(checkbox==='on'){
      localStorage.setItem("myonoffswitch2",'on');
   }else{
      localStorage.removeItem("myonoffswitch2");
   }
});

if(localStorage.getItem("myonoffswitch2")==="on"){
   profileToPublic.checked=true;
}

$('#timezone').change(()=>{
   localStorage.setItem('timezone',$('#timezone').val());
});
if(localStorage.getItem('timezone')){
   $('#timezone').val(localStorage.getItem('timezone'));
}

/* ============================================= */
/*                Google Chart.js                */
/* ============================================= */
//Set global font value
Chart.defaults.global.defaultFontColor = '#b2b2b2';
Chart.defaults.global.defaultFontFamily = "'Source Sans Pro', sans-serif";
Chart.defaults.global.defaultFontSize = '14';
Chart.defaults.global.tooltips.titleFontSize = 12;
Chart.defaults.global.tooltips.bodyFontSize=10;
Chart.defaults.global.tooltips.titleAlign='left';
Chart.defaults.global.tooltips.xPadding=11;
// Line Traffic Chart
let lineChart = document.getElementById('traffic-chart').getContext('2d');

let weeklylineChartData = {
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

let hourlylineChartData = {
   labels: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],

   datasets: [{
      data: [25, 30, 15, 35, 20, 45, 20, 15, 35, 15, 20],
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

let dailylineChartData = {
   labels: ['Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],

   datasets: [{
      data: [210, 320, 300, 180, 220, 420, 300, 250, 400, 350, 200],
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

let monthlylineChartData = {
   labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov','Dec'],

   datasets: [{
      data: [2101, 3200, 3000, 1800, 2200, 4200, 3000, 2500, 4000, 3500, 2000,2300],
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
      maintainAspectRatio: false,
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
   data: weeklylineChartData,
   options: lineChartOptions
});

const lineNav = document.getElementsByClassName("traffic-nav-link");
function drawLineGraph() {
   for (let i = 0; i < lineNav.length; i++) {
      lineNav[i].addEventListener('click', e => {
         let element = e.target;

         if (element.textContent === "Hourly") {
            drawLineChart = new Chart(lineChart, {
               type: 'line',
               data: hourlylineChartData,
               options: lineChartOptions
            });
         } else if (element.textContent === "Daily") {
            drawLineChart = new Chart(lineChart, {
               type: 'line',
               data: dailylineChartData,
               options: lineChartOptions
            });
         } else if (element.textContent === "Weekly") {
            drawLineChart = new Chart(lineChart, {
               type: 'line',
               data: weeklylineChartData,
               options: lineChartOptions
            });
         }else{
            drawLineChart = new Chart(lineChart, {
               type: 'line',
               data: monthlylineChartData,
               options: lineChartOptions
            });
         }
      })
   }
}

drawLineGraph();

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
      // labels: {
      //    boxWidth: 20,
      //    fontStyle: 'bold',
      // },
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
const alertBanner = document.getElementById('alert');

//create the html for the banner
alertBanner.innerHTML =
   `
   <div class="alert-banner">
   <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
   to complete</p>
   <p class="alert-banner-close">x</p>
   </div>
   `
alertBanner.addEventListener('click', e => {
   let element = e.target;
   if (element.classList.contains("alert-banner-close")) {
      alertBanner.style.display = "none";
   }
});

//Alert Bell
const alertNotification = document.getElementById('notification');
const alertBell = document.getElementById('alertBell');
const setting=document.getElementById("setting");
console.log(setting);
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
   setting.dataset.content='';
   setTimeout(()=>{
      setting.setAttribute('data-content','');
   });
   
},1000);


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
$(function () {
   var userName = [
      "Andrew",
      "Anna",
      "Bowen",
      "Caroline",
      "Cherk",
      "Esssi",
      "Fox",
      "God",
      "Hanna",
      "Jenny",
      "Jessi",
      "Leo",
      "Peter",
      "Photo",
      "Rio",
      "Selena",
      "Steven"
   ];
   $("#user").autocomplete({
      source: userName
   });
});
const sendButton = document.getElementById('sbtButton');
sendButton.addEventListener('click', e => {
   e.preventDefault();
   const name = document.getElementById('user').value;
   const message = document.getElementById('messageBox').value;
   const confirmdisplay = document.getElementById('confirmInfo');
   if (name !== "" && message !== "") {
      confirmdisplay.style.display = "block";
      confirmdisplay.style.backgroundColor = "#81c98f";
      confirmdisplay.innerHTML = `<p>Your message is sent to ${name}</p>`;
      alert( `Message successfully sent to: ${name}` );
   } else if (name == "" && message == "") {
      confirmdisplay.style.display = "block";
      confirmdisplay.style.backgroundColor = "#7477bf";
      alert( "Please fill out user and message fields before sending" );
      confirmdisplay.innerHTML = `<p>User and messages are required!</p>`;
   }else if(name === ""){
      alert( "Please fill out user field before sending" );
   }else{
      alert( "Please fill out message field before sending" );
   }
});


