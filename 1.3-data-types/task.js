'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
    if (typeof percent !== "number") {
        return console.log(`Параметр "процентная ставка" содержит неправильное значение ${percent}`);
    };
    if (typeof contribution !== "number") {
        return console.log(`Параметр "начальный взнос" содержит неправильное значение ${contribution}`);
    };
    if (typeof amount !== "number") {
        return console.log(`Параметр "общая стоимость" содержит неправильное значение ${amount}`);
    };

    let body = amount - contribution;

    let monthsNumber = date.getMonth() - new Date().getMonth() + (12 * (date.getFullYear() - new Date().getFullYear()));
    let P = (percent/100)/12;
    let amountPerMonth = body * (P + P / (((1 + P) ** monthsNumber) - 1));
    let totalAmount = amountPerMonth * monthsNumber;
    return totalAmount.toFixed(1);
}

function getGreeting(name) {
    let greeting;
    
    if (name.length > 0)
        greeting = `Привет, мир! Меня зовут ${name}.`;
    if (name.length <= 0 || undefined) 
        greeting = `Привет, мир! Меня зовут Аноним.`;
    
    return greeting;
}


