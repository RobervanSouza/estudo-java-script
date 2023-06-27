const addButton = document.getElementById('addButton');
const removeButton = document.getElementById('removeButton');
const list = document.getElementById('list');

let count = 3;

addButton.addEventListener('click', function() {
    count++;
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.innerText = 'Item ' + count;
    list.appendChild(listItem);
});

removeButton.addEventListener('click', function() {
    if (count > 0) {
        const lastItem2 = list.lastChild;
        list.removeChild(lastItem2);
        count--;
    }
});
