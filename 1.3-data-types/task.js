'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
    if (typeof percent !== "number" && percent < 0) {
        return console.log(`Параметр "процентная ставка" содержит неправильное значение ${percent}`);
    };
    if (typeof contribution !== "number" && contribution < 0) {
        return console.log(`Параметр "начальный взнос" содержит неправильное значение ${contribution}`);
    };
    if (typeof amount !== "number" && amount < 0) {
        return console.log(`Параметр "общая стоимость" содержит неправильное значение ${amount}`);
    };
    if (date < new Date()) {
        return console.log(`Параметр "дата" содержит неправильное значение ${data}`);
    };

    let body = amount - contribution;

    let monthsNumber = date.getMonth() - new Date().getMonth() + (12 * (date.getFullYear() - new Date().getFullYear()));
    let P = (percent/100)/12;
    let amountPerMonth = body * (P + P / (((1 + P) ** monthsNumber) - 1));
    let totalAmount = amountPerMonth * monthsNumber;
    
    return Number(totalAmount.toFixed(2));
}

function getGreeting(name) {
    return `Привет, мир! Меня зовут ${name && name.length > 0 ? name : 'Аноним'}.`;
}


