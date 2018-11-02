var input = {'array': []}
input.getInput = function() {
    return this.array.join("");
};

var output = {};
output.text = document.getElementById('output');

var clickNumbers = function(e) {
    console.log(e.target.innerHTML);
    var str = e.target.innerHTML;
    
    switch (str) {
        case 'BS':
        input.array.pop();
        break;
        case '+':
        input.array.push(' ' + str + ' ');
        break;
        case '-':
        input.array.push(' ' + str + ' ');
        break;
        case '/':
        input.array.push(' ' + str + ' ');
        break;
        case '*':
        input.array.push(' ' + str + ' ');
        break;
        default:
        input.array.push(str);
    
    }
    
    if(input.array.length === 0) {
        output.text.innerHTML = "Empty";
    }else {
        output.text.innerHTML = input.getInput();
    }
    
}

var showResult = function(e) {
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
