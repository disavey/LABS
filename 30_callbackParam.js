function kali(a,b){
console.log("Hasil kali dari " + a + " dan " + b + " adalah " + (a * b))
}

function bagi(a,b){
console.log("Hasil bagi dari " + a + " dan " + b + " adalah " + (a / b))
}

function kurang(a,b){
console.log("Hasil kurang dari " + a + " dan " + b + " adalah " + (a - b))
}

function tambah(a,b){
console.log("Hasil jumlah dari " + a + " dan " + b + " adalah " + (a + b))
}

function kalkulator(operasi,a,b){
    operasi(a,b)
}

kalkulator(kali, 2,5)
kalkulator(bagi, 20,2)
kalkulator(kurang, 10,9)
kalkulator(tambah, 8,9)