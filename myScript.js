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

