// Variables for calculations
const calculatorScreen = document.querySelector('.calculator-screen');
const keys = document.querySelector('.calculator-keys');
let firstOperand = '';
let secondOperand = '';
let operator = '';
let result = '';

// Function to update the screen
function updateScreen(value) {
    calculatorScreen.value = value;
}

// Function to handle input values
keys.addEventListener('click', (event) => {
    const { target } = event;
    const value = target.value;

    if (!target.matches('button')) return;

    switch (value) {
        case '+':
        case '-':
        case '*':
        case '/':
            handleOperator(value);
            break;
        case '=':
            calculate();
            break;
        case 'all-clear':
            clearAll();
            break;
        default:
            inputNumber(value);
    }
    updateScreen(result || firstOperand || secondOperand);
});

// Handle number input
function inputNumber(number) {
    if (operator === '') {
        firstOperand += number;
        result = firstOperand;
    } else {
        secondOperand += number;
        result = secondOperand;
    }
}

// Handle operator input
function handleOperator(selectedOperator) {
    if (operator === '') {
        operator = selectedOperator;
    } else {
        calculate();
        operator = selectedOperator;
        firstOperand = result;
        secondOperand = '';
    }
}

// Perform calculation
function calculate() {
    const a = parseFloat(firstOperand);
    const b = parseFloat(secondOperand);
    
    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
        default:
            return;
    }

    firstOperand = result.toString();
    secondOperand = '';
    operator = '';
}

// Clear all inputs
function clearAll() {
    firstOperand = '';
    secondOperand = '';
    operator = '';
    result = '0';
}
