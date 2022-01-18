var currentNumberValue = document.getElementById("quantidade")
var currentNumber = 0;
function decrement (){
  if (currentNumber>0){
    currentNumber = currentNumber - 1;
    currentNumberValue.innerHTML = currentNumber;
  }
}
function increment (){
    currentNumber = currentNumber + 1;
    currentNumberValue.innerHTML = currentNumber;
}