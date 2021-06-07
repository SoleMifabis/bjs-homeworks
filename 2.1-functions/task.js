'use strict';

function getSolutions (a, b, c) {
    let d = b**2 - 4*a*c;
    
    if (d < 0) {
        return ("D:" + d +", roots:");
    }
    if (d == 0) {
        let x1 = (-b / (2*a));
        return ("D:" + d +", roots:"+ [x1]);
    }
    if (d > 0) {
        let x1 = (-b + Math.sqrt(d))/(2*a);
        let x2 = (-b - Math.sqrt(d))/(2*a);
        return ("D:" + d +", roots:" [x1, x2]);
    }
}

function showSloutionsMessage(a, b, c) {
    let result = getSolutions();
    console.log ("Вычисляем корни квадратного уравнения " + a+"x² + "+b+"x + "+c);
    console.log ("Значение дискриминанта: "+result);
    if (result < 0) { 
        console.log("Уравнение не имеет вещественных корней");
    }
    if (result > 0) {
        console.log("Уравнение имеет один корень X₁ = "+result[1]);
    }
    if (result == 0) {
        console.log("Уравнение имеет два корня. X₁ = "+ result[1]+", X₂ = "+ result[2]);
    }
}
console.log(showSloutionsMessage(1,2,3));













function getAverageScore(data) {

    for (let algebra in getAverageScore) {
        let averageMarkAlgebra;
        if (data.algebra.length == 0) {
            averageMarkAlgebra = 0;
        };
        for (let i = 0; i < data.algebra.length; i++) {
            sumOfMarksAlg += data.algebra[i]; 
        };
        averageMarkAlgebra = sumOfMarksAlg / data.algebra.length;
    };

    for (let geometry in getAverageScore) {
        let averageMarkGeometry;
        if (data.geometry.length == 0) {
            averageMarkGeometry = 0;
        };
        for (let i = 0; i < data.geometry.length; i++) {
            sumOfMarksGeom += data.geometry[i]; 
        };
        averageMarkGeometry = sumOfMarksGeom / data.geometry.length;
    };

    for (let russian in getAverageScore) {
        let averageMarkRussian;
        if (data.russian.length == 0) {
            averageMarkRussian = 0;
        };
        for (let i = 0; i < data.russian.length; i++) {
            sumOfMarksRus += data.russian[i]; 
        };
        averageMarkRussian = sumOfMarksRus / data.russian.length;
    };

    for (let physics in getAverageScore) {
        let averageMarkPhysics;
        if (data.physics.length == 0) {
            averageMarkPhysics = 0;
        };
        for (let i = 0; i < data.physics.length; i++) {
            sumOfMarksPhy += data.physics[i]; 
        };
        averageMarkPhysics = sumOfMarksPhy / data.physics.length;
    };

    for (let music in getAverageScore) {
        let averageMarkMusic;
        if (data.music.length == 0) {
            averageMarkMusic = 0;
        };
        for (let i = 0; i < data.music.length; i++) {
            sumOfMarksMus += data.music[i]; 
        };
        averageMarkMusic = sumOfMarksMus / data.music.length;
    };

    for (let english in getAverageScore) {
        let averageMarkEnglish;
        if (data.english.length == 0) {
            averageMarkEnglish = 0;
        };
        for (let i = 0; i < data.english.length; i++) {
            sumOfMarksEng += data.english[i]; 
        };
        averageMarkEnglish = sumOfMarksEng / data.english.length;
    };

    for (let poetry in getAverageScore) {
        let averageMarkPoetry;
        if (data.poetry.length == 0) {
            averageMarkPoetry = 0;
        };
        for (let i = 0; i < data.poetry.length; i++) {
            sumOfMarksPoe += data.poetry[i]; 
        };
        averageMarkPoetry = sumOfMarksPoe / data.poetry.length;
    };

    for (let chemistry in getAverageScore) {
        let averageMarkChemistry;
        if (data.chemistry.length == 0) {
            averageMarkChemistry = 0;
        };
        for (let i = 0; i < data.chemistry.length; i++) {
            sumOfMarksChem += data.chemistry[i]; 
        };
        averageMarkChemistry = sumOfMarksChem / data.chemistry.length;
    };

    for (let french in getAverageScore) {
        let averageMarkFrench;
        if (data.french.length == 0) {
            averageMarkFrench= 0;
        };
        for (let i = 0; i < data.french.length; i++) {
            sumOfMarksFr += data.french[i]; 
        };
        averageMarkFrench = sumOfMarksFr / data.french.length;
    };
    
    let marks = {
        algebra: averageMarkAlgebra,
        geometry: averageMarkGeometry,
        russian: averageMarkRussian,
        physics: averageMarkPhysics,
        music: averageMarkMusic,
        english: averageMarkEnglish,
        poetry: averageMarkPoetry,
        chemistry: averageMarkChemistry,
        french: averageMarkFrench 
    };

    function getAverageMark(marks) {
        let average;
        for (let y = 0; y < marks.length; y++ ) {
            sumOfMarks += marks[y];
        }
        average = sumOfMarks / marks.length;

        for (let i = marks.length; i--;) {
            marks[i + 1] = marks[i];
        }
        marks[0] = average;
    }
    return getAverageMark;
}    
