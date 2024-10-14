const input = document.getElementById("text-value");
const button = document.getElementById("list-items");
const listItems = document.getElementById("list-items");
const inputError = document.getElementById("input_error");

button.addEventListener("click", addTask);

function addTask(){
 const inputValue = input.value.trim();
 input = "";
 console.log(inputValue);
}