function add(a, b){
    return (a + b).toFixed(3);
};

function sub(a, b){
    return (a - b).toFixed(3);
};

function multiply(a, b){
    return (a * b).toFixed(3);
};

function divide(a, b){
    return (a / b).toFixed(3);
};

function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }
  function fibonacci(number){
    let n1 = 0, n2 = 1, nextTerm;
    for (let i = 1; i <= number; i++) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return n2;
  }

function operate(number1, operator, number2 = 0){
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
        case 'X!':
            return factorialize(number1);
            break;
        case 'Fib':
            return fibonacci(number1);
            break;
        default:
            alert(`ERROR: [${operator}] Invalid operator!`)
    }
}

const buttons = document.querySelectorAll('button');
const para = document.querySelector('#para');
let displayContent;
let chosenOperator;
buttons.forEach((button) =>{
    button.addEventListener('click', () =>{
            if (button.textContent === '+'){
                displayContent = Number(para.textContent);
                chosenOperator = button.textContent;
                para.textContent = '';
                return;
            }
            else if (button.textContent === '-'){
                displayContent = Number(para.textContent);
                chosenOperator = button.textContent;
                para.textContent = '';
                return;
            }
            else if (button.textContent === '*'){
                displayContent = Number(para.textContent);
                chosenOperator = button.textContent;
                para.textContent = '';
                return;
            }
            else if (button.textContent === '/'){
                displayContent = Number(para.textContent);
                chosenOperator = button.textContent;
                para.textContent = '';
                return;
            }
            else if (button.textContent === 'Fib'){
                chosenOperator = button.textContent;
                displayContent = Number(para.textContent);
                para.textContent = operate(displayContent, chosenOperator);
                return;
            }
            else if (button.textContent === 'X!'){
                chosenOperator = button.textContent;
                displayContent = Number(para.textContent);
                para.textContent = operate(displayContent, chosenOperator);
                return;
            }
            else if (button.textContent === 'C'){
                displayContent = 0;
                para.textContent = '';
                chosenOperator = '';
                return;
            }
            else if (button.textContent === '='){
                let secondNumber = Number(para.textContent);
                para.textContent = operate(displayContent, chosenOperator, secondNumber);
                return;
            }
                para.textContent += button.textContent;
    })
})
