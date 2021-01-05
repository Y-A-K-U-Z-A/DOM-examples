function subtract() {
    let firstNumber = document.getElementById('firstNumber');
    let secondNumber = document.getElementById('secondNumber');
    let output = document.getElementById('result');

    output.innerHTML = Number(firstNumber.value) - Number(secondNumber.value);

}