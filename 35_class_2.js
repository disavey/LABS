// class Kue {
//   constructor(rasa, warnaKrim) {
//     this.rasa = rasa;
//     this.warnaKrim = warnaKrim;
//   }

//   potong() {
//     console.log("kue dipotong nih");
//   }

//   makan() {
//     console.log("Makan kue");
//   }
// }

// let kueCoklat = new Kue("nanas", "kuning");
// kueCoklat.potong();
// kueCoklat.makan();

// console.log(kueCoklat);

//CONTOH KASUS

class Mobil {
  roda = 4;
  mesin = 1;
  // constructor(merk, roda, mesin){
  //     this.merk = merk
  //     this.roda = roda
  //     this.mesin = mesin
  // }
  maju() {
    console.log("maju");
  }
  mundur() {
    console.log("mundur");
  }
}

let avanza = new Mobil();
avanza.maju();
avanza.mundur();
console.log("jumlah roda : " + avanza.roda);
console.log("jumlah mesin  :" + avanza.mesin);

let fortuner = new Mobil();
fortuner.maju();
fortuner.mundur();
console.log("jumlah roda : " + fortuner.roda);
console.log("jumlah mesin  :" + fortuner.mesin);
