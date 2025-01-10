function callback(x) {
  console.log("demo");
  x();
}

function f1() {
  console.log("first");
}
function f2() {
  console.log("scond");
}

callback(f1);
callback(f2);
