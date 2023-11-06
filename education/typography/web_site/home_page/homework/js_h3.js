function verify() {
    console.log("a, b, c")
    let a = parseInt(elementA.innerText);
    let b = parseInt(elementB.innerText);
    let c = parseInt(elementC.innerText);
    console.log(a, b, c)

    if ((a + b > c && a + c > b && b + c > a) && ((Math.abs(a*a + b*b - c*c) < 0.2) || (Math.abs(a*a + c*c - b*b) < 0.2) || (Math.abs(c*c + b*b - a*a) < 0.2))) {
        result = "Треугольник с такими сторонами существует,\n и он прямоугольный!";
        document.getElementById("result").innerText =  result;
    }
    else if ((isNaN(a)) || (isNaN(b)) || (isNaN(c))) {
        result = 'Произошла ошибка. Повторите ввод!';
        document.getElementById("result").innerText =  result;
    }
    else if (!(a + b > c && a + c > b && b + c > a)) {
        result = "Треугольник с такими сторонами НЕ существует!";
        document.getElementById("result").innerText =  result;
    }
    else {
        result = "Треугольник с такими сторонами существует,\n но он НЕ прямоугольный!";
        document.getElementById("result").innerText =  result;
    }
}

const elementA = document.getElementById("a");
const elementB = document.getElementById("b");
const elementC = document.getElementById("c");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);