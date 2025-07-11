const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container")

function addTask(){
    if(inputBox.value.trim() === '') alert("You must write something!");
    else{
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = "";
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    saveData();
    inputBox.focus();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    };
    saveData();
}, false);

inputBox.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        addTask();
    }
});

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

function clearAll() {
  listContainer.innerHTML = "";
  saveData();
}
showTask();
