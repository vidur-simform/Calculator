//log function
function print(t) {
    console.log(t);
}

var hyp = 0;
var tri = 0;

const triFunctions = document.getElementsByClassName('tri');
const inverseTriFunctions = document.getElementsByClassName('atri');
const hypFunctions = document.getElementsByClassName('hyp');
const inverseHypFunctions = document.getElementsByClassName('ahyp');
const arrLen = triFunctions.length;
function hide(){
    for(let i=0;i<arrLen;i++){
        inverseTriFunctions[i].style.display = "none";
        hypFunctions[i].style.display = "none";
        inverseHypFunctions[i].style.display = "none";
    }
}
hide();

function toggleTri(){
    if(hyp==0 && tri==0){
        for(let i=0;i<arrLen;i++){
            inverseTriFunctions[i].style.display = "";
            triFunctions[i].style.display = "none";
            tri = 1;
        }
    }
    else if(hyp==0 && tri==1){
        for(let i=0;i<arrLen;i++){
            inverseTriFunctions[i].style.display = "none";
            triFunctions[i].style.display = "";
            tri = 0;
        }
    }
    else if(hyp==1 && tri==0){
        for(let i=0;i<arrLen;i++){
            hypFunctions[i].style.display = "none";
            inverseHypFunctions[i].style.display = "";
            tri  = 1;
        }
    }
    else{
        for(let i=0;i<arrLen;i++){
            inverseHypFunctions[i].style.display = "none";
            hypFunctions[i].style.display = "";
            tri = 0;
        }
    } 
}
function toggleHyp(){
    if(tri==0 && hyp==0){
        for(let i=0;i<arrLen;i++){
            triFunctions[i].style.display = "none";
            hypFunctions[i].style.display = "";
            hyp = 1;
        }
    }
    else if(tri==0 && hyp==1){
        for(let i=0;i<arrLen;i++){
            hypFunctions[i].style.display = "none";
            triFunctions[i].style.display = "";
            hyp = 0;
        }
    }
    else if(tri==1 && hyp==0){
        for(let i=0;i<arrLen;i++){
            inverseTriFunctions[i].style.display = "none";
            inverseHypFunctions[i].style.display = "";
            hyp  = 1;
        }
    }
    else{
        for(let i=0;i<arrLen;i++){
            inverseHypFunctions[i].style.display = "none";
            inverseTriFunctions[i].style.display = "";
            hyp  = 0;
        }
    } 
}
const triBtn2nd = document.getElementById('tri-btn-2nd');
triBtn2nd.addEventListener('click',toggleTri);

const triBtnHyp = document.getElementById('tri-btn-hyp');
triBtnHyp.addEventListener('click',toggleHyp);


const functions = document.getElementById('functions');
functions.addEventListener('click', () => {
    document.getElementById("functions-content").classList.toggle("show");
});

const trigonometry = document.getElementById('trigonometry');
trigonometry.addEventListener('click', () => {
    document.getElementById("trigonometry-content").classList.toggle("show");
});

const factorial = (num) => {
    let ans = 1;
    for (let i = 1; i <= num; i++) {
        ans *= i;
    }
    return ans;
}
const btn2ndColumn = document.getElementsByClassName('btn-2nd-column');

const btn2nd = document.getElementById('btn-2nd');

const toggle2nd = () => {
    btn2nd.classList.toggle('clicked-bg');
    for (let ele of btn2ndColumn) {
        ele.classList.toggle("hidden");
    }
}
btn2nd.addEventListener('click', toggle2nd);

const input = document.getElementById('input-text');
const expression = document.getElementById('expression-text');
const numberInputs = document.getElementsByClassName('number');
const operators = document.getElementsByClassName('operator');
const equal = document.getElementById('equal');
const brackets = document.getElementsByClassName('bracket');
const operatorSymbols = ["*", "+", "-", "/"];

//numbers input
for (let ele of numberInputs) {
    ele.addEventListener('click', () => {
        input.value += ele.innerHTML;
    })
}

//brackets
for (let ele of brackets) {
    ele.addEventListener('click', () => {
        input.value += ele.innerHTML;
    })
}

//operators
for (let ele of operators) {
    ele.addEventListener('click', () => {
        if (input.value == "") {
            expression.value = expression.value.substring(0, expression.value.length - 1) + ele.innerHTML;
        }
        else {
            expression.value += input.value + ele.innerHTML;
            input.value = "";
        }
    })
}

equal.addEventListener('click', () => {
    try {
        expression.value += input.value;

        input.value = eval((expression.value).replaceAll("^", "**").replaceAll("mod", "%")
            .replaceAll("÷", "/").replaceAll("x", "*"));
    }
    catch (err) {
        alert("Invalid expression!")
        expression.value = "";
        input.value = "";
    }
})

//ln
const ln = document.getElementById('ln');
ln.addEventListener('click', () => {
    input.value = (Math.log(input.value)).toString();
});

//log
const log = document.getElementById('log');
log.addEventListener('click', () => {
    input.value = (Math.log10(input.value)).toString();
});

//alter sign
const alterSign = document.getElementById('altersign');
alterSign.addEventListener('click', () => {
    input.value = -1 * input.value;
});

//clear
const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    expression.value = "";
    input.value = "";
});

//backspace (erase last)
const eraseLast = document.getElementById('erase-last');
eraseLast.addEventListener('click', () => {
    input.value = input.value.substring(0, input.value.length - 1);
});

//10^x
const tenPowerX = document.getElementById('ten-power-x');
tenPowerX.addEventListener('click', () => {
    input.value = 10 ** input.value;
});

//2^x
const twoPowerX = document.getElementById('two-power-x');
twoPowerX.addEventListener('click', () => {
    input.value = 2 ** input.value;
});
//2^x
const ePowerX = document.getElementById('e-power-x');
ePowerX.addEventListener('click', () => {
    input.value = (Math.E) ** input.value;
});

//square
const square = document.getElementById('square');
square.addEventListener('click', () => {
    input.value = input.value ** 2;
});
//cube
const cube = document.getElementById('cube');
cube.addEventListener('click', () => {
    input.value = input.value ** 3;
});

//square root
const rootX = document.getElementById('square-root');
rootX.addEventListener('click', () => {
    input.value = input.value ** (1 / 2);
});

//cube root
const cubeRootX = document.getElementById('cube-root');
cubeRootX.addEventListener('click', () => {
    input.value = input.value ** (1 / 3);
});

//one by x
const oneByX = document.getElementById('one-by-x');
oneByX.addEventListener('click', () => {
    input.value = (1 / input.value).toFixed(2);
});

//abs x (|x|)
const absX = document.getElementById('abs');
absX.addEventListener('click', () => {
    input.value = Math.abs(input.value);
});
// abs2
document.getElementById('abs2')
    .addEventListener('click', () => {
        input.value = Math.abs(input.value);
    });

//exp
const exp = document.getElementById('exp');
exp.addEventListener('click', () => {
    if (operatorSymbols.includes(input.value.slice(-1))) {
        input.value = input.value.substring(0, input.value.length - 1) + ele.innerHTML;
    }
    else
        input.value += ".e";
});

//modulo
const mod = document.getElementById('mod');
mod.addEventListener('click', () => {
    if (operatorSymbols.includes(input.value.slice(-1))) {
        expression.value = expression.value.substring(0, expression.value.length - 1) + ele.innerHTML;
    }
    else {
        expression.value += input.value + "mod";
        input.value = "";
    }
});

//x power y
const xPowerY = document.getElementById('x-power-y');
xPowerY.addEventListener('click', () => {
    if (operatorSymbols.includes(input.value.slice(-1))) {
        expression.value = expression.value.substring(0, expression.value.length - 1) + ele.innerHTML;
    }
    else {
        expression.value += input.value + "^";
        input.value = "";
    }
});
//yth root of x
const ythRootOfX = document.getElementById('yth-root-of-x');
ythRootOfX.addEventListener('click', () => {
    if (operatorSymbols.includes(input.value.slice(-1))) {
        expression.value = expression.value.substring(0, expression.value.length - 1) + ele.innerHTML;
    }
    else {
        expression.value += input.value + "i^";
        input.value = "";
    }
});

//factorial
const fact = document.getElementById('fact');
fact.addEventListener('click', () => {
    if (operatorSymbols.includes(input.value.slice(-1))) {
        expression.value = expression.value.substring(0, expression.value.length - 1) + ele.innerHTML;
    }
    else {
        expression.value += factorial(input.value);
        input.value = "";
    }
});

//e 
const constE = document.getElementById('const-e');
constE.addEventListener('click', () => {
    input.value = Math.E;
});

//pi 
const constPi = document.getElementById('const-pi');
constPi.addEventListener('click', () => {
    if (!isNaN(input.value.slice(-1))) {
        input.value = Math.PI;
    }
    else {
        input.value += Math.PI;
    }
});

/* functions dropdown section */
//ceil
const ceilX = document.getElementById('ceil');
ceilX.addEventListener('click', () => {
    input.value = Math.ceil(input.value);
});

//floor
const floorX = document.getElementById('floor');
floorX.addEventListener('click', () => {
    input.value = Math.floor(input.value);
});

//rand
const random = document.getElementById('random');
random.addEventListener('click', () => {
    input.value = Math.random();
});

//degree to dms
const degToDms = document.getElementById('deg-to-dms');
degToDms.addEventListener('click', () => {
    let deg = Number(input.value);
    let minutes = (deg - parseInt(deg)) * 60;
    let seconds = (minutes - parseInt(minutes)) * 60;
    input.value = parseFloat(`${parseInt(deg)}.${parseInt(minutes)}${parseInt(seconds)}`).toFixed(4).toString();
});

//dms to degree
const dmsToDeg = document.getElementById('dms-to-deg');
dmsToDeg.addEventListener('click', () => {
    let dms = Number(input.value);
    let deg = parseInt(dms);
    let sec = (dms.toFixed(4) - dms.toFixed(2)) * 10000;
    let min = (dms.toFixed(2) - deg) * 100;
    deg = deg + min / 60 + sec / 3600;
    input.value = deg.toFixed(2).toString();
});

/* Trigonometry section */
