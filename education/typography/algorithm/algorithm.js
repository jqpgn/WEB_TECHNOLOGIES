
function verify() {
    console.log("a, b, c")
    let a = parseInt(elementA.value);
    let b = parseInt(elementB.value);
    let c = parseInt(elementC.value);
    console.log(a, b, c)
   
    if (a + b > c && a + c > b && b + c > a)  {
        result = "Треугольник с такими сторонами существует";
        document.getElementById("result").innerText = messageText + result;
        document.getElementById("result").value = result;
        check = true; }

    else {
        result = "Треугольник с такими сторонами НЕ существует";
        document.getElementById("result").innerText = messageText + result;
        document.getElementById("result").value = result;
        check = false;
    }
}

function display() {
    var text =document.getElementById("result");
    text.style.display = "block";
  }

  function verify_send() {
    verify();
}

let messageText = document.getElementById("result").innerText
console.log(messageText)
let result;
let check = false;

const elementA = document.getElementById("a");
elementA.addEventListener('keyup', verify);

const elementB = document.getElementById("b");
elementB.addEventListener('keyup', verify);

const elementC = document.getElementById("c");
elementC.addEventListener('keyup', verify);

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);
