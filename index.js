/*урок 11 вбудовані глобальні функции*/

// const code = `console.log("Hello world")`;
// eval(code);

// function calcScreenRation(w, h) {
//   let result = w / h;

//   return isFinite(result) ? result : null;
// }
// console.log(calcScreenRation(1920, "123"));

// function calcScreenRation(w, h) {
//   let result = w / h;

//   if (isNaN(result)) {
//     return "Error";
//   } else if (!isFinite(result)) {
//     return "is Infinity";
//   } else {
//     return result;
//   }
// }
// console.log(calcScreenRation(1920, 0));

// const num = parseInt("12px");
// console.log(num);

// function calcScreenRation(w, h) {
//   w = parseInt(w);
//   h = parseInt(h);

//   let result = w / h;

//   if (isNaN(result)) {
//     return "Error";
//   } else if (!isFinite(result)) {
//     return "is Infinity";
//   } else {
//     return result;
//   }
// }
// console.log(calcScreenRation("1920px", "1000px"));
// const num = parseFloat("1.555");
// console.log(num);

/*урок 12 вбудовані можливості для числових типів*/
// const a = Number(10);
// const b = Number.();
// a.toFixed
// console.log(a === b);

// let a = 0.1 + 0.2;
// let b = 0.3;

// if (a - b < Number.EPSILON && b - a < Number.EPSILON) {
//   console.log("a i b практично рівні");
// } else {
//   console.log("a i b не рівні");
// }

// const a = 0.00001;
// const b = 0.00002;
// const c = 0.00003;

// const d = a + b;
// console.log(d);

// console.log(d - c < Number.EPSILON && c - d < Number.EPSILON);

// const a = 0.00051;
// const b = 0.00052;
// const c = 0.00103;

// const d = a + b;
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MAX_SAFE_INTEGER);

// const a = 0.01;
// const b = 0.02;
// const c = 0.03;

// const d = a + b;

// console.log(Number.MAX_VALUE);

// console.log(d - c < Number.MIN_VALUE && c - d < Number.EPSILON);

/*Перервірка на ЦІЛЕ число !!!!!*/

// function reviewNumber(num) {
//   if (isNaN(num)) {
//     return console.log("Is Not a number", num);
//   }

//   if (!num && num !== 0) {
//     return console.log("Bad number", num);
//   }

//   if (!Number.isInteger(num)) {
//     return console.log("Fraction number", num);
//   }
//   return console.log(num);
// }
// reviewNumber("10.5");

// function reviewNumber(num) {
//   if (isNaN(num)) {
//     return console.log("Is Not a number", num);
//   }
//   if (!num && num !== 0) {
//     return console.log("Bad number", num);
//   }
//   if (!Number.isInteger(num)) {
//     return console.log("Fraction number", num);
//   }
//   if (!Number.isSafeInteger(num)) {
//     return console.log("Danger number", num);
//   }
//   return console.log(num);
// }

// reviewNumber(Number.MAX_SAFE_INTEGER + 12);

/* Вбудовані можливсті для!!! числ типів*/

// const a1 = Number(10);
// const a2 = a1.toFixed();
// Number(100).toFixed;

// (10).toExponential;
// 1000;
// 10000;

/* Number - більш технічний, старий формат створення числа, */
/* краще використати глобалФункцію parseInt() */
// const a1 = 1.025501;
// const a2 = parseInt("1000 f");
// const a3 = parseFloat(a1.toFixed(3));
// /*to Fixed превращает число в рядок, ParseFloat поверне нам десяткове число*/
// console.log(typeof a3, a3);

// const a1 = 1253.45601;
// const a2 = parseFloat(a1.toPrecision(2));
// console.log(a2);

// const a1 = 999989125345601;
// const a2 = parseInt(a1);
// const a3 = a1.toExponential();
// const a4 = parseFloat(a3);
// console.log(a3, a4);

// const a1 = 94567;
// const a2 = a1.toExponential();
// const a3 = parseFloat(a2);
// console.log(a1 === a3);

// const a1 = 94567;
// const a2 = a1.toExponential();
// const a3 = parseFloat(a2);
// const a4 = a3.toString(32);
// console.log(a4);
