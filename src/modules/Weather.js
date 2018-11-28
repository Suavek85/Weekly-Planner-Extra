//WEATHER

/*
let request = require('request');

let apiKey = '44bec28a349022ede2335eaf35ab8433';
let city = 'malaga';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`


request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});

*/
//export {weather, message};
