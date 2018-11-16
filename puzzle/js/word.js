var word1 = document.getElementById('word1');
var word2 = document.getElementById('word2');
var check = document.getElementById('check');
var words = ['apple','banana','car','door','emmit','fake','grooming','hire','icecream'];


var game = {};
game.choice = function() {
    var idx = Math.floor(Math.random() * words.length);
    return words[idx];
}
var answer = game.choice();
word1.innerHTML = answer;
console.log(answer); 

game.word = answer.split('');
game.btns = [];

game.check = function() {
    if(answer === game.word.join('')) {
        check.innerHTML = "일치합니다"
    } else {
        check.innerHTML = "불일치합니다"
    }
}
game.check();
for (var i = 0; i < answer.length; i++) {
    var btn = document.createElement('button');
    btn.innerHTML = answer[i];
    word2.appendChild(btn);
    game.btns.push(btn);
}
var swap = function(event) {
    for(var i = 0; i < (game.word.length-1)/2; i++) {
        var temp = game.word[i];
        game.word[i] = game.word[game.word.length-1-i];
        game.word[game.word.length-1-i] = temp;
    }
    game.btnCopy();
    game.check();
}

game.btnCopy = function() {
    for(var i = 0; i<this.word.length; i++) {
        this.btns[i].innerHTML = this.word[i];
    }
}
var rshift = function(event) {
    var s = game.word.pop();
    game.word.unshift(s);
    game.btnCopy();
    game.check();
    
}
var lshift = function(e) {
    var s = game.word.shift();
    game.word.push(s);
    game.btnCopy();
    game.check();
}

//shuffle 부분

var toggle = Math.floor(Math.random() * 2) === 0;

if(toggle) {
    swap();
}

var n = Math.random()*answer.length;
for(var i = 0; i < n; i++) {
    rshift();
}