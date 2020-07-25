var list = document.getElementById("list");

function addTodo() {
    var todoItem = document.getElementById("todo-item")
    // Create List
    var Li = document.createElement('li');
    var textLi = document.createTextNode(todoItem.value)
    Li.appendChild(textLi)
    
    


    // Create delete btn
    var rmBtn = document.createElement("button")
    var rmBtnValue = document.createTextNode("Delete")
    rmBtn.appendChild(rmBtnValue)
    Li.appendChild(rmBtn)
    rmBtn.setAttribute("onClick","deleteitem(this)")

    //  Create Added Function
    var updateBtn = document.createElement("button") 
    var textupdateBtn = document.createTextNode("Added")
    updateBtn.appendChild(textupdateBtn)
    Li.appendChild(updateBtn)
    updateBtn.setAttribute("onClick","update(this)")

    
    list.appendChild(Li)
    todoItem.value = ""
    console.log(updateBtn)
     
}

// Delete function
function deleteitem(e)  {
    e.parentNode.remove()
}

// update Function
function update(e) {
    var val = prompt("Enter Update Value",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val;

}


// Delete All Function
function deleteall() {
    list.remove()
}