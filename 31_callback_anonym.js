// let greeting = function () {
//   console.log("Good afternoon mr");
// };

// greeting();

//contoh callback anonym

function halo() {
  console.log("halo");
}

hola = () => console.log("hola");

function callback(operasi) {
  operasi();
}

callback(halo);
callback(hola);
callback(function () {
  console.log("fungsi anonim");
});
