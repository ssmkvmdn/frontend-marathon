function Calc(operation, num1, num2) {
    const isNotValid = typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2);

    if (isNotValid) {
        return "Error";
    }

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
            return num1 % num2;
        default:
            return "unknown operation";
    }
}

console.log(Calc('mult', 15, 2));
console.log(Calc('sum', 15, 2));
console.log(Calc('sub', 23, 2));
console.log(Calc('div', 22, 2));
console.log(Calc('mult', 0, 23));
console.log(Calc('pow', 22, 2));
console.log(Calc('mod', 100, 23));

console.log(Calc('div', 10, 0));

console.log(Calc('sum', 10));
console.log(Calc('sum', 10, 'lkj'));
console.log(Calc(10, 2));

console.log(Calc('sum', null, 2));
console.log(Calc('sum', undefined, 2));
console.log(Calc('sum', 14, NaN));

console.log(Calc('', 10, 2));
console.log(Calc(' ', 10, 2));
console.log(Calc(42, 10, 2));
console.log(Calc(null, 10, 2));
console.log(Calc(NaN, 14, 7));
