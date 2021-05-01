// létrehozzuk a változót és értéket adunk neki
// változó létrehozása: deklarálás
// értékadás = value assignment
let szam = 9;


// value assignment
// a bal oldalon lévő változóba bele töltődik a jobb oldalon levő érték
szam = 20;

// csak deklarálás
let myNumber;

// deklarálás három kulcsszóval lehet
// nem használjuk
var a;
// let-et akkor használjuk, ha később a változó értékét módosítani akarjuk 
let b;
// const akkor használjuk, ha nem akarjuk módosítani a változó értékét
const c = 10;

let szoveg = 'hello';

console.log('hello');


// tömb: olyan típus, ami több másik típust tud tárolni
const myArray = [3, 'hello', ['a', 'b']];

console.log(myArray);

// a tömbböt nullától indexeljük
console.log(myArray[0]);

// logikai érték (boolean), true vagy false lehet az értéke
let kapcsolo = true;

// javascript: dinamically typed programming language

console.log(typeof (kapcsolo));

function sayHello() {
  console.log('Hello!');
  // return undefined
}

function addTwoNumbers(a, b) {
  const sum = a + b;
  console.log(sum);
}

addTwoNumbers(5, 9);

sayHello();

function addThreeNumbers(a, b, c) {
  const sum = a + b + c;
  // return sum;
}

const result = addThreeNumbers(1, 2, 3);
console.log(result);

// elágazás: vezérlési szerkezet
if (kapcsolo === true) {
  console.log('a kapcsolo be van kapcsolva');
} else {
  console.log('a kapcsolo nincs be van kapcsolva');

}

let n = 9;

n !== 9 && n !== 3; // false
n !== 9 || n !== 3; // true

// ciklus: vezérlési szerkezet
// nullától 10-ig egyesével
for (let i = 0; i < 10; i++) {
  console.log(i + ' hello');
}

while (n >= 0) {
  console.log('ez egy while ciklus');
  // csökkentjük az n változó értékét 1-gyel
  n--;
}

const szamok = [2, 5, 4, 3];

console.log('a tömb hossza: ' + szamok.length)


// az i változó csak a for cikluson belül létezik
// block scope
for (let i = 0; i < szamok.length; i++) {
  if (szamok[i] === 5) {
    console.log('a tömb eleme: ' + szamok[i]);
  }
}


// function scope

function myFunc() {
  // lokális változó a myNum: csak a függvényen belül létezik
  const myNum = 10;
}


console.log('az n változó típusa: ' + typeof (n));

let eredmeny = parseInt('a');

console.log(eredmeny); // NaN: not a number

console.log(isNan(eredmeny));

// mindig 3db egyenlőságjellel vizsgáljuk az egyenlőséget
// mert a 2db egyenlőségjel nem vizsgál típust

0 == 0; // true
0 == '0'; // true!!

0 === '0'; // false

0 == ''; // true!!

0 == '\n'; // true!!

'' == '\n'; // false

console.log('ez egy uj sor:\n uj sorba kerül')