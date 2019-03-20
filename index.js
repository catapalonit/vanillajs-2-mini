
function addTodo(event){
    event.preventDefault();
    let newTodo = document.createElement("li");
    let item = document.getElementById("item").value;

    item = newTodo.innerText

    let button = document.createElement("button")
    button.innertext = "x";
    button.addEventListener("click", removeTodo);
    newTodo.append(button)

    let newTodo = document.querySelector("ul");
    newTodo.appendChild(item);

    let ul = document.querySelector("ul")
    
    ul.appendChild(newTodo);
}

document.querySelector("form").addEventListener("submit", addTodo);

function removeTodo(event){
    event.target.parentNode.remove()
}

function completeTodo(event){
    let value = event.target.getAttribute("aria-checked");
    if (value !== true){
        event.target.setAttribute("aria-checked", "True")
    } else (event.target.setAttribute("aria-checked", "False");
}