let resultado = document.getElementById("result");

let operandoA;
let operandoB;
let operacion;

const cero = document.getElementById("n0");
const one = document.getElementById("n1");
const two = document.getElementById("n2");
const three = document.getElementById("n3");
const four = document.getElementById("n4");
const five = document.getElementById("n5");
const six = document.getElementById("n6");
const seven = document.getElementById("n7");
const eight = document.getElementById("n8");
const nine = document.getElementById("n9");
const resta = document.getElementById("minus");
const suma = document.getElementById("plus");
const multiplicacion = document.getElementById("multi");
const division = document.getElementById("divi");
const igual = document.getElementById("equal");
const punto = document.getElementById("dot");
const porcentaje = document.getElementById("percentage");
const plusminus = document.getElementById("plusminus");
const borrar = document.getElementById("reset");

const limpiar = () => {
  resultado.value = "";
};

const clear = () => {
  resultado.value = "";
  operandoA = 0;
  operandoB = 0;
  operacion = "";
};

const resolver = () => {
  let res = 0;
  switch (operacion) {
    case "-":
      res = parseFloat(operandoA) - parseFloat(operandoB);
      break;
    case "+":
      res = parseFloat(operandoA) + parseFloat(operandoB);
      break;
    case "*":
      res = parseFloat(operandoA) * parseFloat(operandoB);
      break;
    case "/":
      res = parseFloat(operandoA) / parseFloat(operandoB);
      break;
  }
  clear();
  resultado.value = res;
};

dot.addEventListener("click", function () {
  resultado.value = resultado.value + ".";
});

//Numeros

cero.addEventListener("click", function () {
  resultado.value = resultado.value + "0";
});

one.addEventListener("click", function () {
  resultado.value = resultado.value + "1";
});

two.addEventListener("click", function () {
  resultado.value = resultado.value + "2";
});

three.addEventListener("click", function () {
  resultado.value = resultado.value + "3";
});

four.addEventListener("click", function () {
  resultado.value = resultado.value + "4";
});

five.addEventListener("click", function () {
  resultado.value = resultado.value + "5";
});

six.addEventListener("click", function () {
  resultado.value = resultado.value + "6";
});

seven.addEventListener("click", function () {
  resultado.value = resultado.value + "7";
});

eight.addEventListener("click", function () {
  resultado.value = resultado.value + "8";
});

nine.addEventListener("click", function () {
  resultado.value = resultado.value + "9";
});

//Operaciones

resta.addEventListener("click", function () {
  operandoA = resultado.value;
  operacion = "-";
  limpiar();
});

suma.addEventListener("click", function () {
  operandoA = resultado.value;
  operacion = "+";
  limpiar();
});

multiplicacion.addEventListener("click", function () {
  operandoA = resultado.value;
  operacion = "*";
  limpiar();
});

division.addEventListener("click", function () {
  operandoA = resultado.value;
  operacion = "/";
  limpiar();
});

igual.addEventListener("click", function () {
  operandoB = resultado.value;
  resolver();
});

plusminus.addEventListener("click", function () {
  resultado.value = resultado.value * -1;
});

porcentaje.addEventListener("click", function () {
  resultado.value = resultado.value / 100;
});

borrar.addEventListener("click", clear);
