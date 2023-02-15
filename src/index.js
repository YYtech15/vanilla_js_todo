const addTask = () => {
    const inputText = document.getElementById("add_text").value;
    document.getElementById("add_text").value = ""; //初期化

    const div = document.createElement("div");
    div.className = "list_row";

    const li = document.createElement("li");
    li.innerText = inputText;

    const button_complete = document.createElement("button");
    button_complete.addEventListener("click", () => completeTask());
    const button_delete = document.createElement("button");
    button_delete.addEventListener("click", () => deleteTask(button_delete.parentNode));

    button_complete.innerText = "完了";
    button_delete.innerText = "削除";

    div.appendChild(li);
    div.appendChild(button_complete);
    div.appendChild(button_delete);
    document.getElementById("incomplete_list").appendChild(div);
};

const completeTask = () => {

};

const deleteTask = (deleteTarget) => {
    document.getElementById("incomplete_list").removeChild(deleteTarget);
};

document
    .getElementById("add_button")
    .addEventListener("click", () => addTask());