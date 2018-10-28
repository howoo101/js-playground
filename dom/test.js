console.log("button.js");
var readInput = function() {
    var input = document.getElementById('input1')
    console.log(input.value)
}

// dom으로 버튼 추가
var test2 = document.getElementById('test2');
var btn2 = document.createElement('button');
btn2.innerHTML = "확인2";
btn2.onclick = readInput;
test2.appendChild(btn2);