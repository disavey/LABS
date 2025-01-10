let nilai = "a";
let predikat;

switch (nilai) {
  case "a":
    predikat = "bagus";
    break;
  case "b":
    predikat = "kurang bagus";
    break;
  case "c":
    predikat = "jelek juga ya";
    break;

  default:
    predikat = "nilai salah";
    break;
}

console.log("nilai : " + nilai);
console.log("predikat : " + predikat);
