import {view} from './View';


const dates = {
    date: function() {
      return new Date();
    },
    today: function() {
      return this.shortToLong(this.date().toDateString());
    },
    hellotoday: function() {
      return "Today's " + this.today();
    },
    day: function() {
      return this.date().getDay();
    },
  
    nowHour: function() {
      return this.date().getHours();
    },
  
    welcomeMessage: function(el) {
      return (document.getElementById("welcoming").innerHTML = "Good " + el);
    },
  
    morQuote: function() {
      return (document.getElementById("quotes_text").innerHTML =
        "I opened two gifts this morning. They were my eyes.");
    },
  
    aftQuote: function() {
      return (document.getElementById("quotes_text").innerHTML =
        "Get busy living or get busy dying. - Stephen King");
    },
  
    eveQuote: function() {
      return (document.getElementById("quotes_text").innerHTML =
        "Eighty percent of success is showing up. – Woody Allen");
    },
  
    jumpToNextDay: function(date, numb) {
      var currentDate = this.shortToLong(
        new Date(
          +date + (7 - ((date.getDay() + numb) % 7)) * 86400000
        ).toDateString()
      );
      document.getElementById("background_text").innerHTML = currentDate;
    },
  
    jumpToToday: function() {
      document.getElementById("background_text").innerHTML = this.hellotoday();
    },
  
    notToday: function(dayNumber) {
      return (
        document.getElementById("btns_" + dayNumber + "_open").previousSibling
          .previousSibling.previousSibling.previousSibling.firstChild.firstChild
          .innerHTML !== "TODAY"
      );
    },
  
    shortToLong: function(el) {
      return el
        .replace(/Mon/g, "Monday,")
        .replace(/Tue/g, "Tuesday,")
        .replace(/Wed/g, "Wednesday,")
        .replace(/Thu/g, "Thursday,")
        .replace(/Fri/g, "Friday,")
        .replace(/Sat/g, "Saturday,")
        .replace(/Sun/g, "Sunday,")
        .replace(/Jan/g, "January")
        .replace(/Feb/g, "February")
        .replace(/Mar/g, "March")
        .replace(/Apr/g, "April")
        .replace(/Jun/g, "June")
        .replace(/Jul/g, "July")
        .replace(/Aug/g, "August")
        .replace(/Sep/g, "September")
        .replace(/Oct/g, "October")
        .replace(/Nov/g, "November")
        .replace(/Dec/g, "December")
        .replace(/2018/g, "")
        .replace(/2019/g, "");
    },
  
    nowTime: function() {
      if (this.nowHour() >= 5 && this.nowHour() <= 11) {
        this.welcomeMessage("morning.");
        this.morQuote();
        this.randomPicGen("mor_1", "mor_2");
      } else if (this.nowHour() >= 12 && this.nowHour() <= 17) {
        this.welcomeMessage("afternoon.");
        this.aftQuote();
        this.randomPicGen("after_1", "after_2");
      } else {
        this.welcomeMessage("evening.");
        this.eveQuote();
        this.randomPicGen("eve_1", "eve_2");
      }
    },
  
    orderDays: function() {
      var box1 = document.getElementById("box1");
      var box2 = document.getElementById("box2");
      var box3 = document.getElementById("box3");
      var box5 = document.getElementById("box5");
      var box6 = document.getElementById("box6");
      var box7 = document.getElementById("box7");
      if (this.day() === 1) {
        view.startFromToday(1);
      } else if (this.day() === 2) {
        box1.style.order = 8;
        view.startFromToday(2);
      } else if (this.day() === 3) {
        box1.style.order = 8;
        box2.style.order = 9;
        view.startFromToday(3);
      } else if (this.day() === 4) {
        box1.style.order = 8;
        box2.style.order = 9;
        box3.style.order = 10;
        view.startFromToday(4);
      } else if (this.day() === 5) {
        box5.style.order = -3;
        box6.style.order = -2;
        box7.style.order = -1;
        view.startFromToday(5);
      } else if (this.day() === 6) {
        box6.style.order = -2;
        box7.style.order = -1;
        view.startFromToday(6);
      } else if (this.day() === 0) {
        box7.style.order = -1;
        view.startFromToday(7);
      }
    },
  
    randomPicGen: function(pic1, pic2) {
      var randomPic = Math.floor(Math.random() * 2 + 1);
  
      if (randomPic === 1) {
        document.getElementById("main_pic").style.backgroundImage =
          "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(images/" +
          pic1 +
          ".jpg";
      } else {
        document.getElementById("main_pic").style.backgroundImage =
          "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(images/" +
          pic2 +
          ".jpg";
      }
    },
  
    addAttribute: function() {
      return event.target.getAttribute("day-name");
    }
  };

  export {dates};