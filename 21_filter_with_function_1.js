let mahasiswa = [
  {
    nama: "Dava",
    usia: 210,
  },
  {
    nama: "Budi",
    usia: 22,
  },
  {
    nama: "Tono",
    usia: 15,
  },
  {
    nama: "Erik",
    usia: 17,
  },
];

function filterUsia(mahasiswa) {
  return mahasiswa.filter((m) => m.usia > 17);
}

let mahasiswaDiatas17 = filterUsia(mahasiswa);
console.log(mahasiswaDiatas17);
