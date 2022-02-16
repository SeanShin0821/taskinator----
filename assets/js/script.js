var formEl = document.querySelector("#task-form"); 
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").Value;
    var taskTypeInput = document.querySelector("select[name='task-type']").Value;

    var taskDataObj = {
        name: taskNameInput, 
        type: taskTypeInput
    }; 

    // check if input values are empty strings
if (!taskNameInput || !taskTypeInput) {
    alert("You need to fill out the task form!");
    return false;
  }
  formEl.reset();


    //send it as an argument to createTaskEl 
    createTaskEl(taskDataObj);
    
    var createTaskEl = function(taskDataObj){
        //create list item 
        var listItemEl = document.createElement("li");
        listItemEl.className = "task-item"; 

        //add task id as a custorm attribute 
        listItemEl.setAttribute("data-task-id", taskIdCounter);

        var taskInfoEl = document.createElement("div");
        taskInfoEl.className = "task-info";
        taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
        listItemEl.appendChild(taskInfoEl);

        tasksToDoEl.appendChild(listItemEl);

        //increase task counter for next unique id 
        tasskIdCounter++; 
    }; 

    //create list item 
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";


  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);

  // add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", taskFormHandler);
