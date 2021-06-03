function add(a, b){
    return Math.round((a + b)*1000)/1000;
};

function sub(a, b){
    return Math.round((a - b)*1000)/1000;
};

function multiply(a, b){
    return Math.round((a * b)*1000)/1000;
};

function divide(a, b){
    if(b === 0){
        return 'Stop right there criminal!';
    }
    return Math.round((a / b)*1000)/1000;
};
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
let itIsTheResult = 0;
let isSecondNumber = 0;
buttons.forEach((button) =>{
    button.addEventListener('click', () =>{
        if(itIsTheResult === 1){
            displayContent = Number(para.textContent);
            para.textContent = '';
            para.textContent = button.textContent;
            itIsTheResult = 0;
            return;
        }
        else if (isSecondNumber === 1){
            para.textContent = '';
            isSecondNumber = 0;
        }
            if (button.textContent === '+'){
                displayContent = Number(para.textContent);
                chosenOperator = button.textContent;
                para.textContent += ' ' + button.textContent;
                isSecondNumber = 1;
                return;
            }
            else if (button.textContent === '-'){
                displayContent = Number(para.textContent);
                chosenOperator = button.textContent;
                para.textContent += ' ' + button.textContent;
                isSecondNumber = 1;
                return;
            }
            else if (button.textContent === '*'){
                displayContent = Number(para.textContent);
                chosenOperator = button.textContent;
                para.textContent += ' ' + button.textContent;
                isSecondNumber = 1;
                return;
            }
            else if (button.textContent === '/'){
                displayContent = Number(para.textContent);
                chosenOperator = button.textContent;
                para.textContent += ' ' + button.textContent;
                isSecondNumber = 1;
                return;
            }
            else if (button.textContent === 'Fib'){
                chosenOperator = button.textContent;
                displayContent = Number(para.textContent);
                para.textContent = operate(displayContent, chosenOperator);
                return;
            }
            else if (button.textContent === 'U'){
                let tempPara = para.textContent;
                para.textContent = '';
                for(i = 0; i < tempPara.length - 1; i++){
                    para.textContent += tempPara[i];
                }
                return;
            }
            else if (button.textContent === 'C'){
                displayContent = 0;
                para.textContent = '';
                chosenOperator = '';
                return;
            }
            else if (button.textContent === '='){
                itIsTheResult = 1;
                let secondNumber = Number(para.textContent);
                para.textContent = operate(displayContent, chosenOperator, secondNumber);
                return;
            }
                else{
                    return  para.textContent += button.textContent;
                }
                
    })
})
