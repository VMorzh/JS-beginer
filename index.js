/* урок 8 Цикли!!!!!!!!!!!!***********/

// let x = 1;
// while (x < 5) {
//   console.log(x);
//   x++;
// }

// let count = 0;
// while (true) {
//   let a = 1;
//   console.log("Hello world!", a);
// }
// let isFast = true;

// while (count < 5) {
//   console.log("Hello world!", count);
//   if (isFast && count >= 3) {
//     count = 5;
//   } else {
//     count++;
//   }
// }

// const PRODUCT_AMOUNT = 6;
// const DISCOUNT_ADD = 2;

// let discountAmount = 0;
// let productCount = 0;

// while (
//   productCount < PRODUCT_AMOUNT &&
//   DISCOUNT_ADD <= 10 &&
//   discountAmount <= 10
// ) {
//   productCount++;

//   if (productCount <= 0) {
//     break;
//   }
//   if (productCount <= 3) {
//     discountAmount += 1;
//   } else if (productCount > 3 && productCount <= 5) {
//     discountAmount += 1.5;
//   } else if (productCount > 5 && productCount <= 8) {
//     discountAmount += 2;
//   } else if (productCount > 8) {
//     discountAmount += 2.5;
//   }
//   if (DISCOUNT_ADD) {
//     discountAmount += DISCOUNT_ADD;
//   }

//   console.log(productCount, discountAmount);
// }
// if (discountAmount > 10) {
//   discountAmount = 10;
// }
// console.log(`Знижка:`, discountAmount, "%");
// console.log(`Знижка для товарів:`, productCount);
// console.log(`товарів без Знижка :`, PRODUCT_AMOUNT - productCount);

// let container = 5;
// let storage = 20;

// let car = 3;
// do {
//   car++;

//   storage -= container;

//   console.log(car, storage);
// } while (car < 3);

// if (car > 3) {
//   console.log("need more car");
// }
// let start = 40;
// let goal = 100;

// let step = 0;
// let set = 8;
// let rest = 10;

// do {
//   if (step === 0) {
//     console.log("Start train");
//   }
//   start++;
//   step++;
//   if (step === goal / 2) {
//     console.log("complete 50%");
//   }
//   if (step === goal || start === goal) {
//     console.log("Finish train");
//     break;
//   }
//   if (step % rest === 0) {
//     console.log(`take a rest`);
//     continue;
//   }

//   if (step % set === 0) {
//     console.log(`done ${step / set} cet(s)`);
//   }

//   console.log(" in progress", step);
// } while (step < goal && start < goal);

/*ключове слово для (for) звичайного циклу,циклу з двома
лічильниками, вкладені . зовнішні  цикли !!!!
та використання Міток *******/
// let q = 0;
// main: for (let i = 0, j = 5; i <= j; i++) {
//   console.log("test", i, j);
//   if (i === 3) {
//     j++;
//   }
//   for (;;) {
//     console.log("Q", q);
//     q++;
//     if (q >= i) {
//       break main;
//     }
//   }
// }

let age = 25;
let hasExp = true;
let hasEdu = false;
let JS = true;

form: {
  if (age >= 18) {
    if (hasExp) {
      console.log("Confirmed");
    }

    if (hasEdu) {
      console.log("Confirmed");
    }
    if (JS) {
      console.log("Confirmed");
    }
  }

  if (age < 18) {
    console.log("Age not confirm");
  }
}

// if (!hasEdu) {
//     console.log("Edu not confirm");
//   }
// }
// if (!hasExp) {
//   console.log("Exp not confirm");
// }
