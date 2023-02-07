//log function
function print(t) {
    console.print(t);
}

function factorial(num){
    let ans = 1;
    for(let i=1; i<=num ; i++){
        ans *= i;
    }
    return ans;
}

const input = document.getElementById('input-text');
const expression = document.getElementById('expression-text');
const numberInputs = document.getElementsByClassName('number');
const operators = document.getElementsByClassName('operator');
const equal = document.getElementById('equal');
const brackets = document.getElementsByClassName('bracket');
const operatorSymbols = ["*", "+", "-", "/"];

function calculate(val){

    input.value = val;
}

//ln
const ln = document.getElementById('ln');
ln.addEventListener('click',()=>{
    expression.value = `ln(${input.value})`;
    input.value = (Math.log(input.value)).toString();
});

//log
const log = document.getElementById('log');
log.addEventListener('click',()=>{
    expression.value = `log(${input.value})`;
    input.value = (Math.log10(input.value)).toString();
});

//alter sign
const alterSign = document.getElementById('altersign');
alterSign.addEventListener('click',()=>{
    input.value = -1 * input.value;
    expression.value = input.value;
});

//clear
const clear = document.getElementById('clear');
clear.addEventListener('click',()=>{
    input.value = "";
});

//backspace (erase last)
const eraseLast = document.getElementById('erase-last');
eraseLast.addEventListener('click',()=>{
    input.value = input.value.substring(0,input.value.length-1);
});

//10^x
const tenPowerX = document.getElementById('ten-power-x');
tenPowerX.addEventListener('click',()=>{
    expression.value = `10^${input.value}`;
    input.value = 10**input.value;
});
 
//square
const square = document.getElementById('square');
square.addEventListener('click',()=>{
    expression.value = `${input.value}^2`;
    input.value = input.value**2;
});

//square root
const rootX = document.getElementById('square-root');
rootX.addEventListener('click',()=>{
    expression.value = `√${input.value}`;
    input.value = Math.sqrt(input.value).toFixed(2);
});

//one by x
const oneByX = document.getElementById('one-by-x');
oneByX.addEventListener('click',()=>{
    expression.value = `1/${input.value}`;
    input.value = (1/input.value).toFixed(2);
});

//abs x (|x|)
const absX = document.getElementById('abs');
absX.addEventListener('click',()=>{
    expression.value = `|${input.value}|`;
    input.value = Math.abs(input.value);
});

//exp
const exp = document.getElementById('exp');
exp.addEventListener('click',()=>{
    if (operatorSymbols.includes(input.value.slice(-1))) {
        input.value = input.value.substring(0, input.value.length - 1) + ele.innerHTML;
    }
    else
        input.value += ".e";
});

//modulo
const mod = document.getElementById('mod');
mod.addEventListener('click',()=>{
    if (operatorSymbols.includes(input.value.slice(-1))) {
        input.value = input.value.substring(0, input.value.length - 1) + ele.innerHTML;
    }
    else
        input.value += "mod";
});

//x power y
const xPowerY = document.getElementById('x-power-y');
xPowerY.addEventListener('click',()=>{
    if (operatorSymbols.includes(input.value.slice(-1))) {
        input.value = input.value.substring(0, input.value.length - 1) + ele.innerHTML;
    }
    else
        input.value += "^";
});

//factorial
const fact = document.getElementById('fact');
fact.addEventListener('click',()=>{
    expression.value = `${input.value}!`;
    input.value = factorial(input.value);
});

for (let ele of numberInputs) {
    ele.addEventListener('click', () => {
        input.value += ele.innerHTML;
    })
}
for (let ele of brackets) {
    ele.addEventListener('click', () => {
        input.value += ele.innerHTML;
    })
}
for (let ele of operators) {
    ele.addEventListener('click', () => {
        if (operatorSymbols.includes(input.value.slice(-1))) {
            input.value = input.value.substring(0, input.value.length - 1) + ele.innerHTML;
        }
        else
            input.value += ele.innerHTML;
    })
}

equal.addEventListener('click', () => {
    // try{
        expression.value = input.value;

        input.value = eval((input.value).replaceAll("^", "**").replaceAll("mod","%")
        .replaceAll("÷","/").replaceAll("x","*"));
    // }
    // catch(err){
    //     input.value = "";
    //     expression.value = "Invalid expression";
    // }
})
