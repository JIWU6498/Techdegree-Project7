// // Traffic Graph
// const trafficGraph = document.getElementById('traffic-graph').getContext('2d');
const chart = new Chart(trafficGraph, {
   type: 'line',

   data: {
      labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
      
      datasets: [{
         label:'Hourly',
         data: [0, 500, 1000, 725, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500,2000],
         backgroundColor: 'rgba(116,119,191,0.4)',
         borderColor: 'rgba(116,119,191,1)',
         borderWidth:2,
         lineTension:0,
         pointRadius:6,
         pointBorderColor:'rgba(116,119,191,1)',
         pointBackgroundColor:'white',
         pointBorderWidth:'2',
         fontColor:'red',
         fontSize:'12',
         fontFamily:'arial',
      },{
         label:'Daily',
         data: [0, 500, 1000, 725, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500,2000],
         backgroundColor: 'rgba(116,119,191,0.4)',
         borderColor: 'rgba(116,119,191,1)',
         borderWidth:2,
         lineTension:0,
         pointRadius:6,
         pointBorderColor:'rgba(116,119,191,1)',
         pointBackgroundColor:'white',
         pointBorderWidth:'2',
         fontColor:'red',
         fontSize:'12',
         fontFamily:'arial',
       
      },
      {
         label:'Weekly',
         data: [0, 500, 1000, 725, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500,2000],
         backgroundColor: 'rgba(116,119,191,0.4)',
         borderColor: 'rgba(116,119,191,1)',
         borderWidth:2,
         lineTension:0,
         pointRadius:6,
         pointBorderColor:'rgba(116,119,191,1)',
         pointBackgroundColor:'white',
         pointBorderWidth:'2',
         fontColor:'red',
         fontSize:'12',
         fontFamily:'arial',
       
      },
      {
         label:'Monthly',
         data: [0, 500, 1000, 725, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500,2000],
         backgroundColor: 'rgba(116,119,191,0.4)',
         borderColor: 'rgba(116,119,191,1)',
         borderWidth:2,
         lineTension:0,
         pointRadius:6,
         pointBorderColor:'rgba(116,119,191,1)',
         pointBackgroundColor:'white',
         pointBorderWidth:'2',
         fontColor:'red',
         fontSize:'12',
         fontFamily:'arial',
       
      }],
   },

   // Configuration options go here
   options: {
      layout: {
         padding: {
            left: 20,
            right: 20,
            top: 20,
            bottom: 20,
         }
      },
      legend: {
         labels: {
             fontColor: 'red',
         }
     }


   }
});