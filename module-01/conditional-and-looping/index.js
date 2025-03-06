const umur = 14;

// untuk membuat ktp
// 1. umur harus diatas atau sama dengan 17 - 21
// 2. umur diatas 21 maka seharusnya sudah memiliki ktp
console.log(Boolean(umur));

if (umur >= 17 && umur <= 21) {
  console.log("bisa membuat ktp");
} else if (umur > 21) {
  console.log("sudah memiliki ktp");
} else {
  console.log("tidak bisa membuat ktp");
}

const buah = "kelapa";

switch (buah) {
  case "jeruk":
    console.log("Rp. 15000/kg");
    break;
  case "semangka":
    console.log("Rp. 30000/kg");
    break;
  case "apel":
    console.log("Rp. 20000/kg");
    break;
  default:
    console.log("buah tidak ada");
}

// truthy

console.log(Boolean(" "));
console.log(Boolean("test"));
console.log(Boolean(1));
console.log(Boolean([]));
console.log(Boolean({}));

// falsy

console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

const mobil = "";

if (mobil === "Toyota" || mobil === "Jeep") {
  console.log("bisa offroad");
} else if (!mobil) {
  console.log("Tidak ada mobil");
}

const angka1 = 5;
const angka2 = 3;
const perkalian = angka1 * angka2;

if (perkalian) {
  console.log(`perkalian ${angka1} x ${angka2} = ${perkalian}`);
} else {
  console.log("masukkan input yang benar");
}

// Ternary operator
console.log(
  perkalian
    ? `perkalian ${angka1} x ${angka2} = ${perkalian}`
    : "masukkan input yang benar"
);

console.log(
  umur >= 17 && umur <= 21
    ? "bisa membuat ktp"
    : umur > 21
    ? "sudah memiliki ktp"
    : "belum bisa buat ktp"
);

// Short circuiting
const text = "test";
const result = text && "Ada isi";
console.log(result);

const result2 = text || "Tidak ada isi";
console.log(result2);

// Loop

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let i = 0;

while (true) {
  console.log(i);
  if (i === 2) {
    break;
  }
  i++;
}

i = 10;

while (i < 10) {
  console.log(i, "ini while");
  i++;
}

i = 10;

do {
  console.log(i, "ini do while");
  i++;
} while (i < 10);

for (let i = 1; i < 4; i++) {
  if (i == 2) {
    continue;
  }
  console.log(i);
}
