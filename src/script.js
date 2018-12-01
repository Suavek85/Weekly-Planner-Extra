import {
  view
} from './modules/View';
import {
  todos,
  weekArray
} from './modules/Todos';
import {
  dates
} from './modules/Dates';



//LOCATION AND WEATHER
var superArray = [];


function geoFindMe() {

  let apiKey = '44bec28a349022ede2335eaf35ab8433';

  if (!navigator.geolocation) {
    console.log("Geolocation is not supported by your browser");
    return;
  }

  function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
    let url2 = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`

    
    fetch(url)
      .then(data => {
        return data.json()
      })
      .then(res => {
        document.getElementById('weather').innerHTML = `${res.main.temp}° in`;
        document.getElementById('weather-city').innerHTML = `${res.name}`;
       console.log(res);

document.getElementById('weather-icon').src = `http://openweathermap.org/img/w/${res.weather[0].icon}.png`

      })



    fetch(url2)
    .then(data => {
      return data.json()
    })
    
    
    .then(res => {
      
      console.log(res);
      //superArray.push(res);
      console.log(res.list[0], res.list[8], res.list[16], res.list[24], res.list[32],res.list[39],res.list[39]);

      //firstDayWeather = function() { return res.list[0].main.temp + ' in ' + res.city.name; }
      //firstDayWeather =  res.list[0].main.temp + ' in ' + res.city.name; 
      //`${res.list[0].main.temp}° in ${res.name}`
      //http://openweathermap.org/img/w/${res.list[0].weather[0].icon}.png

    })


  }

  function error() {

    console.log("Unable to retrieve your location");

    let url3 = `http://api.openweathermap.org/data/2.5/weather?q=${'London'}&units=metric&appid=${apiKey}`
    let url4 = `http://api.openweathermap.org/data/2.5/weather?q=${'London'}&units=metric&appid=${apiKey}`


    fetch(url3)
      .then(data => {
        return data.json()
      })
      .then(res => {
        document.getElementById('weather').innerHTML = `${res.main.temp_min} - ${res.main.temp_min}° in ${res.name}`;
        document.getElementById('weather-icon').src = `http://openweathermap.org/img/w/${res.weather[0].icon}.png`
        console.log(res);
      })

      fetch(url4)
      .then(data => {
        return data.json()
      })
      .then(res => {
        //document.getElementById('weather').innerHTML = `It's ${res.main.temp}° in ${res.name}`;
        console.log(res);
  
  //document.getElementById('weather-icon').src = `http://openweathermap.org/img/w/${res.weather[0].icon}.png`
  
      })



  }


  navigator.geolocation.getCurrentPosition(success, error);
}




function zaba(arg) {

  var yourCity = document.getElementById('weather-city').innerHTML;
  console.log(yourCity);
  var apiKey2 = '44bec28a349022ede2335eaf35ab8433';
  var url2 = `http://api.openweathermap.org/data/2.5/forecast?q=${yourCity}&units=metric&appid=${apiKey2}`;
  
  
  fetch(url2)
      .then(data => {
        return data.json()
      })
      
      
      .then(res => {
        
        console.log(res);
        console.log(Math.round(res.list[0].main.temp_min) + '-' + Math.round(res.list[0].main.temp_max) + '° in ' + res.city.name) 
        console.log(`http://openweathermap.org/img/w/${res.list[0].weather[0].icon}.png`)
        console.log(res.list[0].dt, res.list[8].dt, res.list[16].dt, res.list[24].dt)
        
    
    var tomb = [res.list[0].dt, res.list[8].dt, res.list[16].dt, res.list[24].dt, res.list[32].dt, res.list[33].dt, res.list[34].dt ] ;
tomb.forEach(function(el, index) {

  
var anotherNo;

  console.log(index);
  
  var xx = new Date();
  xx.setTime(el*1000);
  console.log(xx.toUTCString());
  console.log(xx.getDay())

  if (xx.getDay() ===  arg) {

if(index === 0) { anotherNo = 0 } 
else if ( index === 1) { anotherNo = 8 }
else if ( index === 2) { anotherNo = 16 }
else if ( index === 3) { anotherNo = 24 }
else if ( index === 4) { anotherNo = 32 }
else if ( index === 5) { anotherNo = 38 }
else if ( index === 6) { anotherNo = 39 }
else { anotherNo = 0 } 

    document.getElementById('card-weather-id').innerHTML =  Math.round(res.list[anotherNo].main.temp_max) + '° in ' + res.city.name;
    
    document.getElementById('card-weather-icon').src = `http://openweathermap.org/img/w/${res.list[anotherNo].weather[0].icon}.png`


  } else{ console.log("Nope")}



})
    

  //})

      }
  
  
      )}

    //var timestamp = res.list[0].dt; // UNIX timestamp in seconds
    //var xx = new Date();
    //xx.setTime(timestamp*1000); // javascript timestamps are in milliseconds
    //console.log(xx.toUTCString());
    //console.log(xx.getDay())



//DAY CLASS

export default class Day {
  constructor(a) {
    this.a = a;
    this.b = document.getElementById("notes").value;
    var radios = document.getElementsByName("day");
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        var checkedRadio = radios[i].value;
        break;
      }
    }
    this.f = checkedRadio;
    this.g = todos.ul_tasks().innerHTML;
  }

  createDayBox(dayNumber) {
    document.getElementById("btns_" + dayNumber + "_open").style.display =
      "block";

    document.getElementById(
      "box_image_" + dayNumber
    ).style.backgroundImage = this.f;
  }

  createDayCard(dayNumber) {
    document.querySelector("#output8").innerHTML = this.b;
    var word = this.g;
    var todoHtml = `<div id='todolist' class='notes-item'>My tasks:<ul id='task_list_output'>${word}</ul>
    <img src='images/completed.png' class='button_day' id='completed'>
    </img><img src='images/trash.png' class='button_day' id='delete_output'></img></div>`;
    mynotes.insertAdjacentHTML("afterend", todoHtml);
    document.getElementById("close-day-" + dayNumber).style.display = "block";
  }

  updateDay() {
    var ul_tasks_output = document.getElementById("task_list_output").innerHTML;
    this.g = ul_tasks_output;
    this.b = document.querySelector("#output8").innerHTML;
  }
}


//CLICK EVENT LISTENERS & ONLOADS

document.addEventListener(
  "click",
  function (event) {
    var day_name = event.target.getAttribute("day-name");
    var dayIndex;
    if (event.target.id.includes("submit_")) {
      view.enableAdd();
      view.undisplayForm();
      view.displayWelcome();
      view.enableOpen();
      var numberSubmit = event.target.id.slice(-1);
      var dayfull = new Day(day_name);
      weekArray.push(dayfull);
      todos.countWeeklyTodos();
      dayIndex = weekArray.findIndex(function (element) {
        return element.a === event.target.getAttribute("day-name");
      });
      weekArray[dayIndex].createDayBox(numberSubmit);
      view.clearTodo();
    } else if (event.target.id.includes("-add")) {
      view.displayForm();
      view.disableAdd();
      view.undisplayWelcome();
      var eventbtn_add = event.target.id;
      var numberAdd = eventbtn_add.slice(3, 4);
      view.displaySubmit(numberAdd);
      view.removeFilter(numberAdd);
    } else if (event.target.id.includes("_open")) {
      view.displayDay();
      view.undisplayForm();
      view.disableOpen();
      view.disableAdd();
      view.undisplayWelcome();
      todos.countWeeklyTodos();
      var eventbtn_open = event.target.id;
      dayIndex = weekArray.findIndex(function (element) {
        return element.a === day_name;
      });

      if (eventbtn_open === "btns_1_open") {

        zaba(1);
        if (dates.notToday(1)) {
          dates.jumpToNextDay(dates.date(), 6);
        } else {
          dates.jumpToToday();
          
        }
      } else if (eventbtn_open === "btns_2_open") {

        zaba(2);
        if (dates.notToday(2)) {
          dates.jumpToNextDay(dates.date(), 5);
        } else {
          dates.jumpToToday();
          
        }
      } else if (eventbtn_open === "btns_3_open") {

        zaba(3);
        if (dates.notToday(3)) {
          dates.jumpToNextDay(dates.date(), 4);
        } else {
          dates.jumpToToday();
          
        }
      } else if (eventbtn_open === "btns_4_open") {

        zaba(4);
        if (dates.notToday(4)) {
          dates.jumpToNextDay(dates.date(), 3);
        } else {
          dates.jumpToToday();
          

        }
      } else if (eventbtn_open === "btns_5_open") {

        zaba(5);
        if (dates.notToday(5)) {
          dates.jumpToNextDay(dates.date(), 2);
        } else {
          dates.jumpToToday();
          
        }
      } else if (eventbtn_open === "btns_6_open") {

        zaba(6);
        if (dates.notToday(6)) {
          dates.jumpToNextDay(dates.date(), 1);
        } else {
          dates.jumpToToday();
          
        }
      } else if (eventbtn_open === "btns_7_open") {

        zaba(0);
        if (dates.notToday(7)) {
          dates.jumpToNextDay(dates.date(), 0);
        } else {
          dates.jumpToToday();
          
        }
      } else {
        return;
      }

      var numberOpen = event.target.id.slice(5, 6);
      weekArray[dayIndex].createDayCard(numberOpen);
      view.calculateProgress();

    } else if (event.target.id.includes("close-day")) {
      dayIndex = weekArray.findIndex(function (element) {
        return element.a === day_name;
      });
      weekArray[dayIndex].updateDay();
      todos.countWeeklyTodos();
      view.displayWelcome();
      view.undisplayDay();
      view.todoListRemove();
      view.enableAdd();
      view.enableOpen();
      view.clearProgress();

    } else if (event.target.id.includes("close-form")) {
      view.displayWelcome();
      view.enableAdd();
      view.enableOpen();
      view.undisplayForm();
      view.addFilter();
    } else if (event.target.id.includes("delete_todo_form")) {
      var allTodos = document.getElementsByName("todoscb");
      for (var i = 0, length = allTodos.length; i < length; i++) {
        if (allTodos[i].checked) {
          allTodos[i].nextSibling.remove();
          allTodos[i].nextSibling.remove();
          allTodos[i].nextSibling.remove();
          allTodos[i].remove();
          i--;
        }
      }
    } else if (event.target.id.includes("delete_output")) {
      var allTodos = document.getElementsByName("todoscb");
      for (var i = 0, length = allTodos.length; i < length; i++) {
        if (allTodos[i].checked) {
          allTodos[i].nextSibling.remove();
          allTodos[i].nextSibling.remove();
          allTodos[i].nextSibling.remove();
          allTodos[i].remove();
          i--;
        }
        view.calculateProgress();
      }
    } else if (event.target.id.includes("completed")) {
      var allTodos = document.getElementsByName("todoscb");
      for (var i = 0, length = allTodos.length; i < length; i++) {
        if (allTodos[i].checked) {
          allTodos[i].nextSibling.style.textDecoration = "line-through";
          allTodos[i].nextSibling.style.color = "grey";
          allTodos[i].checked = false;
          allTodos[i].nextSibling.nextSibling.style.display = "inline-block";
        }
      }
      view.calculateProgress();
    } else if (event.target.id.includes("enter")) {
      if (todos.inputLength(todos.input_todo_form()) > 0) {
        todos.createListForm();
      }
    } else if (event.target.id.includes("enter")) {
      if (todos.inputLength(todos.input_todo_form()) > 0) {
        todos.createListForm();
      }
    } else if (event.target.id.includes("add")) {
      if (todos.inputLength(todos.input_todo_day()) > 0) {
        todos.createListDay();
        view.calculateProgress();
      }
    }
  },
  false
);

document.addEventListener(
  "keypress",
  function (event) {
    if (event.target.id.includes("input_list")) {
      if (
        todos.inputLength(todos.input_todo_day()) > 0 &&
        event.keyCode === 13
      ) {
        todos.createListForm();
        view.calculateProgress();
      }
    }
  },
  false
);

window.onload = function () {
  geoFindMe();
  dates.nowTime();
  dates.orderDays();
  todos.countWeeklyTodos();
};