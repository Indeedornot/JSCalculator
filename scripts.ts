let equationString: string = "";

let one = document.getElementsByClassName('One')[0];
let two = document.getElementsByClassName('Two')[0];
let three = document.getElementsByClassName('Three')[0];
let four = document.getElementsByClassName('Four')[0];
let five = document.getElementsByClassName('Five')[0];
let six = document.getElementsByClassName('Six')[0];
let seven = document.getElementsByClassName('Seven')[0];
let eight = document.getElementsByClassName('Eight')[0];
let nine = document.getElementsByClassName('Nine')[0];
let zero = document.getElementsByClassName('Zero')[0];
let plus = document.getElementsByClassName('Plus')[0];
let minus = document.getElementsByClassName('Minus')[0];
let multiply = document.getElementsByClassName('Multiply')[0];
let divide = document.getElementsByClassName('Divide')[0];
let dot = document.getElementsByClassName('Dot')[0];
let equals = document.getElementsByClassName('Equals')[0];
let equation = document.getElementsByClassName('Equation')[0];
let clear = document.getElementsByClassName('Clear')[0];

//#region Events
one.addEventListener('click', function () {
    equationString += "1";
    equation.innerHTML = equationString;
});
two.addEventListener('click', function () {
    equationString += "2";
    equation.innerHTML = equationString;
});
three.addEventListener('click', function () {
    equationString += "3";
    equation.innerHTML = equationString;
});
four.addEventListener('click', function () {
    equationString += "4";
    equation.innerHTML = equationString;
});
five.addEventListener('click', function () {
    equationString += "5";
    equation.innerHTML = equationString;
});
six.addEventListener('click', function () {
    equationString += "6";
    equation.innerHTML = equationString;
});
seven.addEventListener('click', function () {
    equationString += "7";
    equation.innerHTML = equationString;
});
eight.addEventListener('click', function () {
    equationString += "8";
    equation.innerHTML = equationString;
});
nine.addEventListener('click', function () {
    equationString += "9";
    equation.innerHTML = equationString;
});
zero.addEventListener('click', function () {
    equationString += "0";
    equation.innerHTML = equationString;
});
plus.addEventListener('click', function () {
    ChangeSign("+");
    equation.innerHTML = equationString;
});
minus.addEventListener('click', function () {
    ChangeSign("-");
    equation.innerHTML = equationString;
});
multiply.addEventListener('click', function () {
    ChangeSign("*");
    equation.innerHTML = equationString;
});
divide.addEventListener('click', function () {
    ChangeSign("/");
    equation.innerHTML = equationString;
});
dot.addEventListener('click', function () {
    ChangeSign(".");
    equation.innerHTML = equationString;
});
equals.addEventListener('click', function () {
    equation.innerHTML = eval(equationString);
});

clear.addEventListener('click', function () {
    equationString = "";
    equation.innerHTML = equationString;
});

///#endregion

function ChangeSign(sign: string) {
    let lastChar = equationString.charAt(equationString.length - 1);
    if (lastChar == sign) {
        return
    }
    if (lastChar == "." ||
        lastChar == "*" ||
        lastChar == "/" ||
        lastChar == "-") {
        equationString = equationString.slice(0, -1) + sign;
    }
    else {
        equationString += sign;
    }
}
    
