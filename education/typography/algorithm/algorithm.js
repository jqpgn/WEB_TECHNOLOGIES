function verify() {
    console.log("a, b, c")
    let a = parseInt(elementA.value);
    let b = parseInt(elementB.value);
    let c = parseInt(elementC.value);
    console.log(a, b, c)

    if ((a + b > c && a + c > b && b + c > a) && ((Math.abs(a*a + b*b - c*c) < 0.2) || (Math.abs(a*a + c*c - b*b) < 0.2) || (Math.abs(c*c + b*b - a*a) < 0.2))) {
        result = "Треугольник с такими сторонами существует,\nи он прямоугольный!";
        document.getElementById("result").innerText = messageText + result;
        document.getElementById("result").value = result;
        check = true;
    }
    else if ((isNaN(a)) || (isNaN(b)) || (isNaN(c))) {
        document.getElementById("result").innerText = messageText + 'Произошла ошибка. Повторите ввод!';
    }
    else if (!(a + b > c && a + c > b && b + c > a)) {
        result = "Треугольник с такими сторонами НЕ существует!";
        document.getElementById("result").innerText = messageText + result;
        document.getElementById("result").value = result;
        check = false;
    }
    else {
        document.getElementById("result").innerText = messageText + "Треугольник с такими сторонами существует,\nно он НЕ прямоугольный!";
    }
}


function send() {
    if (check) {
        let textCondition = document.getElementsByTagName('p')[0].innerText
        document.document.getElementsByTagName('p')[0].value = textCondition;
        document.getElementsByName('result')[0].value = result;
        document.getElementById("form").submit();
    } else {
        document.getElementById("result").innerText = messageText + 'Произошла ошибка. Повторите ввод';
    }
}

function verify_send() {
    verify();
    send();
}


let messageText = document.getElementById("result").innerText
console.log(messageText)
let result;
let check = false;


const elementA = document.getElementById("a");
elementA.addEventListener('input', verify);

const elementB = document.getElementById("b");
elementB.addEventListener('keyup', verify);

const elementC = document.getElementById("c");
elementC.addEventListener('keyup', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)