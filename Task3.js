//Task Week 1 number 2

// function number(x) {
//     let newNumber = x.reverse();
//         document.write(newNumber)
// }; 
// number([1,2,3,4]);

// Task Week 1 number 11

// let score = [80,45,30,45,70,70,80,90,91,88,80,83];
// let average = score.reduce((a,i) => (a + i)/score.length);
// document.write('Minimum = ' + Math.min(...score) + '<br/>');
// document.write('Maximum = ' + Math.max(...score) + '<br/>');
// document.write('Average = ' + average);

// // Task Week 2 number 7

// const alphabet = ['a','b','c','d','e'];
// const newAlphabet = alphabet.splice(2, 1);
// document.write(alphabet);

// Task Week 2 number 8

const firstNumber = [1,3,4,1,5,6];
const secondNumber = [7,2,4,1,5];
const joinAllNumber = [...firstNumber,...secondNumber];
let arrayNumber = [];

for(i = 0; i < joinAllNumber.length; i++) {
    if(!arrayNumber.includes(joinAllNumber[i])) {
        arrayNumber.push(joinAllNumber[i])
    }
}
let newNumber = arrayNumber.sort();
document.write(newNumber);