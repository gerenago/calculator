function add (initialInput, nextInput) {
    return initialInput + nextInput;
};

function subtract (initialInput, nextInput) {
    return initialInput - nextInput;
};

function multiply (initialInput, nextInput) {
    return initialInput * nextInput;
};

function divide (initialInput, nextInput) {
    return initialInput / nextInput;
};

function operate (operator, initialInput, nextInput) {
    switch(operator) {
        case 'add' :
            add(initialInput, nextInput)
            break;
        case 'substract' :
            substract(initialInput, nextInput)
            break;
        case 'multiply' :
            multiply(initialInput, nextInput)
            break;
        case 'divide' :
            divide(initialInput, nextInput)
            break;
    }
};