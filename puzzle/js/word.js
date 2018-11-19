//html Element
var word1 = document.getElementById('word1'); //answer
var word2 = document.getElementById('word2'); //buttons
var check = document.getElementById('check'); //word1 === word2?
var correct = document.getElementById('correct') // correct check

var game = {
    'btns':[],
    'maxPlay':3,
    'current':0
};
game.words = ['apple','banana','car','door','emmit','fake','grooming','hire','icecream'];

game.choose = function() {
    var idx = Math.floor(Math.random() * this.words.length);
    this.answer =  this.words[idx];
    this.letters = this.answer.split('');
    word1.innerHTML = this.answer;
};
game.addButtons = function() {
    for (var i = 0; i < this.answer.length; i++) {
        var btn = document.createElement('button');
        btn.innerHTML = this.answer[i];
        word2.appendChild(btn);
        this.btns.push(btn);
    }
};
game.removeButtons = function() {
    for (var i = 0; i < this.btns.length; i++) {
        word2.removeChild(this.btns[i]);
    }
};
game.isCorrect = function() {
    return this.answer === this.letters.join('');
};
game.updateDisplay = function() {
    if(this.isCorrect()) {
        check.innerHTML = "일치합니다"
    } else {
        check.innerHTML = "불일치합니다"
    }
};
game.init = function() {
    this.choose();
    this.addButtons();
    this.updateDisplay();
};
game.init();
game.copyBtnText = function() {
    for(var i = 0; i<this.letters.length; i++) {
        this.btns[i].innerHTML = this.letters[i];
    }
};

game.swap = function() {
    for(var i = 0; i < (game.letters.length)/2; i++) {
        var temp = game.letters[i];
        game.letters[i] = game.letters[game.letters.length-1-i];
        game.letters[game.letters.length-1-i] = temp;
    }
    game.copyBtnText();
    game.updateDisplay();
};
game.rshift = function() {
    var s = this.letters.pop();
    this.letters.unshift(s);
    this.copyBtnText();
    this.updateDisplay();
};
game.lshift = function() {
    var s = this.letters.shift();
    this.letters.push(s);
    this.copyBtnText();
    this.updateDisplay();
};
game.progress = function() {
    if (this.isCorrect()) {
        this.current++;
        this.removeButtons();
        this.init();
        this.swap();
        var str="";
        for(var i = 0; i<this.current; i++) {
            str += "O";
        }
        correct.innerHTML = str;
    }

    if(game.current === game.maxPlay) {
        alert("GOOD Thanks for playing!");
    }
};
var swap = function() {
    game.swap();
    game.progress();
};
var rshift = function() {
    game.rshift();
    game.progress();
};
var lshift = function() {
    game.lshift();
    game.progress();
};

//shuffle 부분

game.shuffle = function() {
    var toggle = Math.floor(Math.random() * 2) === 0;

    if(toggle) {
        swap();
    }

    var n = Math.random()*((game.answer).length-1)+1;
    for(var i = 0; i < n; i++) {
        rshift();
    }
};
game.shuffle();
