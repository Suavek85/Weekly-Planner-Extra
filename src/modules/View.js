import {todos} from './Todos';

//VIEW OBJECT

var view = {
    addArray: Array.prototype.slice.call(document.querySelectorAll(".add")),
  
    submitArray: Array.prototype.slice.call(
      document.querySelectorAll(".submit-btn")
    ),
  
    openArray: Array.prototype.slice.call(document.querySelectorAll(".open")),
  
    todoListRemove: function() {
      var todolist = document.getElementById("todolist");
      todolist.remove();
    },
  
    disableAdd: function() {
      for (var i = 0; i < this.addArray.length; i++) {
        this.addArray[i].style.visibility = "hidden";
      }
    },
  
    disableOpen: function() {
      for (var i = 0; i < this.openArray.length; i++) {
        this.openArray[i].style.visibility = "hidden";
      }
    },
  
    enableAdd: function() {
      for (var i = 0; i < this.addArray.length; i++) {
        this.addArray[i].style.visibility = "visible";
      }
    },
  
    enableOpen: function() {
      for (var i = 0; i < this.openArray.length; i++) {
        this.openArray[i].style.visibility = "visible";
      }
    },
  
    displayForm: function() {
      document.getElementById("notes").value = "";
      document.getElementById("work").checked = true;
      document.getElementById("form-container").style.display = "flex";
      document.querySelector(".notes-box").style.display = "none";
      todos.ul_tasks().innerHTML = "";
    },
  
    clearTodo: function() {
      todos.ul_tasks().innerHTML = "";
    },
  
    undisplayForm: function() {
      for (var i = 0; i < this.submitArray.length; i++) {
        this.submitArray[i].style.display = "none";
        document.getElementById("form-container").style.display = "none";
      }
    },
  
    displaySubmit: function(el) {
      document.getElementById("submit_" + el).style.display = "block";
    },
  
    undisplayDay: function() {
      document.querySelector(".notes-box").style.display = "none";
      var closeSave = Array.prototype.slice.call(
        document.querySelectorAll(".close-save")
      );
  
      closeSave.forEach(element => {
        element.style.display = "none";
      });
  
      document.getElementById("close-day-1").style.display;
    },
  
    displayDay: function() {
      document.querySelector(".notes-box").style.display = "flex";
    },
  
    startFromToday: function(number) {
      document.getElementById("name" + number).innerHTML = "TODAY";
    },
  
    calculateProgress: function() {
      var allTodosOutput = Array.prototype.slice.call(
        document.getElementsByName("todoscb")
      );
  
      var todosCompletedCount = 0;
      var progressBar = document.getElementById("progressbar");
  
      for (var i = 0, length = allTodosOutput.length; i < length; i++) {
        if (
          allTodosOutput[i].nextSibling.style.textDecoration === "line-through"
        ) {
          var todosCompletedCount = todosCompletedCount + 1;
        }
      }
  
      var widthPercentage = Math.round(
        (todosCompletedCount / allTodosOutput.length) * 100
      );
  
      if (
        isNaN(widthPercentage) ||
        widthPercentage === 0 ||
        widthPercentage === undefined
      ) {
        progressBar.style.width = "100%";
        progressBar.innerHTML = "0% completed";
        progressBar.style.backgroundColor = "#A4A4A4";
      } else {
        progressBar.style.width = widthPercentage * 2.1;
        progressBar.style.backgroundColor = "orange";
        if (widthPercentage > 40) {
          progressBar.innerHTML = widthPercentage + "% done";
        } else {
          progressBar.innerHTML = widthPercentage + "%";
        }
      }
    },
  
    clearProgress: function() {
      var progressBar = document.getElementById("progressbar");
      progressBar.style.width = "100%";
      progressBar.innerHTML = "0% completed";
      progressBar.style.backgroundColor = "#A4A4A4";
    },
  
    undisplayWelcome: function() {
      var welcome = document.querySelector(".welcome");
      var quotes = document.querySelector(".quotes");
      welcome.style.display = "none";
      quotes.style.display = "none";
    },
  
    displayWelcome: function() {
      var welcome = document.querySelector(".welcome");
      var quotes = document.querySelector(".quotes");
      welcome.style.display = "block";
      quotes.style.display = "block";
    },
  
    removeFilter: function(num) {
      document
        .getElementById("box_image_" + num)
        .classList.remove("black_and_white");
    }
  };

  export {view};