//toggle functions on column of 2nd button 
const btn2ndColumn = document.getElementsByClassName('btn-2nd-column');

const btn2nd = document.getElementById('btn-2nd');
const toggle2nd = () => {
    btn2nd.classList.toggle('clicked-bg');
    for (let ele of btn2ndColumn) {
        ele.classList.toggle("hidden");
    }
}
btn2nd.addEventListener('click', toggle2nd);


//factorial
const factorial = (num) => {
    let ans = 1;
    for (let i = 1; i <= num; i++) {
        ans *= i;
    }
    return ans;
}

//ln
document.getElementById('ln')
.addEventListener('click', () => {
    input.value = (Math.log(input.value)).toString();
});

//log
document.getElementById('log')
.addEventListener('click', () => {
    input.value = (Math.log10(input.value)).toString();
});

//log x base y
const logXBaseY = document.getElementById('log-x-base-y');
logXBaseY.addEventListener('click', () => {
    if (operatorSymbols.includes(input.value.slice(-1))) {
        expression.value = expression.value.substring(0, expression.value.length - 1) + ele.innerHTML;
    }
    else {
        expression.value += input.value + "logbase";
        input.value = "";
    }
});

//10^x
document.getElementById('ten-power-x')
.addEventListener('click', () => {
    input.value = 10 ** input.value;
});

//2^x
document.getElementById('two-power-x')
.addEventListener('click', () => {
    input.value = 2 ** input.value;
});

//e^x
document.getElementById('e-power-x')
.addEventListener('click', () => {
    input.value = (Math.E) ** input.value;
});

//square
document.getElementById('square')
.addEventListener('click', () => {
    input.value = input.value ** 2;
});
//cube
document.getElementById('cube')
.addEventListener('click', () => {
    input.value = input.value ** 3;
});

//square root
document.getElementById('square-root')
.addEventListener('click', () => {
    input.value = input.value ** (1 / 2);
});

//cube root
document.getElementById('cube-root')
.addEventListener('click', () => {
    input.value = input.value ** (1 / 3);
});

//one by x
document.getElementById('one-by-x')
.addEventListener('click', () => {
    input.value = (1 / input.value).toFixed(2);
});

//abs x (|x|)
document.getElementById('abs')
.addEventListener('click', () => {
    input.value = Math.abs(input.value);
});

//abs2
document.getElementById('abs2')
    .addEventListener('click', () => {
        input.value = Math.abs(input.value);
    });

//exp
document.getElementById('exp')
.addEventListener('click', () => {
    if (operatorSymbols.includes(input.value.slice(-1))) {
        input.value = input.value.substring(0, input.value.length - 1) + ele.innerHTML;
    }
    else
        input.value += ".e";
});

//modulo
document.getElementById('mod')
.addEventListener('click', () => {
    if (operatorSymbols.includes(input.value.slice(-1))) {
        expression.value = expression.value.substring(0, expression.value.length - 1) + ele.innerHTML;
    }
    else {
        expression.value += input.value + "mod";
        input.value = "";
    }
});

//x power y
document.getElementById('x-power-y')
.addEventListener('click', () => {
    if (operatorSymbols.includes(input.value.slice(-1))) {
        expression.value = expression.value.substring(0, expression.value.length - 1) + ele.innerHTML;
    }
    else {
        expression.value += input.value + "^";
        input.value = "";
    }
});

//yth root of x
document.getElementById('yth-root-of-x')
.addEventListener('click', () => {
    if (operatorSymbols.includes(input.value.slice(-1))) {
        expression.value = expression.value.substring(0, expression.value.length - 1) + ele.innerHTML;
    }
    else {
        expression.value += input.value + "ythroot";
        input.value = "";
    }
});

//factorial
document.getElementById('fact')
.addEventListener('click', () => {
    if (operatorSymbols.includes(input.value.slice(-1))) {
        expression.value = expression.value.substring(0, expression.value.length - 1) + ele.innerHTML;
    }
    else {
        expression.value += factorial(input.value);
        input.value = "";
    }
});