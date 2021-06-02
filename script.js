function add(a, b){
    return a + b;
};

function sub(a, b){
    return a - b;
};

function multiply(a, b){
    return a * b;
};

function divide(a, b){
    return a / b;
};

function operate(number1, operator, number2){
    switch(operator){
        case '+':
            return add(number1, number2);
            break;
        case '-':
            return sub(number1, number2);
            break;
        case '*':
            return multiply(number1, number2);
            break;
        case '/':
            return divide(number1, number2);
            break;
        default:
            alert(`ERROR: [${operator}] Invalid operator!`)
    }
}