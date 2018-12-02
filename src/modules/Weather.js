//LOCATION AND WEATHER

const apiKey = '44bec28a349022ede2335eaf35ab8433';


export function locationWeather() {

  if (!navigator.geolocation) {
    console.log("Geolocation is not supported by your browser");
    return;
  }

  var mainWeatherText = document.getElementById('weather');
  var mainWeatherCity = document.getElementById('weather-city');
  var mainWeatherIcon = document.getElementById('weather-icon');

  function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`

    fetch(url)
      .then(data => {
        return data.json()
      })

      .then(res => {
        mainWeatherText.innerHTML = `${Math.round(res.list[0].main.temp_max)}° in `;
        mainWeatherCity.innerHTML = `${ res.city.name}`;
        mainWeatherIcon.src = `https://openweathermap.org/img/w/${res.list[0].weather[0].icon}.png`

      })

  }

  function error() {

    console.log("Unable to retrieve your location");

    let url2 = `https://api.openweathermap.org/data/2.5/weather?q=${'London'}&units=metric&appid=${apiKey}`


    fetch(url2)
      .then(data => {
        return data.json()
      })
      .then(res => {

        mainWeatherText.innerHTML = `${res.main.temp}° in `;
        mainWeatherCity.innerHTML = `${res.name}`;
        mainWeatherIcon.src = `https://openweathermap.org/img/w/${res.weather[0].icon}.png`
        console.log(res);
      })

  }

  navigator.geolocation.getCurrentPosition(success, error);

}




export function updateWeatherCard(arg) {

  var cardWeather = document.getElementById('card-weather-id');
  cardWeather.innerHTML = "No weather prediction yet";
  var cardWeatherIcon = document.getElementById('card-weather-icon');
  cardWeatherIcon.src = "";
  var yourCity = document.getElementById('weather-city').innerHTML;
  var url2 = `https://api.openweathermap.org/data/2.5/forecast?q=${yourCity}&units=metric&appid=${apiKey}`;


  fetch(url2)
    .then(data => {
      return data.json()
    })

    .then(res => {

        console.log(res);

        var timestampArray = [res.list[0].dt, res.list[8].dt, res.list[16].dt, res.list[24].dt, res.list[32].dt];
        timestampArray.forEach(function (el, index) {
        var resListNo;
        var newDay = new Date();
        newDay.setTime(el * 1000);
        
          if (newDay.getDay() === arg) {

            if (index === 0) {
              resListNo = 0
            } else if (index === 1) {
              resListNo = 8
            } else if (index === 2) {
              resListNo = 16
            } else if (index === 3) {
              resListNo = 24
            } else if (index === 4) {
              resListNo = 32
            }

            document.getElementById('card-weather-id').innerHTML = Math.round(res.list[resListNo].main.temp_max) + '° in ' + res.city.name;

            document.getElementById('card-weather-icon').src = `https://openweathermap.org/img/w/${res.list[resListNo].weather[0].icon}.png`


          }

        })

      }

    )
}