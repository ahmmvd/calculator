// CALCULATOR PROGRAM

const display = document.getElementById("display");
let openParenthesis = true;

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function undo() {
    display.value = display.value.slice(0, -1);
}

function appendParenthesis() {
    display.value += openParenthesis ? "(" : ")";
    openParenthesis = !openParenthesis;
}

function percent() {
    try {
        display.value = parseFloat(display.value) / 100;
    } catch {
        display.value = "Error";
    }
}
