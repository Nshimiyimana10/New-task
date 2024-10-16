const input = document.getElementById("text-value");
const button = document.getElementById("task-btn");
const listItems = document.getElementById("list-items");
const inputError = document.getElementById("input_error");

button.addEventListener("click", addTask);

function addTask(){
 const inputValue = input.value.trim();
 const li = document.createElement("li");
 li.textContent = inputValue;
 listItems.appendChild(li);
 li.classList.add("list");
 const removeBtn = document.createElement("button");
 removeBtn.classList.add("remove-btn");
 removeBtn.textContent = "remove";
 li.appendChild(removeBtn);


}