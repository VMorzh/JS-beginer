// let n = -5555555555555555555555555599999999999999999999n;
// // console.log(n);
// // let b = null;
// // console.log(n + b);
// let c = Infinity;
// // console.log(-1 / 0);
// // console.log(n + c);
// // console.log(c > b);

// const t = "привіт";
// const p = `hello ${t} ${2 + 2}`;

// // console.log(typeof n);
// let yes = true;
// let no = false;

// // console.log(isFinite(100));
// console.log(typeof true);

// const a = 10;
// const b = `test  hello world`;
// const c = 1 - "t";
// let f = "5" ** "4";

// let g = 6 % 7;

// console.log(f, g);

// f = g++;

// console.log(f, g);
// f *= 5;
// console.log(f);

// let a = 1;
// a += 5;
// console.log(a);
// let foo = 9.5;
// foo %= 3;
// console.log(foo);

// const personAge = 5;
// const dogAge = "5";

// console.log(personAge !== dogAge);

/*урок Nr.6 логічні оператори*/

// const userRole = 1;
// const adminRole = 2;
// const productPrice = 100;

// const ivanRole = userRole;
// const ivanBalance = 300;

// const isAdmin = ivanRole === adminRole;
// const canBay = ivanBalance >= productPrice;

// const result1 = isAdmin === true;
// const result2 = canBay === true;

// const result = result1 === result2;

// console.log(result);
/*урок Nr.6  оператор перше позитивне|| "або" !!!!!!!!!!!!!! */
// const userRole = 1;
// const adminRole = 1;
// const productPrice = 400;

// const defaultUserName = null;
// const ivanName = null;

// const ivanRole = userRole;
// const ivanBalance = 300;

// const result = ivanRole === adminRole || ivanBalance >= productPrice;

// console.log(result);

// const authorName = ivanRole == adminRole || "adminNr";
// console.log(authorName);

/*урок Nr.6  оператор && "Та" або-навпаки!!!!!!!!!!!!!! */
// const userRole = 1;
// const adminRole = 2;
// const productPrice = 100;

// const defaultUserName = null;
// const ivanName = null;

// const ivanRole = userRole;
// const ivanBalance = 300;

// const result = ivanRole === adminRole && ivanBalance >= productPrice;

// console.log(result);

// const authorName = ivanRole !== adminRole || "Admin";

// console.log(authorName);
/*урок Nr.6  оператор  "??" перше наявне !!!!!!!!!!!!!! */
// const userRole = 1;
// const adminRole = 2;

// const productStockPrice = 0;
// const defaultProductPrice = null;
// const adminPrice = false;

// const productPrice =
//   adminPrice ?? productStockPrice ?? defaultProductPrice ?? 100;

// console.log("productPrice", productPrice);
// const defaultUserName = null;
// const ivanName = null;

// const ivanRole = adminRole;
// const ivanBalance = 300;

// const result = ivanRole === adminRole && ivanBalance >= productPrice;

// console.log(result);

// const authorName = (ivanRole === adminRole && "Admin") || "user";

// console.log(authorName);

/*урок Nr.6  оператор "!!" перетворює знач на логічн тип.  !=протилежне  */
// const userRole = 1;
// const adminRole = 2;

// const productStockPrice = 0;
// const defaultProductPrice = null;
// const adminPrice = false;

// const productPrice =
//   adminPrice ?? productStockPrice ?? defaultProductPrice ?? 100;

// console.log("productPrice", productPrice);
// const defaultUserName = null;
// const ivanName = "Ivan";

// const ivanRole = userRole;
// const ivanBalance = 300;

// const result = ivanRole === adminRole && ivanBalance >= productPrice;

// console.log(result);

// const authorName = !(ivanRole === adminRole && "Admin") && "User";

// console.log("authorName", authorName);

// console.log("ivanName", !!ivanName);

/*урок Nr.6  логічний оператор "||=" "&&=" "??=" присвоєння !!!!!!!!!!!!!! */

// let productTitle = "";
// productTitle ||= "Назва товару";
// console.log("productTitle", productTitle);

// let productTitle = "Навушники";
// productTitle &&= "Назва товару";
// console.log("productTitle", productTitle);

// let productTitle = "";
// productTitle ??= "Назва товару";
// console.log("productTitle", productTitle);

// let productTitle = null;
// productTitle ||= "Назва товару";
// console.log("productTitle", productTitle);
/* побітові оператори "&"обидва, "|"мінимум один, "^"лише один, “~”протилежне   *********************/
// console.log(a, a.toString(2));
// console.log(b, b.toString(2));

// const canRead = false;
// const canWrite = true;
// const canDelete = false;
// const canEdit = true;

// let userRole = 0b0101;
// let adminRole = 0b1111;

// let isAdmin = userRole & adminRole;

// console.log(isAdmin);

// let userRole = 0b0101;

// let adminRole = 0b1111;

// let user2Role = 0b0110;

// let friendRole = userRole | user2Role;
// let friendRole = userRole ^ user2Role;
// console.log(friendRole === 0b0011);
// let friendRole = userRole ^ user2Role;
// adminRole = ~userRole;

// console.log(adminRole);

/* побітові оператори "<<" зміщення вліво, ">>" зміщення вправо,  ">>>" зміщення вправо, без урахування отрицат чисел*****************/
// let freeTea = 0b00001;
// freeTea = freeTea << 1;

// console.log(freeTea.toString(2));
// freeTea = freeTea << 1;

// console.log(freeTea.toString(2));
// freeTea = freeTea << 1;

// console.log(freeTea.toString(2));
// freeTea = freeTea << 1;

// console.log(freeTea.toString(2));

// console.log(freeTea === 0b10000);

// let freeCava = 0b1000;
// freeTea = freeCava >> 1;

// console.log(freeTea.toString(2));
// freeTea = freeTea >> 1;

// console.log(freeTea.toString(2));
// freeTea = freeTea >> 1;

// console.log(freeTea.toString(2));

// console.log(freeTea === 0b0001);

/* побітові оператори присвоення ""об, "|"мінимум один, "^"лише , ********************/
// let freeTea = 0b10000;
// freeTea >>= 1;

// console.log(freeTea.toString(2));
// freeTea >>= 1;

// console.log(freeTea.toString(2));
// freeTea >>= 1;

// console.log(freeTea.toString(2));
// freeTea >>= 1;

// console.log(freeTea.toString(2));

// console.log(freeTea === 0b00001);

// const a = 0b0001;
// const b = 0b0010;
// const c = 0b0100;

// let settings = 0b0000;

// settings |= a;
// //0001
// settings |= b;
//0011

// console.log((settings & c) === 0b0000);
//0011
//0100
//==
//0000

// isButtonOn = !((settings & a) === 0b0000);
// console.log(isButtonOn);

/*урок Nr.7 Умовні розгалуження Тернарний оператор "?"*/
/****ключові слова "if" "else" ******/

/*!й приклад **************/
// const productName = "Мікрофон";
// const productDefault = "Назва товара";

// const newProductName = "Мікрофон 3000";
// const userRole = "admin";

// const updateProductName =
//   userRole === "admin"
//     ? console.log("isAdmin") || newProductName
//     : console.log("noAdmin") || productName;

// console.log(updateProductName);

/*1й приклад **************/
// const CUSTOM_NAME = "My robot";
// const MODE = 0;
// const ROOM = "Вітальня";

// const COMAND = "change name";

// if (COMAND === "change name" && MODE !== 0) {
//   const name = CUSTOM_NAME || "Robot v3412";
//   console.log(`Start ${name}`);
// }
// if (MODE === 0) {
//   console.log(`Robot is off`);
// }
// if (COMAND === "work") {
//   const mode = MODE;
//   const room = ROOM;

//   console.log(`Mode: ${mode}; Прибираю кімнату: ${room}`);
// }

/*2й приклад **************/
// const login = "user";
// const password = "123qwerty1";
// const isAdmin = true;
// const isLoggedIn = null;

// if (isLoggedIn === true) {
//   if (isAdmin) {
//     console.log("Перехід на стр /admin");
//   } else if (login === "demo") {
//     console.log("Перехід на стр /demo");
//   } else {
//     console.log("Перехід на стр /home");
//   }
// } else if (isLoggedIn === false) {
//   if (login && password) {
//     console.log("Token:", 1234567809);

//     if (isAdmin) {
//       console.log("Перехід на стр /admin");
//     } else {
//       console.log("Перехід на стр /home");
//     }
//   }
// } else if (isLoggedIn === null) {
//   console.log("Помилка");
// }

/*3й приклад **************/
// const price = 100;
// const useCashback = true;

// let cashbackLevel = 4;

// let totalPrice = null;
// let cashbackAmount = null;

// if (price < 100) {
//   console.log(" Кешбек для товара від 100 грн");
//   cashbackAmount = 0;
// } else if (cashbackLevel > 0) {
//   cashbackAmount = price * (cashbackLevel * 0.01);
// }
// cashbackLevel++;

// if (cashbackLevel > 5) {
//   cashbackLevel = 1;
// }

// if (useCashback > 0 && useCashback) {
//   totalPrice = price - cashbackAmount;
// }

// console.log(totalPrice);

/*4й приклад Switch/Вибір кейсів  **************/

/*так НЕ робимо, викоростовуємо case/switch*/
// const buttonType = "primary";
// if (buttonType === "primary") {
//   console.log("primary button");
// } else if (buttonType === "secondary") {
//   console.log("secondary button");
// } else if (buttonType === "basic") {
//   console.log("basic button");
// } else {
//   console.log("default button");
// }

// const buttonType = "123",
//   buttonColor = "red";

// switch (buttonType) {
//   case "main":
//     console.log("main");
//   case "global":
//   case "primary":
//     console.log("primary");
//     break;
//   case "second":
//   case "double":
//   case "secondary":
//     console.log("secondary");
//     break;

//   default:
//     console.log("default button");
// }
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
