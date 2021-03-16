var text = '';
var x = 'hello world oke lorem ipsum dolor. Aku mau belajar react.js. Hey kamu mau kemana?. Kapan kita jalan bareng lagi. Hello all.';
x = x.toLowerCase();

var sentence = x.split('.');
for(var i = 0; i < sentence.length; i++) {
    var word = [];
    word = sentence[i].split(' ');
    for(var y = 0; y < word.length; y++) {
        if(word[y] == 'hello') {
            text += sentence[i] + '<br/>';
        }
    }
}
document.write(text);