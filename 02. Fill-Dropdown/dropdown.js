function addItem() {
    let itemText = document.getElementById('newItemText');
    let itemValue = document.getElementById('newItemValue');
    let select = document.getElementById('menu');

    let option = `<option value = '${itemText.value}'>${itemValue.value}</option>`;

    select.insertAdjacentHTML('beforeend', option);
    
    itemText.value = '';
    itemValue.value = '';
}