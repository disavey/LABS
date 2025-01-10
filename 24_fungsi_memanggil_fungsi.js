function cetak(data) {
  console.log(data);
}

function bagi(a, b) {
  return a / b;
}

function pembagian(c, d) {
  let hasil = bagi(c, d);
  cetak(c + " : " + d + " = " + hasil);
}

pembagian(10, 5);
