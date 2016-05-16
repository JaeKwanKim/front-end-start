var todoInput = document.getElementById('todotext');

var arr = [];

function getDom(id) {
    return document.getElementById(id);
}

function pushText(textLine, ischecked) {
    var pushData = {text:textLine, is:ischecked};
    arr.push(pushData);
}

todoInput.addEventListener("keyup", function(event) {
    if(event.keyCode == 13) {
        var newTodo = todoInput.value;
        pushText(newTodo, false);
        getDom('todoLine').innerHTML += '<li>\
            <button class="delete" id="delete">×</button>\
        <input type="checkbox" class="toggle-checked" id="checkbox">\
            <span class="text">' + newTodo + '</span>\
            </li>';
        todoInput.value = "";
        getDom('delete').addEventListener('keyup', deleteFunction)
    }
});

var searchTo = function(arr, text) {
    var position = 0;
    arr.forEach(function(text) {
        if(arr['text'] == text){
            return position;
        } else position++;
    });
};

var deleteFunction = function(event) {
    console.log(event);
};


