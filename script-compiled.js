'use strict';

//zadanie1

var fitstWord = 'Hello';
var secondWord = 'World!';

console.log(fitstWord + ' ' + secondWord);

//zadanie2
var x = prompt('podaj pierwszy czynnik');
var y = prompt('podaj drugi czynnik');
var multiple = function multiple(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return x * y;
};

console.log('' + multiple(x, y));
console.log('' + multiple(4, 8));
console.log('' + multiple(2));

//zadanie3
var sum = 0;
var length = 0;
var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  args.forEach(function (arg) {
    return sum = sum + arg;
  });return sum = sum / args.length;
};

average(31, 6, 7, 4, 7);
console.log('' + sum);

//zadanie4
sum = 0;
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
var a = grades[0],
    b = grades[1],
    c = grades[2],
    d = grades[3],
    e = grades[4],
    f = grades[5],
    g = grades[6],
    h = grades[7],
    i = grades[8];

console.log(average(a, b, c, d, e, f, g, h, i));

//zadanie5
var structure = [1, 4, 'Iwona', false, 'Nowak'];
var number1 = structure[0],
    number2 = structure[1],
    firstName = structure[2],
    married = structure[3],
    lastName = structure[4];

console.log(firstName);
console.log(lastName);
