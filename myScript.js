var currentValue = 0;
var lastValue = 0;
var lastOperator = '';

function generateCalculator() {
    const calculator = document.createElement('div');
    calculator.classList.add('calculator');
    document.body.append(calculator);
};

function add() {
    const sum = 0;
    for (num in arguments) {
        sum += num;
    };
    return sum;
};

function multiply() {
    const output = 1;
    for (num in arguments) {
        output *= num;
    };
    return output;
};

function subtract() {
    const difference = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        difference -= arguments[i];
    };
    return difference;
};

function divide() {
    const output = arguments[0];
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
    updateCalculatorText(textNumber);
};

function updateCalculatorText() {
    const input = document.getElementById("calculator-text");
    let output = null;
    const re = new RegExp('\\d{1}');

    if (arguments[0] == 'equals') {
        currentValue = operate(lastOperator, currentValue, lastValue);
    } else if (re.test(arguments[0])) {
        output = arguments[0];
    } else {
        return;
    }
    input.textContent = output;
}

const digits = document.getElementsByClassName("digit");
[].forEach.call(digits, (textNumber) => {
    textNumber.addEventListener("click", () => digitInput(textNumber.textContent), false);
});


