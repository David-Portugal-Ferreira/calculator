let number1;
let operator;
let number2;

function operate(number_1, operator, number_2) {
    let result;
    switch (operator) {
        case '+':
            result = add(number_1, number_2);
            console.log(result);
            break;
        case '-':
            result = substract(number_1, number_2);
            console.log(result);
            break;
        case '*':
            result = multiply(number_1, number_2);
            console.log(result);
            break;
        case '/':
            result = divide(number_1, number_2);
            console.log(result);
            break;
        default:
            console.log('UNKNOW OPERATION')
    }
}

function add(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) return "Can't divide by 0";
    return +(a / b).toFixed(5);
}