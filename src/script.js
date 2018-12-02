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
import * as Weather from './modules/Weather';



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
        
        Weather.updateWeatherCard(1);
        if (dates.notToday(1)) {
          dates.jumpToNextDay(dates.date(), 6);
        } else {
          dates.jumpToToday();
          
        }
      } else if (eventbtn_open === "btns_2_open") {
        
        Weather.updateWeatherCard(2);
        if (dates.notToday(2)) {
          dates.jumpToNextDay(dates.date(), 5);
        } else {
          dates.jumpToToday();
          
        }
      } else if (eventbtn_open === "btns_3_open") {
        
        Weather.updateWeatherCard(3);
        if (dates.notToday(3)) {
          dates.jumpToNextDay(dates.date(), 4);
        } else {
          dates.jumpToToday();
          
        }
      } else if (eventbtn_open === "btns_4_open") {
       
        Weather.updateWeatherCard(4);
        if (dates.notToday(4)) {
          dates.jumpToNextDay(dates.date(), 3);
        } else {
          dates.jumpToToday();
          

        }
      } else if (eventbtn_open === "btns_5_open") {
        
        Weather.updateWeatherCard(5);
        if (dates.notToday(5)) {
          dates.jumpToNextDay(dates.date(), 2);
        } else {
          dates.jumpToToday();
          
        }
      } else if (eventbtn_open === "btns_6_open") {
        
        Weather.updateWeatherCard(6);
        if (dates.notToday(6)) {
          dates.jumpToNextDay(dates.date(), 1);
        } else {
          dates.jumpToToday();
          
        }
      } else if (eventbtn_open === "btns_7_open") {
        
        Weather.updateWeatherCard(0);
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
  Weather.locationWeather();
  dates.nowTime();
  dates.orderDays();
  todos.countWeeklyTodos();
};