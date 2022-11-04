// Variable

const inputArea = document.getElementById("input-area");
const addBtn = document.getElementById("add-btn");
const taskContainer = document.getElementById("task-container")

// Event Listener for Add Button

addBtn.addEventListener("click", function() {

    let taskItem = document.createElement("div");
    taskItem.classList.add("task-item");

    let li = document.createElement("li");
    li.innerText = `${inputArea.value}`;
    taskItem.append(li);

    let checkBtn = document.createElement("button");
    checkBtn.classList.add("check-btn");
    checkBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    taskItem.appendChild(checkBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    taskItem.appendChild(deleteBtn);

    if (inputArea.value === "") {
        alert("Please input a task!")
    } else {
        taskContainer.appendChild(taskItem);   
    };

    checkBtn.addEventListener("click", function() {
       
       checkBtn.parentElement.style.textDecoration = 
       "line-through";
    });

    deleteBtn.addEventListener("click", function() {
        
        deleteBtn.parentElement.remove();
    });
});
