var input = {'array': []}
input.getInput = function() {
    return this.array.join("");
};

var output = {};
output.text = document.getElementById('output');

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

