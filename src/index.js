const addTask = () => {
    const inputText = document.getElementById("add_text").value;
    document.getElementById("add_text").value = ""; //初期化
    
    const div = document.createElement("div");
    div.className = "list_row";

    const li = document.createElement("li");
    li.innerText = inputText;

    const button_complete = document.createElement("button");
    const button_delete = document.createElement("button");
    button_complete.innerText="完了";
    button_delete.innerText="削除";

    div.appendChild(li);
    div.appendChild(button_complete);
    div.appendChild(button_delete);
    document.getElementById("incomplete_list").appendChild(div);
};

document
    .getElementById("add_button")
    .addEventListener("click", () => addTask());
