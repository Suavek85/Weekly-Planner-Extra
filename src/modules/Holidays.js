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

        var collapsibleHols = `<img src='images/expand.png' id='expand'  alt="Expand"><div style="display:none" id='collapsible_holidays'><p id='secondHol' class='collapibleText' >second holiday</p><p id='thirdHol' class='collapibleText'></p><p id='fourthHol' class='collapibleText'></p></div>`

        console.log(res);

        //NEXY HOLIDAY

        var holidaysArray = res.response.holidays.map(function (el) {
          return Date.parse(el.date) - todaysTS;
        });

        var closestHolIndex = holidaysArray.findIndex(function (el) {
          return el >= 0;
        })

        var closestHolTS = holidaysArray.find(function (el) {
          return el >= 0;
        })

        var oneDaySecs = 86400000;

        var daysLeft = Math.ceil(closestHolTS / oneDaySecs)

        if (daysLeft === 0) {
          document.getElementById('next_holidays').innerHTML = `It's ${res.response.holidays[closestHolIndex].name}` + collapsibleHols;
        } else {
          document.getElementById('next_holidays').innerHTML = `${daysLeft} days left till ${res.response.holidays[closestHolIndex].name}` + collapsibleHols;
        }

        //COLLAPSIBLE SECTION

        var i;
        var moreholsArray = [];
        var moreholsDaysLeft = [];

        for (i = 0; i < holidaysArray.length; i++) {
          if (holidaysArray[i] >= 0) {
            moreholsArray.push(i);
            var moredaysleft = Math.ceil(holidaysArray[i] / oneDaySecs);
            moreholsDaysLeft.push(moredaysleft);
          }
        }


        if (moreholsArray.length < 2) {
          document.getElementById('expand').style.display = 'none';
        } else if (moreholsArray.length === 2) {
          document.getElementById('secondHol').innerHTML = `${res.response.holidays[moreholsArray[1]].name} in ${moreholsDaysLeft[1]} days`
        } else if (moreholsArray.length === 3) {
          document.getElementById('secondHol').innerHTML = `${res.response.holidays[moreholsArray[1]].name} in ${moreholsDaysLeft[1]} days`
          document.getElementById('thirdHol').innerHTML = `${res.response.holidays[moreholsArray[2]].name} in ${moreholsDaysLeft[2]}  days`
        } else if (moreholsArray.length >= 3) {
          document.getElementById('secondHol').innerHTML = `${res.response.holidays[moreholsArray[1]].name} in ${moreholsDaysLeft[1]} days`
          document.getElementById('thirdHol').innerHTML = `${res.response.holidays[moreholsArray[2]].name} in ${moreholsDaysLeft[2]} days`
          document.getElementById('forthHol').innerHTML = `${res.response.holidays[moreholsArray[3]].name} in ${moreholsDaysLeft[3]} days`
        }
      }
    )
}