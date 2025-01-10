//CALLBACK ANONYM DENGAN PARAMETER

function kali (a,b){
    console.log(a * b)
}

function callback(operasi, a, b){
    operasi(a,b)
}

callback(kali, 2,2)
callback(function(a,b) {
    console.log(a + b)
}, 25, 5)