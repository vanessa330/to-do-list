// Variable

const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");

// Event Listener for Add Button

addTask.addEventListener("click", function() {

    let taskItem = document.createElement("div");
    taskItem.classList.add("task-item");

    let li = document.createElement("li");
    li.innerText = `${inputTask.value}`;
    taskItem.append(li); // String Obj

    let checkButton = document.createElement("button");
    checkButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
    checkButton.classList.add("checkTask");
    taskItem.appendChild(checkButton); // Node Obj

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    deleteButton.classList.add("deleteTask");
    taskItem.appendChild(deleteButton);


    if(inputTask.value === "") {
        alert("Please Enter a Task");
    } else {
        taskContainer.appendChild(taskItem);
    }

    checkButton.addEventListener("click", function() {

        checkButton.parentElement.style.textDecoration = 
        "line-through";
    });

    deleteButton.addEventListener("click", function(e) {

        let target = e.target;
        // trash bin        .div
        target.parentElement.parentElement.remove();
    });
});