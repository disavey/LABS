function resepNasiGoreng(nasi, telur, sayuran, bumbu) {
  var nasiGoreng = `Nasi goreng terbuat dari ${nasi}, ${telur}, ${sayuran}, dan ${bumbu}`;
  return nasiGoreng;
}

var hidangan = resepNasiGoreng(
  "nasi putih",
  "telur ayam",
  "bawang goreng",
  "kecap dan saos"
);

console.log(hidangan)
