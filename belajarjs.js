// Contoh menggunakan if-else dan nested if
function nilaiHuruf(nilai) {
    if (nilai >= 90) {
        return "A";
    } else if (nilai >= 80) {
        return "B";
    } else if (nilai >= 70) {
        return "C";
    } else if (nilai >= 60) {
        return "D";
    } else {
        return "E";
    }
}

console.log("Contoh menggunakan if-else:");
console.log("Nilai 95 mendapatkan huruf " + nilaiHuruf(95));
console.log("Nilai 75 mendapatkan huruf " + nilaiHuruf(75));

// Contoh menggunakan switch case
function hariDalamSeminggu(hari) {
    switch (hari) {
        case "Senin":
        case "Selasa":
        case "Rabu":
        case "Kamis":
        case "Jumat":
            return "Hari kerja";
        case "Sabtu":
        case "Minggu":
            return "Hari libur";
        default:
            return "Tidak valid";
    }
}

console.log("\nContoh menggunakan switch case:");
console.log("Hari Senin adalah " + hariDalamSeminggu("Senin"));
console.log("Hari Minggu adalah " + hariDalamSeminggu("Minggu"));
console.log("Hari Tanggal adalah " + hariDalamSeminggu("Tanggal"));

// Contoh menggunakan for statement
console.log("\nContoh menggunakan for statement:");
for (let i = 1; i <= 5; i++) {
    console.log("Iterasi ke-" + i);
}

// Contoh menggunakan while
console.log("\nContoh menggunakan while:");
let counter = 0;
while (counter < 5) {
    console.log("Iterasi ke-" + counter);
    counter++;
}

// Contoh menggunakan do-while
console.log("\nContoh menggunakan do-while:");
let angka = 1;
do {
    console.log("Angka: " + angka);
    angka++;
} while (angka <= 5);

// Contoh menggunakan function
function tambah(a, b) {
    return a + b;
}

console.log("\nContoh menggunakan function:");
console.log("Hasil penjumlahan 3 + 5 = " + tambah(3, 5));