const taskInput = document.getElementById("task-input"),
addedTask = document.getElementById("added-task");

function addTask(){
    if(taskInput.value === ''){
        alert('You must write something!')
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = taskInput.value;
        addedTask.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    taskInput.value = '';

    saveData();
}


addedTask.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");

        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();

        saveData();
    }
}, false);




function saveData(){
    localStorage.setItem("data", addedTask.innerHTML);
}
function showData(){
    addedTask.innerHTML = localStorage.getItem("data");
}
showData();