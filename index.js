var containerEl = document.querySelector(".container")
var currentDayEl = document.getElementById('currentDay')
var myText = document.querySelectorAll("eventCol")

let date = new Date();
currentDayEl.innerHTML = moment(date).format('lll')

myText.addEventListener("click", function() {

});


saveBtn.addEventListener("click", function() {
    
});
