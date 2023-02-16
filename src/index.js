const addTask = () => {
    const inputText = document.getElementById("add_text").value;
    document.getElementById("add_text").value = ""; //初期化

    const div = document.createElement("div");
    div.className = "list_row";

    const li = document.createElement("li");
    li.innerText = inputText;

    const button_complete = document.createElement("button");
    button_complete.addEventListener("click", () => completeTask(button_complete.parentNode));
    const button_delete = document.createElement("button");
    button_delete.addEventListener("click", () => deleteTask(button_delete.parentNode));

    button_complete.innerText = "完了";
    button_delete.innerText = "削除";

    div.appendChild(li);
    div.appendChild(button_complete);
    div.appendChild(button_delete);
    document.getElementById("incomplete_list").appendChild(div);
};

const completeTask = (completeTarget) => {
    deleteTask(completeTarget);
    const li_text = completeTarget.firstElementChild.innerText;
    completeTarget.textContent = null;

    const li = document.createElement("li");
    li.innerText = li_text;

    const button_undo = document.createElement("button");
    button_undo.innerText = "戻す";
    button_undo.addEventListener("click",() => undoTask(button_undo.parentNode));
    
    completeTarget.appendChild(li);
    completeTarget.appendChild(button_undo);

    document.getElementById("complete_list").appendChild(completeTarget);
};

const deleteTask = (deleteTarget) => {
    document.getElementById("incomplete_list").removeChild(deleteTarget);
};

const undoTask = (undoTarget) => {
    document.getElementById("complete_list").removeChild(undoTarget);

    const li_text = undoTarget.firstElementChild.innerText;
    undoTarget.textContent = null;

    const li = document.createElement("li");
    li.innerText = li_text;

    const button_complete = document.createElement("button");
    const button_delete = document.createElement("button");
    button_complete.addEventListener("click", () => completeTask(button_complete.parentNode));
    button_delete.addEventListener("click", () => deleteTask(button_delete.parentNode));

    button_complete.innerText = "完了";
    button_delete.innerText = "削除";

    undoTarget.appendChild(li);
    undoTarget.appendChild(button_complete);
    undoTarget.appendChild(button_delete);
    document.getElementById("incomplete_list").appendChild(undoTarget);
};

document
    .getElementById("add_button")
    .addEventListener("click", () => addTask());