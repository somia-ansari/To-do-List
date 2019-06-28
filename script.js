function makeList() {
    var list = document.createElement("li");
    var myTask = document.querySelector('input').value;
    var whatToDo = document.createTextNode(myTask);
    list.appendChild(whatToDo);
    var element = document.querySelector("ol");
    element.appendChild(list);
}