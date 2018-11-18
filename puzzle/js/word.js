//html Element
var word1 = document.getElementById('word1'); //answer
var word2 = document.getElementById('word2'); //buttons
var check = document.getElementById('check'); //word1 === word2?

var game = {'btns':[]};
game.words = ['apple','banana','car','door','emmit','fake','grooming','hire','icecream'];

game.choose = function() {
    var idx = Math.floor(Math.random() * this.words.length);
    this.answer =  this.words[idx];
    this.letters = this.answer.split('');
    word1.innerHTML = this.answer;
}
game.addButtons = function() {
    for (var i = 0; i < this.answer.length; i++) {
        var btn = document.createElement('button');
        btn.innerHTML = this.answer[i];
        word2.appendChild(btn);
        this.btns.push(btn);
    }
}
game.updateDisplay = function() {
    var gameStr = this.letters.join('');
    if(this.answer === gameStr) {
        check.innerHTML = "일치합니다"
    } else {
        check.innerHTML = "불일치합니다"
    }
}
game.init = function() {
    this.choose();
    this.addButtons();
    this.updateDisplay();
}
game.init();
game.copyBtnText = function() {
    for(var i = 0; i<this.letters.length; i++) {
        this.btns[i].innerHTML = this.letters[i];
    }
}


var swap = function() {
    for(var i = 0; i < (game.letters.length)/2; i++) {
        var temp = game.letters[i];
        game.letters[i] = game.letters[game.letters.length-1-i];
        game.letters[game.letters.length-1-i] = temp;
    }
    game.copyBtnText();
    game.updateDisplay();
}

var rshift = function() {
    var s = game.letters.pop();
    game.letters.unshift(s);
    game.copyBtnText();
    game.updateDisplay();
    
}
var lshift = function() {
    var s = game.letters.shift();
    game.letters.push(s);
    game.copyBtnText();
    game.updateDisplay();
}

//shuffle 부분

var toggle = Math.floor(Math.random() * 2) === 0;

if(toggle) {
    swap();
}

var n = Math.random()*(game.answer).length;
for(var i = 0; i < n; i++) {
    rshift();
}