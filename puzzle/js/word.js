var str = document.getElementById('word1').innerHTML;
var word2 = document.getElementById('word2');

var game = {};
game.word = str.split('');
game.btns = [];
game.check = function() {
    if(game.word.join("") === str) {
        document.getElementById('check').innerHTML = "일치합니다"
    } else {
        document.getElementById('check').innerHTML = "불일치합니다"
    }
}
for (var i = 0; i < str.length; i++) {
    var btn = document.createElement('button');
    btn.innerHTML = str[i];
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