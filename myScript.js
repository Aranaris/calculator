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
    if (lastValue === undefined || lastAction == 'operator') {
        console.log(storedValue, lastValue, textNumber, lastAction);
        lastValue = Number(textNumber);
        updateCalculatorText(textNumber);
    } else if (lastAction == 'equals') {
        lastValue = Number(textNumber);
        updateCalculatorText(textNumber);
    } else if (lastAction == 'digit input') {
        console.log(storedValue, lastValue, textNumber);
        lastValue = Number(lastValue.toString() + textNumber);
        console.log(lastValue);
        updateCalculatorText(lastValue.toString());
    }
    lastAction = 'digit input';
};

function updateCalculatorText() {
    const input = document.getElementById("calculator-text");
    let output = null;
    const re = new RegExp('\\d');

    if (arguments[0] == 'equals') {
        storedValue = operate(lastOperator, storedValue, lastValue);
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

console.log(add(1,2));
console.log(multiply(3,2));
console.log(subtract(5,2));
console.log(divide(6,2));