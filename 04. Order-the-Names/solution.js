function solve() {
    let input = document.getElementsByTagName('input')[0];
    let btn = document.getElementsByTagName('button')[0];

    let database = {};
    let index = 0;
    for (let i = 65; i <= 90; i++) {
        let letter = String.fromCharCode(i);
        database[letter] = index++;
    }

    btn.addEventListener('click', () => {
        let array = document.getElementsByTagName('ol')[0].children;
        
        let currentName = input.value.toString()[0].toUpperCase() + input.value.slice(1).toLowerCase();
        let capitalLetter = input.value[0];

        if (database[capitalLetter] != undefined){
        let index = database[capitalLetter];
        let currentEl = array[index];
        if (currentEl.innerHTML != ''){
            currentEl.innerHTML += ', ';
        }

        currentEl.innerHTML += currentName  ;
        }
        input.value = '';
    });

    input.value = '';
}