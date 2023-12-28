const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const operatorMultiply = document.querySelector(".operatorMultiply");
const point = document.querySelector(".point")
const allclear = document.querySelector(".allclear");
const remove = document.querySelector(".delete");
const equalsTo = document.querySelector(".equalsTo");

for (let number of numbers) {
    number.addEventListener("click", function() {
        display.innerText += number.innerText;
    })
}

for (let operator of operators) {
    operator.addEventListener("click", function() {
        display.innerText += operator.innerText;
    })
}

operatorMultiply.addEventListener("click", function() {
    display.innerText += "*";
})

point.addEventListener("click", function() {
    display.innerText += ".";
})

allclear.addEventListener("click", function() {
    display.innerText = "";
})

remove.addEventListener("click", function() {
    display.innerText = display.innerText.slice(0, -1);
})

equalsTo.addEventListener("click", function() {
    let result = eval(display.innerText);
    display.innerText = result;
})