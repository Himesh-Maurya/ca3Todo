showtask();
let addtaskinput = document.getElementById("addtaskinput");
let addtaskbtn = document.getElementById("addtaskbtn");

addtaskbtn.addEventListener("click", function () {
  addtaskinputval = addtaskinput.value;
  if (addtaskinputval.trim() != 0) {
    let webtask = localStorage.getItem("localtask");
    if (webtask == null) {
      taskObj = [];
    } else {
      taskObj = JSON.parse(webtask);
    }
    taskObj.push({ task_name: addtaskinputval, completeStatus: false });
    // console.log(taskObj, 'Ashendra');
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    addtaskinput.value = "";
  }
  showtask();
});

// showtask
function showtask() {
  let webtask = localStorage.getItem("localtask");
  if (webtask == null) {
    taskObj = [];
  } else {
    taskObj = JSON.parse(webtask);
  }
  let html = "";
  let addedtasklist = document.getElementById("addedtasklist");
  taskObj.forEach((item, index) => {
    if (item.completeStatus == true) {
      taskCompleteValue = `<td class="completed">${item.task_name}</td>`;
    } else {
      taskCompleteValue = `<td>${item.task_name}</td>`;
    }
    html += `<tr>
                      <th scope="row">${index + 1}</th>
                      ${taskCompleteValue}
                      <td><button type="button" onclick="edittask(${index})" class="text-primary"><i class="fa fa-edit"></i>Edit</button></td>
                      <td><button type="button" onclick="completetask(${index})" class="text-success" id=${index}><i class="fa fa-check-square-o"></i>Complete</button></td>
                      <td><button type="button" onclick="deleteitem(${index})" class="text-danger"><i class="fa fa-trash"></i>Delete</button></td>
                  </tr>`;
  });
  addedtasklist.innerHTML = html;
}
