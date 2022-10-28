document.querySelector("#push").onclick = function () {
  if (document.querySelector("#addTask input").value.length == 0) {
    alert("Please add a task!");
  } else {
    document.querySelector("#allTasks").innerHTML += `
        <div class="task">
          <span id="taskname">
            ${document.querySelector("#addTask input").value}
         </span>
          <button class="delete">Delete</button>
        </div>
    `;

    let current_tasks = document.querySelectorAll(".delete");
    for(let i = 0; i < current_tasks.length; i++) {
        current_tasks[i].onclick = function() {
            this.parentNode.remove();
        }
    }
  }
};
