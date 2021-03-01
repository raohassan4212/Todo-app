var list = document.getElementById("list");


firebase.database().ref('todos').on('child_added',(data) => {
    // Create List
    var Li = document.createElement('li');
    var textLi = document.createTextNode(data.val().value)
    Li.appendChild(textLi)
    
    


    // Create delete btn
    var rmBtn = document.createElement("button")
    var rmBtnValue = document.createTextNode("Delete")
    rmBtn.appendChild(rmBtnValue)
    rmBtn.setAttribute('id',data.val().key)
    Li.appendChild(rmBtn)
    rmBtn.setAttribute("onClick","deleteitem(this)")

    //  Create Added Function
    var updateBtn = document.createElement("button") 
    var textupdateBtn = document.createTextNode("Added")
    updateBtn.appendChild(textupdateBtn)
    updateBtn.setAttribute('id',data.val().key)
    Li.appendChild(updateBtn)
    updateBtn.setAttribute("onClick","update(this)")

    
    list.appendChild(Li)
})


function addTodo() {
    var todoItem = document.getElementById("todo-item");
    var db = firebase.database().ref('todos');

    var key = db.push().key;
    
    var todo = {
        value: todoItem.value,
        key: key
    }

    db.child(key).set(todo);


    todoItem.value = ""
     
}

// Delete function
function deleteitem(e)  {
    firebase.database().ref('todos').child(e.id).remove();
    e.parentNode.remove()
}

// update Function
function update(e) {
    var val = prompt("Enter Update Value",e.parentNode.firstChild.nodeValue);
    var editObj = {
        value: val,
        key: e.id
    }



    firebase.database().ref('todos').child(e.id).set(editObj);
    e.parentNode.firstChild.nodeValue = val;

}


// Delete All Function
function deleteall() {
    firebase.database().ref('todos').remove()
    list.innerHTML = ""
}