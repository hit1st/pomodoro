let workTime = 1;
let breakTime = 1;
let numInterval = 1;
let currentInterval = numInterval;
let run = false;
let d1 = new Date();
d1.setMinutes(workTime, 0);
console.log("d1.setMinutes(workTime, 0) = " + d1.setMinutes(workTime, 0));
let d2 = new Date();
d2.setMinutes(breakTime, 0);
console.log("d2.setMinutes(workTime, 0) = " + d2.setMinutes(breakTime, 0));
let t = 0;
let v = 0;
//const alarm1 = new Audio('audio_file.mp3');

function startWorkTime () {
  let m = d1.getMinutes();
  let s = d1.getSeconds();
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  $('<div class = "row" id = "workRow"><h1 id = "work">' + m + ':' + s + '</h1></div>' ).replaceAll("#workRow");
  d1.setSeconds(d1.getSeconds() - 1);
  if ( m == "0" + 0) { console.log("m is working");}
  if ( s == "0" + 0) { console.log("s is working");}
  if ( m == "0" + 0 && s == "0" + 0 ) {
    console.log("I am in");
    // alarm1.play();
    d1.setMinutes(workTime, 0);
    clearTimeout(t);
    v = setTimeout(startBreakTime, 1000);
  } else {
    t = setTimeout(startWorkTime, 1000);
    console.log(t);
    console.log("type of m = " + typeof(m));
    console.log("m = " + m);
    console.log("m = " + m + 1);
    console.log("type of s = " + typeof(s));
    console.log("s = " + s);
    console.log("s = " + s + 1);
  }
}

function startBreakTime () {
  let m = d2.getMinutes();
  let s = d2.getSeconds();
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  $('<div class = "row" id = "breakRow"><h2 id = "break">' + m + ':' + s + '</h2></div>' ).replaceAll("#breakRow");
  d2.setSeconds(d2.getSeconds() - 1);
  if ( m == "0" + 0 && s == "0" + 0 ) {
    // alarm1.play();
    d2.setMinutes(breakTime, 0);
    clearTimeout(v);
    t = setTimeout(startWorkTime, 1000);
  } else {
    v = setTimeout(startBreakTime, 1000);
  }
}

function workTimeDisplay (displayId, displayTime) {
  if (!run) { 
    switch (displayId) {
      case "work":
        $('<h1 id = "work">' + workTime + '</h1>' ).replaceAll("#work");
        break;
      case "break":
        $('<h2 id = "break">' + breakTime + '</h2>').replaceAll("#break");
        break;
      case "interval":
        $('<h3 id = "interval">' + numInterval + '</h3>').replaceAll("#interval");
    }
  } else {
    
  }
}

function incOne(buttonId) {
  switch (buttonId) {
    case "w+":
      if (workTime < 60) { workTime++; }
      workTimeDisplay("work", workTime);
      break;
    case "w-":
      if (workTime > 1) { workTime--; }
      workTimeDisplay("work", workTime);
      break;
    case "b+":
      if (breakTime < 15) { breakTime++; }
      workTimeDisplay("break", breakTime);
      break;
    case"b-":
      if (breakTime > 1) { breakTime--; }
      workTimeDisplay("break", breakTime);
      break;
    case "i+":
      if (numInterval < 10) { numInterval++; }
      workTimeDisplay("interval", numInterval);
      break;
    case"i-":
      if (numInterval > 1) { numInterval--; }
      workTimeDisplay("interval", numInterval);
      break;
  }
}

function runTimer(buttonId) {
  let myButton = document.getElementById(buttonId);
  $('<div class = "row" id = "intervalRow"><h3 id = "break">' + currentInterval + '</h3></div>' ).replaceAll("#intervalRow");
  $('<div class = "row" id = "workRow"><h1 id = "work">' + workTime + ':00' + '</h1></div>' ).replaceAll("#workRow");
  $('<div class = "row" id = "breakRow"><h2 id = "break">' + breakTime + ':00' + '</h2></div>' ).replaceAll("#breakRow");
  if (myButton.innerText === "start") {
    t = setTimeout(startWorkTime, 1000);
    myButton.innerText = "pause";
  } else {
    clearTimeout(t);
    myButton.innerText = "start";
  }
}

window.onload = function() {
  workTimeDisplay("work", workTime);
  workTimeDisplay("break", breakTime);
  workTimeDisplay("interval", numInterval);
};