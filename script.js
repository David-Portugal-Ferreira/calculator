let number1;
let operator;
let number2;
let input;
let isDisabled = true;

const displayResult = document.querySelector('.calculator-result');
const calculatorNumbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operations');
const equalSign = document.querySelector('.equal');
const acButton = document.querySelector('.ac');
const pointButton = document.querySelector('.point');


let arrNumbers = [...calculatorNumbers].map((button) => {
    button.addEventListener('click', () => {
        if (input === undefined) {
            input = button.innerHTML;
            if (input !== undefined) {
                displayResult.textContent = input;
            }
            return;
        }
        let arr = input.split('');
        if (arr.includes('.')) {
            disablePointButton();
        }
        input += button.innerHTML;
        if (input !== undefined) {
            displayResult.textContent = input;
        }
    })
});

let arrOperations = [...operations].map((operation) => {
    operation.addEventListener('click', () => {
        if (number1 === undefined) {
            number1 = +input;
            input = undefined;
        } else if (number2 === undefined && input !== undefined) {
            number2 = +input;
            input = undefined;
        }

        let canOperate = checkNumbersAndOperator();
        if (canOperate) operate(number1, operator, number2);
        operator = operation.innerHTML;
    });
});

equalSign.addEventListener('click', () => {
    if (number2 === undefined && input !== undefined) {
        number2 = +input;
        input = undefined;
    }
    let canOperate = checkNumbersAndOperator();
    if (canOperate) operate(number1, operator, number2);
})

acButton.addEventListener('click', () => {
    number1 = undefined;
    number2 = undefined;
    operator = undefined;
    input = undefined;
    displayResult.textContent = ' ';
});


function operate(number_1, operator, number_2) {
    let result;
    switch (operator) {
        case '+':
            result = add(number_1, number_2);
            displayResult.textContent = result;
            number1 = +result;
            operator = undefined;
            number2 = undefined;
            break;
        case '-':
            result = substract(number_1, number_2);
            displayResult.textContent = result;
            number1 = +result;
            operator = undefined;
            number2 = undefined;
            break;
        case '*':
            result = multiply(number_1, number_2);
            displayResult.textContent = result;
            number1 = +result;
            operator = undefined;
            number2 = undefined;
            break;
        case '/':
            result = divide(number_1, number_2);
            if(typeof result === 'string') {
                alert(result);
                number1 = undefined;
                number2 = undefined;
                input = undefined;
                displayResult.textContent = ' ';
                break;
            }
            displayResult.textContent = result;
            number1 = +result;
            operator = undefined;
            number2 = undefined;
            break;
        default:
            alert('UNKNOW OPERATION');
    }
}

function add(a, b) {
    let isFloat = checkIsFloat(a, b);
    if(isFloat) return (a + b).toFixed(5);
    return a + b;
}
function substract(a, b) {
    let isFloat = checkIsFloat(a, b);
    if(isFloat) return (a - b).toFixed(5);
    return a - b;
}
function multiply(a, b) {
    let isFloat = checkIsFloat(a, b);
    if(isFloat) return (a * b).toFixed(5);
    return a * b;
}
function divide(a, b) {
    if (b === 0) return "Can't divide by 0";
    let isFloat = checkIsFloat(a, b);
    if(isFloat) return (a / b).toFixed(5);
    return a / b;
}

function checkIsFloat(a, b) {
    if (a % 1 !== 0 && b % 1 !== 0 ) {
        return true;
    }
}

function checkNumbersAndOperator() {
    if (
        number1 !== undefined &&
        operator !== undefined &&
        number2 !== undefined
    ) {
        return true;
    } else {
        return false;
    }
}

function disablePointButton() {
    pointButton.disabled = !isDisabled;
    isDisabled = !isDisabled;
}