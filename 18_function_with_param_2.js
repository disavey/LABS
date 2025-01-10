function cetakDataSiswa(
  nis = "000",
  nama = "dava",
  alamat = "Rais",
  kelas = "XII MM 1"
) {
  console.log("=====================");
  console.log("NIS : " + nis);
  console.log("Nama : " + nama);
  console.log("Alamat : " + alamat);
  console.log("Kelas : " + kelas);
}

cetakDataSiswa();
cetakDataSiswa("001");
cetakDataSiswa("002", "Ryaldi");
cetakDataSiswa("003", "Saviero", "Sidney");
