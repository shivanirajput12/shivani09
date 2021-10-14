var MainTodoContainer = document.getElementById('todos');
var input = document.querySelector('.todo-input');

var addingButton = document.querySelector('.add-item');


addingButton.addEventListener('click', function(e) {
    if (input.value.trim()) {
        var ulTag = document.createElement('ul');
        ulTag.classList.add('todo-list-container');


        var todoList = document.createElement('div');
        todoList.classList.add('todo-list');


        var liTag = document.createElement('li');
        liTag.innerHTML = input.value;
        liTag.classList.add('todo-item');

        var buttonDiv = document.createElement('div');
        buttonDiv.classList.add('button');

        var completedButton = document.createElement('button');
        completedButton.classList.add('completed');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';

        var editButton = document.createElement('button');
        editButton.classList.add('edited');
        editButton.innerHTML = '<i class="fas fa-edit"></i>';
        editButton.onclick = function() {
            editWorking(liTag);

        }

        var deleteButton = document.createElement('button');
        deleteButton.classList.add('deleted');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';


        ulTag.appendChild(todoList);
        todoList.appendChild(liTag);
        todoList.appendChild(buttonDiv);
        buttonDiv.appendChild(completedButton);
        buttonDiv.appendChild(editButton);
        buttonDiv.appendChild(deleteButton);


        MainTodoContainer.appendChild(ulTag);

        todoList.addEventListener('click', function(e) {
            var items = e.target;
            if (items.classList[0] === 'completed') {
                var todo = items.parentElement;
                var todo2 = todo.parentElement;
                todo2.classList.add('line-through');
            } else if (items.classList[0] === 'deleted') {
                var todo = items.parentElement;
                var todo2 = todo.parentElement;
                var todo3 = todo2.parentElement;
                todo3.classList.add('fall');

                todo3.addEventListener('transitionend', function() {
                    todo3.remove();
                });
            }
        });
        input.value = '';

    } else if (input.value === '') { alert("please fill the input") }

});

function editWorking(e) {
    var editValue = prompt('edit the selected items:', e.firstChild.nodeValue);
    e.firstChild.nodeValue = editValue;
}