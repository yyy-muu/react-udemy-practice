const onClickAdd = () => {
  const inputText = document.getElementById("addText").value;
  document.getElementById("addText").value = "";
  createIncompleteList(inputText);
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const createIncompleteList = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = text;

  const completeBtn = document.createElement("button");
  completeBtn.innerText = "完了";
  completeBtn.addEventListener("click", () => {
    deleteFromIncompleteList(completeBtn.parentNode);

    const addTarget = completeBtn.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;

    const li = document.createElement("li");
    li.innerText = text;

    const backBtn = document.createElement("button");
    backBtn.innerText = "リストに戻す";

    backBtn.addEventListener("click", () => {
      const deleteTarget = backBtn.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      const text = backBtn.parentNode.firstElementChild.innerText;
      createIncompleteList(text)
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backBtn);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除";
  deleteBtn.addEventListener("click", () => {
    deleteFromIncompleteList(deleteBtn.parentNode);
  });

  div.appendChild(li);
  div.appendChild(completeBtn);
  div.appendChild(deleteBtn);

  document.getElementById("incomplete-list").appendChild(div);
};

document.getElementById("addBtn").addEventListener("click", () => onClickAdd());
