// 입력을 담당하는 객체
var input = {'array': []}
//입력받은 수식을 문자열로 리턴
input.getInput = function() {
    return this.array.join("");
};
//입력 배열을 초기화
input.removeAll = function(value) {
    this.array = [];
    this.array.push(value);
};

//수식이 비었는지 검사
input.isEmpty = function() {
    return input.array.length === 0;
};

//수식에서 값을 읽어옴
input.getValue = function() {
    var str = this.array.shift();
    var n = Number(str);
    return n;
};

//계산을 실행하기 전 준비 단계
//getValue()를 호출하기 전 반드시 수행되어야 함
input.prepareCalculate = function() {
    this.array = this.array.join("").split(" ");
};

//수식에서 연산자를 읽어옴
input.getOperator = function() {
    var str = this.array.shift();
    if (str === '+' || str === '-' || str === '*' || str === '/') {
        return str;
    } else {
        return NaN;
    }
    
};

//출력을 담당하는 객체
var output = {};
output.text = document.getElementById('output');
//계산결과를 ㅊ=출력
output.print = function(str) {
    this.text.innerHTML = str;
}
output.display = function() {
    this.text.innerHTML = input.getInput();
}

//계산을 담당하는 객체
var calculator = {};
calculator.calculate = function(result,n2,op) {
    switch(op) {
        case "+" : 
            result += n2; 
            break;
        case "-" : 
            result -= n2;
            break;
        case "*" : 
            result *= n2; 
            break;
        case "/" : 
            result /= n2; 
            break;
        default:
            result = "사칙연산만 입력해주세용";
            break;
        }
        return result;
}
//숫자 버튼의 이벤트 핸들러 함수
var clickNumbers = function(e) {
    console.log(e.target.innerHTML);
    var str = e.target.innerHTML;
    
    if (str === 'BS') {
        input.array.pop();
    } else if (str === '+' || str === '-' || str === '*' || str === '/') {
        input.array.push(' ' + str + ' ');
    } else {
        input.array.push(str);
    }
    
    
    if(input.isEmpty()) {
        output.text.innerHTML = "Empty";
    }else {
        output.display();
    }
    
}

// '=' 버튼의 핸들러 함수
var showResult = function() {
    input.prepareCalculate();
    console.log(input.array);
    var result = input.getValue();
    while(!input.isEmpty()) {
        var op = input.getOperator();
        var n2 = input.getValue();
        result = calculator.calculate(result,n2,op);
    }
    output.print(result);
    input.removeAll(result);
}

