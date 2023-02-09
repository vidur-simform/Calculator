//log function
function print(t) {
    console.log(t);
}

//fixed-exponential toggle
const fE = document.getElementById('f-e');
fE.addEventListener('click', () => {
    fix = (fix == 0) ? 1 : 0;
    fE.classList.toggle('clicked-bg');
});




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


const replaceLogBaseAndYthRoot = ()=>{
    let str = expression.value.toString();
    let logIndex = str.indexOf("logbase");
    let i = logIndex;
    while(i>=0 && ((!isNaN(str[i])) || str[i]=='.'))
        i--;
    i++;
    let x = parseFloat(str.substring(i,logIndex));
    let y = parseFloat(str.substring(logIndex + "logbase".length));
    let result= (Math.log(x)/Math.log(y)).toFixed(3);
    expression.value = str.replaceAll(x.toString()+"logbase"+y.toString());
}

equal.addEventListener('click', () => {
    try {
        expression.value += input.value;
        replaceLogBaseAndYthRoot();
        input.value = eval((expression.value).replaceAll("^", "**").replaceAll("mod", "%")
            .replaceAll("÷", "/").replaceAll("x", "*"));
    }
    catch (err) {
        alert("Invalid expression!")
        expression.value = "";
        input.value = "";
    }
})

//alter sign
const alterSign = document.getElementById('altersign');
alterSign.addEventListener('click', () => {
    input.value = -1 * input.value;
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

var deg = 0, fix = 1;

/* fixed to exponential */
document.getElementById('f-e')
.addEventListener('click',()=>{
    if(fix==1){
        input.value = Number(input.value).toExponential().toString();
    }
    else{
        input.value = Number(input.value).toFixed(5).toString();
    }
});