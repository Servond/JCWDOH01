console.log("Hello World");
console.log("Welcome");

// console -> terminal
// log -> logging / mencatat

// variable
// tempat untuk menyimpan data

// tipe data
// text atau string
// angka atau number
// boolean atau (true atau false)
// null atau kosong
// undefined atau tidak ada

// mendeklarasi sebuah variable atau kotak penyimpanan
let kotakSepatu = "adidas";
console.log(kotakSepatu);
kotakSepatu = "nikee";
console.log(kotakSepatu);

let kotakAngka = 5;
console.log(kotakAngka);

var kotakBuku = "harry potter";
var kotakBuku = "Detektif Conan";
console.log(kotakBuku);

// let _kotakPensil
// let $kotakPensil
let KotakPensil;
let kotakPensil;

// contoh reserved word
// tidak boleh
// let const = "string";

console.log(1 + "1" + 2);

// Template
const kotakBuah = "jeruk";
// kotakBuah = "apel";
console.log(kotakBuah);
console.log("ini adalah kotakBuah");
console.log(`ini adalah ${kotakBuah}`);

// build in method

// fungsi yang sudah dibuatkan dan bisa langsung digunakan

// string build in method
const text = "hello world";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log("semangka".toUpperCase());
console.log(text.replace(/l/g, "c"));
console.log(text.slice(0, 5));

// number build in method
const angka = 5;
console.log(angka.toString());

// Global Build in method
const textAngka = "5";
console.log(Number(textAngka) * 5);

// tipe data Date
let now = new Date();
console.log(now);

let lusa = new Date("2025-03-05");
console.log(lusa);

console.log(typeof lusa.getFullYear());
console.log(lusa.getMonth() + 1);
console.log(lusa.getDate());

console.log(now - lusa);

// basic operators
console.log(2 + 2, "addition");
console.log(2 - 2, "substraction");
console.log(2 * 2, "multiplication");
console.log(2 / 2, "division");
console.log(7 % 2, "modulo");
console.log(2 ** 2, "exponentation");

// unary binary operand

// unary
let x = 5;
x = -x;
console.log(x);

// binary
let i = 1;
console.log(i + 2);

// modify in place
let n = 3;
n += 10; // n = n + 10
n *= 5; // n = n * 5
console.log(n);

// increment & decrement
let j = 1;
j++; // j = j + 1;
j--; // j = j - 1;
console.log(j);

// postfix & prefix

// prefix
console.log(++j);

// postfix
console.log(j++);

// comparison operators

// equal
// hanya mengcompare value tanpa mementingkan tipe data

// strict equal
// akan mengcompare value dan tipe datanya

console.log(5 == 6);
console.log(5 == "5");

console.log(5 === "5");
console.log("apel" == "jeruk");

console.log(5 != 5);
console.log(5 !== "5");

console.log(1 > 4);
console.log(1 < 4);
console.log(1 > 1);

console.log(1 >= 1);
console.log(1 <= 1);

console.log(null === null);
