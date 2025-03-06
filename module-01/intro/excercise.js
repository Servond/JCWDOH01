// 1
const lr = 5;
const wr = 3;

const ar = lr * wr;
console.log(ar);

// 2
const pr = 2 * (lr + wr);
console.log(pr);

// 3

const rc = 5;

// diameter
const dc = 2 * rc;
console.log(dc);

console.log(Math.PI);
// circumference
const cc = Math.PI * dc;
console.log(cc);

// area
const ac = Math.PI * Math.pow(rc, 2);
const testAngka = 11500000.2048113123;
console.log(Number(ac.toString().match(/^-?\d+(?:\.\d{0,2})?/)));
console.log(Number(testAngka.toString().match(/^-?\d+(?:\.\d{0,2})?/)));

// 4
const at1 = 80;
const at2 = 65;
const at3 = 180 - (at1 + at2);
console.log(at3);

// 5

const days = 366;

const year = Math.floor(days / 365);
console.log(year);

const month = Math.floor((days % 365) / 30);
console.log(month);

const day = (days % 365) % 30;
console.log(day);

console.log(`${days} -> ${year} year, ${month} month, ${day} day`);

// 6

const dateFrom = new Date("2025-03-01");
const dateTo = new Date("2025-04-01");

const dateDiff = (dateTo - dateFrom) / (24 * 3600 * 1000);
console.log(dateDiff);
