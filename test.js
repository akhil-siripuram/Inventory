let container = document.getElementById("container");
console.log(container);
let items = [];
btn = document.getElementById("btn");
btn.addEventListener("click", addItem);
let clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", clearItems);
let RmvBtn = document.getElementById("RmvBtn");
RmvBtn.addEventListener("click", removeItem);



function addItem() {
  if (!items[0]) {
    let itemList = document.createElement("ul");
    itemList.id = "itemList";
    itemList.innerText = "List of items:";
    itemList.style.paddingBottom = "10px";
    container.appendChild(itemList);
}
    let inputField = document.getElementById("txtFld");
    let itemList = document.getElementById("itemList");
    items.push(inputField.value);
    let li = document.createElement("li");
    li.innerText = inputField.value;
    itemList.appendChild(li);
    inputField.value = "";
}
function removeItem() {
    let itemList = document.getElementById("itemList");
    itemList.removeChild(itemList.lastChild);
    items.pop();
}
function clearItems() {
    let list = document.querySelector("ul");
    list.innerHTML = "";
    items = [];
    container.removeChild(itemList);
}