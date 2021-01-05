function solve() {
    let keys = document.getElementsByClassName('keys')[0];
    let clearBtn = document.getElementsByClassName('clear')[0];

    let expressionOutput = document.getElementById('expressionOutput');
    let resultOutput = document.getElementById('resultOutput');


    let command = '';

    clearBtn.addEventListener('click', () => {
        console.log(command);
        command = '';
        expressionOutput.innerHTML = '';
        resultOutput.innerHTML = '';
        console.log('Clicked Clear (C)')
    });

    keys.addEventListener('click', (e) => {
        let element = e.target.value;
        

        if (element !== '='){
            expressionOutput.innerHTML += element;
            command += element;

        }else {
            expressionOutput.innerHTML = '' ;      

            let findSum = function(array1){
                console.log();
                array = splitArray(array1);

                function splitArray(array){
                    let operators = array.split(/\d+/).filter(x => x !== '');
                    let nums = array.split(/([\+,\-,\.,\*,\/])/).filter(x => !x.match(/([\+,\-,\.,\*,\/])/));
                    let arr = [];
                    while(nums.length > 0 || operators.length > 0){
                        arr.push(nums.shift());
                        arr.push(operators.shift());
                    }
                    console.log('splitted ' + arr.join('  -  '));
                    arr.pop();
                    return arr;
                }

                if (array.length > 2){
                let numbers = [];
                let operators = [];
               
                for(let el of array){
                    if (el.match(/[0-9]+/)){
                        numbers.push(el);
                    }else {
                        operators.push(el);
                    }
                }
                console.log();
                let sum = 0;
                for (let i = 0; i < array.length; i++) {
                    let fNum ;
                     let sNum = Number(numbers.shift());
                    let op = operators.shift();

                    if (i === 0){
                        fNum =  Number(numbers.shift());
                    }else {
                        fNum = Number(sum);
                    }
                    switch(op){
                        case '+':
                            sum += Number(fNum) + Number(sNum);
                             break;
                        case '-': 
                            sum += Number(fNum) -  Number(sNum);
                        break;
                        case '*':
                            sum += Number(fNum) * Number(sNum);
                             break;
                        case '/': 
                            sum += Number(fNum) / Number(sNum);break;
                        case '.': 
                            sum = sum + '.'+Number(sNum);
                        break;
                    }
                }
                
                return sum.toString();
            }else {
                return 'NaN';
            }
                
            }
            resultOutput.innerHTML = findSum(command);
            command = '';
        }

        console.log(command);
    });

}