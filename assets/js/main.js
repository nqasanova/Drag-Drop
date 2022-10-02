let items = document.querySelectorAll('.item');

for (let item of items) {
    item.ondragstart = function(e) {
        e.dataTransfer.setData('param', this.id);
    }
}

let dropArea = document.querySelector('#DropArea');

dropArea.ondragover = function(e) {
    e.preventDefault();
}

dropArea.ondrop = function(e) {
    let id = e.dataTransfer.getData('param');
    let newItem = document.getElementById(id);
    dropArea.appendChild(newItem);
}

let dragArea = document.querySelector('#DragArea');

dragArea.ondragover = function(e) {
    e.preventDefault();
}

dragArea.ondrop = function(e) {
    let id = e.dataTransfer.getData('param');
    let newItem = document.getElementById(id);
    dragArea.appendChild(newItem);
}