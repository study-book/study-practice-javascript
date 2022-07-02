function example1() {
    i = 1;
}
// console.log(i); -> 에러 코드

function example2() {
    console.log(i);
}

example1();
example2();

for (var i = 0; i < 10; i++) {
}

console.log('last : ', i);

(() => {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
})();
// console.log('last : ', i); -> 에러 코드

console.log(myVar);
var myVar = 1;

console.log(myVar2);
myVar2 = 2;
console.log(myVar2);
var myVar2 = 1;

var myVar = 1;
var myVar = 2;
console.log(myVar)

var PI = 3.141592
PI = 35