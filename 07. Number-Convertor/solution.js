function solve() {
    let x = document.getElementById('input');
    let menuOpt = document.getElementById('selectMenuTo');
    let output = document.getElementById('result');
        if (menuOpt.childElementCount < 2){
    let binaryOpt = document.createElement('option');
    binaryOpt.textContent = 'Binary';
    binaryOpt.value = 'binary';
    menuOpt.appendChild(binaryOpt);
        // hexadecimal
    let hexadecimalOpt = document.createElement('option');
    hexadecimalOpt.textContent = 'Hexadecimal';
    hexadecimalOpt.value = 'hexadecimal';
    menuOpt.appendChild(hexadecimalOpt);
    }
    let btn = document.getElementsByTagName('button')[0];

    x = x.value;
        if (menuOpt.value === 'binary'){
            let bin = 0;
            let rem, i = 1, step = 1;

         while (x != 0) {
            rem = x % 2;
            x = parseInt(x / 2);
            bin = bin + rem * i;
            i = i * 10;
        }
        output.value = bin;
        }else {
            output.value = (+x).toString(16)
        }

        // x.innerHTML = '';
    

    btn.addEventListener('click', solve);
        
    
}