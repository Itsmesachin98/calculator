const topPane = document.querySelector(".top-pane");
const bottomPane = document.querySelector(".bottom-pane");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const ac = document.querySelector(".ac");
const del = document.querySelector(".del");
const equalsTo = document.querySelector(".equals-to");

// This function handles the click of a button
for (let number of numbers) {
    number.addEventListener("click", () => {
        if (bottomPane.innerText !== "") {
            const fontSize = window.getComputedStyle(bottomPane);
            if (fontSize["font-size"] === "32px") {
                bottomPane.innerText = "";
            }
        }

        if (bottomPane.innerText === "Malformed Expression") {
            bottomPane.innerText = "";
        }
        bottomPane.style.fontSize = "1rem";
        bottomPane.innerText += number.innerText;
    });
}

// This function handles the click of any operator
for (let operator of operators) {
    operator.addEventListener("click", () => {
        if (operator.innerText === "x") {
            bottomPane.innerText += "*";
        } else {
            bottomPane.innerText += operator.innerText;
        }
    });
}

del.addEventListener("click", () => {
    bottomPane.innerText = bottomPane.innerText.slice(0, -1);
});

ac.addEventListener("click", () => {
    topPane.innerText = "";
    bottomPane.innerText = "";
});

equalsTo.addEventListener("click", () => {
    try {
        const result = eval(bottomPane.innerText);
        topPane.innerText = bottomPane.innerText;
        bottomPane.innerText = result;
        bottomPane.style.fontSize = "2rem";
    } catch (err) {
        bottomPane.innerText = "Malformed Expression";
    }
});
