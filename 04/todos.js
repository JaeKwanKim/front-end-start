var line = document.getElementById('todoLine');
var checkbox = document.getElementById('checkbox');
var deleteCheck = document.getElementById('delete');
var todoText = document.getElementById('text');
var todoInput = document.getElementById('todotext');

var arr = [];

//function getDom(id) {
//    return document.getElementById(id);
//}

function pushText(textLine, ischecked) {
    var pushData = {text:textLine, is:ischecked};
    arr.push(pushData);
}

todoInput.addEventListener("keyup", function(event) {
    if(event.keyCode == 13) {
        var newTodo = todoInput.value;
        pushText(newTodo, false);
        line.innerHTML += '<li>\
            <button class="delete">×</button>\
        <input type="checkbox" class="toggle-checked">\
            <span class="text">' + newTodo + '</span>\
            </li>';
        todoInput.value = "";
    }
});


