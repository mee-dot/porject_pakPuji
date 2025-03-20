"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// console.log
console.log("Selamat datang di TypeScript");
// variable
let nama = "Helmi Luthfi Mahendra";
let npm = 22430115;
let mahasiswa = true;
console.log(nama);
// function tanpa parameter
function sayHello() {
    console.log("Halo, Selamat belajar");
}
sayHello();
// function dengan parameter
function intro(people) {
    console.log("Hallo, nama saya", people);
}
intro("Helmi");
// function dengan mengembalikan nilai
function sum(a, b) {
    return a * b;
}
console.log("Hasil dari 2 * 5 adalah =", sum(2, 5));
// Array
const buah = ["Apel", "Jeruk", "Alpukat"];
console.log(buah);
// Class constructor
class Brands {
    constructor(merk, warna, tahun) {
        this.merk = merk;
        this.warna = warna;
        this.tahun = tahun;
    }
    mobil() {
        console.log(`Mobil ini adalah ${this.merk} yang berwarna ${this.warna}. Mobil tersebut keluaran pada tahun ${this.tahun}`);
    }
}
const mobil1 = new Brands("Avanza", "Hitam", 2017);
const mobil2 = new Brands("Xenia", "Abu - Abu", 2018);
mobil1.mobil();
mobil2.mobil();
// Module
const module_1 = require("./module");
console.log("Hasil dari Module adalah", (0, module_1.Module)(5, 10));
