function check(form) {
    var name = document.getElementById('name');
    var date = document.getElementById('date');
    var result_p = document.getElementById('result');
    var cuisine = document.getElementById('cuisine');
    var choice1 = document.getElementById('choice1');
    var choice2 = document.getElementById('choice2');
    if (form.tochka.checked) {
        result_p.innerHTML = "Ваш чек: <br>" + name.value + '<br>' + date.value + '<br>' + cuisine.value + '<br>' + choice1.value;
    }
    else {
        result_p.innerHTML = " "
    }
}

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)