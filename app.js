// Line Traffic Chart
let trafficChart = document.getElementById('traffic-chart').getContext('2d');

let trafficData = {
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
      pointBorderWidth: '2',
      fontColor: 'red',
      fontSize: '12',
      fontFamily: 'arial',
   }],
}

let trafficOptions = {
   aspectRatio: 2.5,
   animation: {
      duration: 0
   },
   scales: {
      yAxes: [{
         ticks: {
            beginAtZero: true
         }
      }]
   },
   legend: {
      display: false
   }
}

let drawTrafficChart = new Chart(trafficChart, {
   type: 'line',
   data: trafficData,
   options: trafficOptions
});

