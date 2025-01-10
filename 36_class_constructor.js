//CONSTRUCTOR
class Mobil {
  constructor(merk, roda, mesin) {
    this.merk = merk;
    this.roda = roda;
    this.mesin = mesin;
  }
  maju() {
    console.log("Mobil " + this.merk + " sedang maju");
  }
  mundur() {
    console.log("Mobil " + this.merk + " sedang mundur");
  }
}

let avanza = new Mobil("Avanza", "4", "1");
avanza.maju();
avanza.mundur();
console.log(avanza);

console.log("=======================================================");

let fortuner = new Mobil("Fortuner", "4", "2");
fortuner.maju();
fortuner.mundur();
console.log(fortuner);
