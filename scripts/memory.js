/* Memory section */
var memory = [];

//memory store
document.getElementById("memory-store")
.addEventListener('click',()=>{
    memory.push(Number(input.value));
});

//memory recall
document.getElementById("memory-recall")
.addEventListener('click',()=>{
    input.value = memory[memory.length-1];
});

//memory add
document.getElementById("memory-add")
.addEventListener('click',()=>{
    memory[memory.length-1] += Number(input.value);
});

//memory substract
document.getElementById("memory-sub")
.addEventListener('click',()=>{
    memory[memory.length-1] -= input.value;
});

//memory clear
document.getElementById("memory-clear")
.addEventListener('click',()=>{
    memory= [];
});
