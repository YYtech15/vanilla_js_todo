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

    const button_back = document.createElement("button");
    button_back.innerText = "戻す";
    
    completeTarget.appendChild(li);
    completeTarget.appendChild(button_back);

    document.getElementById("complete_list").appendChild(completeTarget);
};

const deleteTask = (deleteTarget) => {
    document.getElementById("incomplete_list").removeChild(deleteTarget);
};

document
    .getElementById("add_button")
    .addEventListener("click", () => addTask());