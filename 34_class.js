class Mobil {
  constructor(merk, model) {
    this.merk = merk;
    this.model = model;
  }

  klakson() {
    console.log("Tit");
  }
}

let mobilSaya = new Mobil("Toyota", "Sedan");
console.log(mobilSaya);
mobilSaya.klakson();
