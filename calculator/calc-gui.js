var clickNumbers = function(e) {
    console.log("click number");
    console.log(e.target.innerHTML);
}

var clickOthers = function(e) {
    console.log("click other");
    console.log(e.target.innerHTML);
}

// console.log("calc-gui.js")
// input = {}
// input.init = function() {
//     var str = document.getElementById("input").value;
//     this.inputArr = str.split(" ");
// }
// input.isEmpty = function() {
//     return this.inputArr.length === 0;
// } 
// input.getNum = function() {
//     return Number(this.inputArr.shift());
// }
// input.getOperator = function() {
//     var op = this.inputArr.shift();
//     if(op === "+" || op === "-" || op === "*" || op === "/") {
//         return op;
//     }else {
//         return NaN;
//     } 
// }
// calculator = {}
// calculator.calculate = function(op,result,n2) {
//     switch(op) {
//     case "+" : 
//         result += n2; 
//         break;
//     case "-" : 
//         result -= n2;
//         break;
//     case "*" : 
//         result *= n2; 
//         break;
//     case "/" : 
//         result /= n2; 
//         break;
//     default:
//         result = "사칙연산만 입력해주세용";
//         break;
//     }
//     return result;
// }
// output = {}
// output.print = function(result) {
//     var out = document.getElementById("out");
//     out.innerHTML = result;
// }

// function calc() {
//     input.init();
//     var list = input.inputArr;
//     var result = input.getNum();
//     while(!input.isEmpty()) {
//         var op = input.getOperator();
//         var n2 = input.getNum();
//         result = calculator.calculate(op,result,n2);
//     }
//     output.print(result);
// }
