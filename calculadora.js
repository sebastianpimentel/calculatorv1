let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let suma = document.getElementById("suma");
let resta = document.getElementById("resta");
let multi = document.getElementById("multi");
let division = document.getElementById("division");
let reset = document.getElementById("reset");
let igual = document.getElementById("igual");
let cajaTexto=document.getElementById("cajaTexto")

//funciones
const f1 = () => {
    cajaTexto.innerHTML += "1";
  };
  const f2 = () => {
    cajaTexto.innerHTML += "2";
  };
  const f3 = () => {
    cajaTexto.innerHTML += "3";
  };
  const f4 = () => {
    cajaTexto.innerHTML += "4";
  };
  const f5 = () => {
    cajaTexto.innerHTML += "5";
  };
  const f6 = () => {
    cajaTexto.innerHTML += "6";
  };
  const f7 = () => {
    cajaTexto.innerHTML += "7";
  };
  const f8 = () => {
    cajaTexto.innerHTML += "8";
  };
  const f9 = () => {
    cajaTexto.innerHTML += "9";
  };
  const f0 = () => {
    cajaTexto.innerHTML += "0";
  };

  btn1.onclick = function () {
    f1();
  };
  btn2.onclick = function () {
    f2();
  };
  btn3.onclick = function () {
    f3();
  };
  btn4.onclick = function () {
    f4();
  };
  btn5.onclick = function () {
    f5();
  };
  btn6.onclick = function () {
    f6();
  };
  btn7.onclick = function () {
    f7();
  };
  btn8.onclick = function () {
    f8();
  };
  btn9.onclick = function () {
    f9();
  };
  btn0.onclick = function () {
    f0();
  };