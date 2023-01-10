var storedValue = 0;
var lastValue = undefined;
var lastOperator = '';
var lastAction = '';

function generateCalculator() {
    const calculator = document.createElement('div');
    calculator.classList.add('calculator');
    document.body.append(calculator);
};

function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    };
    return sum;
};

function multiply() {
    let output = 1;
    for (let i = 0; i < arguments.length; i++) {
        output *= arguments[i];
    };
    return output;
};

function subtract() {
    let difference = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        difference -= arguments[i];
    };
    return difference;
};

function divide() {
    let output = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        output /= arguments[i];
    };
    return output;
};

function operate(operation, first, second) {
    if (operation == 'add') {
        return add(first, second);
    } else if (operation == 'multiply') {
        return multiply(first, second);
    } else if (operation == 'subtract') {
        return subtract(first, second);
    } else if (operation == 'divide') {
        return divide(first, second);
    }
};

function digitInput(textNumber) {
    if (lastValue === undefined || lastValue === 0 || lastAction == 'operator') {
        lastValue = Number(textNumber);
        updateCalculatorText(textNumber);
    } else if (lastAction == 'equals') {
        lastValue = Number(textNumber);
        updateCalculatorText(textNumber);
    } else if (lastAction == 'digit input') {
        lastValue = Number(lastValue.toString() + textNumber);
        updateCalculatorText(lastValue.toString());
    }
    lastAction = 'digit input';
};

function updateCalculatorText() {
    const input = document.getElementById("calculator-text");
    let output = null;
    const re = new RegExp('\\d');
    console.log(arguments[0]);
    if (arguments[0] == 'equals') {
        storedValue = operate(lastOperator, storedValue, lastValue);
        lastValue = storedValue;
        output = storedValue;
    } else if (re.test(arguments[0])) {
        
        output = arguments[0];
    } else {
        return;
    }
    input.textContent = output;
}

function updateOperator(operation) {
    lastOperator = operation;
    storedValue = lastValue;
    lastAction = 'operator';
}

function calculate() {
    updateCalculatorText('equals');
    lastAction = 'equals';
}

function allClear() {
    lastValue = 0;
    storedValue = 0;
    lastAction = 'clear';
    updateCalculatorText('0');
}

const digits = document.getElementsByClassName("digit");
[].forEach.call(digits, (textNumber) => {
    textNumber.addEventListener("click", () => digitInput(textNumber.textContent), false);
});

const operators = document.getElementsByClassName("operator");
[].forEach.call(operators, (operation) => {
    operation.addEventListener("click", () => updateOperator(operation.id), false);
});

const equals = document.getElementById("equals");
equals.addEventListener("click", () => calculate(), false);


const clear = document.getElementById("clear");
clear.addEventListener("click", () => allClear(), false);