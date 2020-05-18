var containerEl = document.querySelector(".container")
var currentDayEl = document.getElementById('currentDay')
var myText = document.querySelectorAll("eventCol")

var moment = require('moment-timezone');
moment().tz("America/Los_Angeles").format();

var myText = document.createElement("INPUT");
myText.setAttribute("type", "text");



