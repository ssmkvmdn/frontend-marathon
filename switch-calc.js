function Calc(operation, num1, num2) {
    const isNotValid = typeof num1 !== 'number' || typeof num2 !== 'number';

    if (isNotValid) {
        return "Error";
    } else {
        switch (operation) {
            case 'mult':
                return num1 * num2;
            case 'div':
                return (num2 === 0) ? "division by zero" : num1 / num2;
            case 'sum':
                return num1 + num2;
            case 'sub':
                return num1 - num2;
            case 'pow':
                return num1 ** num2;
            case 'mod':
                return (num2 === 0) ? "incorrect. mod by zero" : num1 % num2;
            default:
                return "unknown operation";
        }
    }
}

console.log(Calc('mult', 15, 2));
