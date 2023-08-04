let passengerCount = 0;
// create a variable that grab the count-el element from the html dom;
let countEl = document.getElementById("count-el");
//create another variable that grab the save-el element from the html dom;
let saveEl = document.getElementById("save-el");

//create an increement function to invoke your first dom

function increement() {
  // increemented code to be invoke;
  passengerCount = passengerCount + 1;
  countEl.textContent = passengerCount;
}

function save(){
  // code to be executed or invoke
  let sumTotal = " - " + passengerCount 
  saveEl.textContent += " " + sumTotal; 
  // let your count start from 0 from each count
  passengerCount = 0;
  countEl.textContent = passengerCount;
}