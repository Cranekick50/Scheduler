var containerEl = document.querySelector(".container")
var currentDayEl = document.getElementById('currentDay')
var myText = document.querySelector("eventCol")
var saveEl = document.querySelector("saveBtn")


let date = new Date();
currentDayEl.innerHTML = moment(date).format('lll')






// $(".saveBtn").button('toggle')
// $(".saveBtn").prepend('<img class="glyphicon glyphicon-plus"/>')
// saveBtn.addEventListener("click", updateValue());
// function updateValue(e) {
//     log.textContent = e.target.value;
// }
