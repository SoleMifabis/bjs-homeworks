'use strict';

function getResult(a,b,c){
    
    let d = b**2 - 4*a*c;

    let x = [];

    if (d >= 0) {
        x[0] = (-b + Math.sqrt(d)) / (2*a);
    };

    if (d > 0) {
        x[1] = (-b - Math.sqrt(d)) / (2*a);
    };

    return x;
}

function getAverageMark(marks){

    if (marks.length > 5) {
        marks.splice(5);
        console.log("Оценок больше, чем пять. Будут учтены первые пять"); 
    };

    if (marks.length == 0) {
        return 0;
    };

    let sumOfMarks = 0;

    for (let i = 0; i < marks.length; i++) {
        sumOfMarks += marks[i]; 
    };
    
    let averageMark = sumOfMarks / marks.length;
    
    return averageMark;
};

function askDrink(name,dateOfBirthday){
    
    let age = new Date ().getFullYear() - dateOfBirthday.getFullYear ();
    let result;
    if (age >= 18)
        result = `Не желаете ли олд-фэшн, ${name} ?`; 
    else
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;

    return result;
}