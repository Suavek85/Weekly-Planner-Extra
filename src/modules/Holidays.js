//UPCOMING HOLIDAYS

export function updateNextHolidays() {

    var date = new Date(); 
    var todaysTS = date.getTime()
  
    const keyHols = 'b26794657e7d4906b15d868c3bb0a5f2abe5f74e'
    var urlHols = `https://www.calendarindex.com/api/v1/holidays?country=GB&year=2018&api_key=${keyHols}`;
  
  
    fetch(urlHols)
      .then(data => {
        return data.json()
      })
  
      .then(res => {
  
  
          console.log(res);
  
          var holidaysArray = res.response.holidays.map( function(el) {
  
          return Date.parse(el.date) - todaysTS;
  
          });
  
          var closestHolIndex = holidaysArray.findIndex(function(el) {
  
          return el >= 0;
  
          })

          var closestHolTS = holidaysArray.find(function(el) {
  
          return el >= 0;
    
          })

          var oneDaySecs = 86400000;

          var daysLeft = Math.ceil(closestHolTS / oneDaySecs)
  
          document.getElementById('next_holidays').innerHTML = `${daysLeft} days left till ${res.response.holidays[closestHolIndex].name}`;
         
        }
  
      )
  }
  