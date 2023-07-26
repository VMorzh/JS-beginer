let n = -5555555555555555555555555599999999999999999999n;
console.log(n);
let b = null;
console.log(n + b);
let c = Infinity;
console.log(-1 / 0);
console.log(n + c);
console.log(c > b);

const t = "привіт";
const p = `hello ${t} ${2 + 2}`;

console.log(typeof n);
let yes = true;
let no = false;

console.log(isFinite(100));
console.log(typeof true);

  const a = 10;
  const b = `test  hello world`;
  const c = 1 - "t";
  let f = "5" ** "4";

  let g = 6 % 7;

  console.log(f, g);

  f = g++;

  console.log(f, g);
  f *= 5;
  console.log(f);

  let a = 1;
  a += 5;
  console.log(a);
  let foo = 9.5;
  foo %= 3;
  console.log(foo);

  const personAge = 5;
  const dogAge = "5";

  console.log(personAge !== dogAge);

/*урок Nr.6 логічні оператори*/

  const userRole = 1;
  const adminRole = 2;
  const productPrice = 100;

  const ivanRole = userRole;
  const ivanBalance = 300;

  const isAdmin = ivanRole === adminRole;
  const canBay = ivanBalance >= productPrice;

  const result1 = isAdmin === true;
  const result2 = canBay === true;

  const result = result1 === result2;

  console.log(result);
/*урок Nr.6  оператор перше позитивне|| "або" !!!!!!!!!!!!!! */
  const userRole = 1;
  const adminRole = 1;
  const productPrice = 400;

  const defaultUserName = null;
  const ivanName = null;

  const ivanRole = userRole;
  const ivanBalance = 300;

  const result = ivanRole === adminRole || ivanBalance >= productPrice;

  console.log(result);

  const authorName = ivanRole == adminRole || "adminNr";
  console.log(authorName);

/*урок Nr.6  оператор && "Та" або-навпаки!!!!!!!!!!!!!! */
  const userRole = 1;
  const adminRole = 2;
  const productPrice = 100;

  const defaultUserName = null;
  const ivanName = null;

  const ivanRole = userRole;
  const ivanBalance = 300;

  const result = ivanRole === adminRole && ivanBalance >= productPrice;

  console.log(result);

  const authorName = ivanRole !== adminRole || "Admin";

  console.log(authorName);
/*урок Nr.6  оператор  "??" перше наявне !!!!!!!!!!!!!! */
  const userRole = 1;
  const adminRole = 2;

  const productStockPrice = 0;
  const defaultProductPrice = null;
  const adminPrice = false;

  const productPrice =
    adminPrice ?? productStockPrice ?? defaultProductPrice ?? 100;

  console.log("productPrice", productPrice);
  const defaultUserName = null;
  const ivanName = null;

  const ivanRole = adminRole;
  const ivanBalance = 300;

  const result = ivanRole === adminRole && ivanBalance >= productPrice;

  console.log(result);

  const authorName = (ivanRole === adminRole && "Admin") || "user";

  console.log(authorName);

/*урок Nr.6  оператор "!!" перетворює знач на логічн тип.  !=протилежне  */
  const userRole = 1;
  const adminRole = 2;

  const productStockPrice = 0;
  const defaultProductPrice = null;
  const adminPrice = false;

  const productPrice =
    adminPrice ?? productStockPrice ?? defaultProductPrice ?? 100;

  console.log("productPrice", productPrice);
  const defaultUserName = null;
  const ivanName = "Ivan";

  const ivanRole = userRole;
  const ivanBalance = 300;

  const result = ivanRole === adminRole && ivanBalance >= productPrice;

  console.log(result);

  const authorName = !(ivanRole === adminRole && "Admin") && "User";

  console.log("authorName", authorName);

  console.log("ivanName", !!ivanName);

/*урок Nr.6  логічний оператор "||=" "&&=" "??=" присвоєння !!!!!!!!!!!!!! */

  let productTitle = "";
  productTitle ||= "Назва товару";
  console.log("productTitle", productTitle);

  let productTitle = "Навушники";
  productTitle &&= "Назва товару";
  console.log("productTitle", productTitle);

  let productTitle = "";
  productTitle ??= "Назва товару";
  console.log("productTitle", productTitle);

  let productTitle = null;
  productTitle ||= "Назва товару";
  console.log("productTitle", productTitle);
/* побітові оператори "&"обидва, "|"мінимум один, "^"лише один, “~”протилежне   *********************/
  console.log(a, a.toString(2));
  console.log(b, b.toString(2));

  const canRead = false;
  const canWrite = true;
  const canDelete = false;
  const canEdit = true;

  let userRole = 0b0101;
  let adminRole = 0b1111;

  let isAdmin = userRole & adminRole;

  console.log(isAdmin);

  let userRole = 0b0101;

  let adminRole = 0b1111;

  let user2Role = 0b0110;

  let friendRole = userRole | user2Role;
  let friendRole = userRole ^ user2Role;
  console.log(friendRole === 0b0011);
  let friendRole = userRole ^ user2Role;
  adminRole = ~userRole;

  console.log(adminRole);

/* побітові оператори "<<" зміщення вліво, ">>" зміщення вправо,  ">>>" зміщення вправо, без урахування отрицат чисел*****************/
  let freeTea = 0b00001;
  freeTea = freeTea << 1;

  console.log(freeTea.toString(2));
  freeTea = freeTea << 1;

  console.log(freeTea.toString(2));
  freeTea = freeTea << 1;

  console.log(freeTea.toString(2));
  freeTea = freeTea << 1;

  console.log(freeTea.toString(2));

  console.log(freeTea === 0b10000);

  let freeCava = 0b1000;
  freeTea = freeCava >> 1;

  console.log(freeTea.toString(2));
  freeTea = freeTea >> 1;

  console.log(freeTea.toString(2));
  freeTea = freeTea >> 1;

  console.log(freeTea.toString(2));

  console.log(freeTea === 0b0001);

/* побітові оператори присвоення ""об, "|"мінимум один, "^"лише , ********************/
  let freeTea = 0b10000;
  freeTea >>= 1;

  console.log(freeTea.toString(2));
  freeTea >>= 1;

  console.log(freeTea.toString(2));
  freeTea >>= 1;

  console.log(freeTea.toString(2));
  freeTea >>= 1;

  console.log(freeTea.toString(2));

  console.log(freeTea === 0b00001);

  const a = 0b0001;
  const b = 0b0010;
  const c = 0b0100;

  let settings = 0b0000;

  settings |= a;
   0001
  settings |= b;
 0011

  console.log((settings & c) === 0b0000);
 0011
 0100
 ==
 0000

  isButtonOn = !((settings & a) === 0b0000);
  console.log(isButtonOn);

/*урок Nr.7 Умовні розгалуження Тернарний оператор "?"*/
/****ключові слова "if" "else" ******/

/*!й приклад **************/
  const productName = "Мікрофон";
  const productDefault = "Назва товара";

  const newProductName = "Мікрофон 3000";
  const userRole = "admin";

  const updateProductName =
    userRole === "admin"
      ? console.log("isAdmin") || newProductName
      : console.log("noAdmin") || productName;

  console.log(updateProductName);

/*1й приклад **************/
  const CUSTOM_NAME = "My robot";
  const MODE = 0;
  const ROOM = "Вітальня";

  const COMAND = "change name";

  if (COMAND === "change name" && MODE !== 0) {
    const name = CUSTOM_NAME || "Robot v3412";
    console.log(`Start ${name}`);
  }
  if (MODE === 0) {
    console.log(`Robot is off`);
  }
  if (COMAND === "work") {
    const mode = MODE;
    const room = ROOM;

    console.log(`Mode: ${mode}; Прибираю кімнату: ${room}`);
  }

/*2й приклад **************/
  const login = "user";
  const password = "123qwerty1";
  const isAdmin = true;
  const isLoggedIn = null;

  if (isLoggedIn === true) {
    if (isAdmin) {
      console.log("Перехід на стр /admin");
    } else if (login === "demo") {
      console.log("Перехід на стр /demo");
    } else {
      console.log("Перехід на стр /home");
    }
  } else if (isLoggedIn === false) {
    if (login && password) {
      console.log("Token:", 1234567809);

      if (isAdmin) {
        console.log("Перехід на стр /admin");
      } else {
        console.log("Перехід на стр /home");
      }
    }
  } else if (isLoggedIn === null) {
    console.log("Помилка");
  }

/*3й приклад **************/
  const price = 100;
  const useCashback = true;

  let cashbackLevel = 4;

  let totalPrice = null;
  let cashbackAmount = null;

  if (price < 100) {
    console.log(" Кешбек для товара від 100 грн");
    cashbackAmount = 0;
  } else if (cashbackLevel > 0) {
    cashbackAmount = price * (cashbackLevel * 0.01);
  }
  cashbackLevel++;

  if (cashbackLevel > 5) {
    cashbackLevel = 1;
  }

  if (useCashback > 0 && useCashback) {
    totalPrice = price - cashbackAmount;
  }

  console.log(totalPrice);

/*4й приклад Switch/Вибір кейсів  **************/

/*так НЕ робимо, викоростовуємо case/switch*/
  const buttonType = "primary";
  if (buttonType === "primary") {
    console.log("primary button");
  } else if (buttonType === "secondary") {
    console.log("secondary button");
  } else if (buttonType === "basic") {
    console.log("basic button");
  } else {
    console.log("default button");
  }

  const buttonType = "123",
    buttonColor = "red";

  switch (buttonType) {
    case "main":
      console.log("main");
    case "global":
    case "primary":
      console.log("primary");
      break;
    case "second":
    case "double":
    case "secondary":
      console.log("secondary");
      break;

    default:
      console.log("default button");
  }
/* урок 8 Цикли!!!!!!!!!!!!***********/

  let x = 1;
  while (x < 5) {
    console.log(x);
    x++;
  }

  let count = 0;
  while (true) {
    let a = 1;
    console.log("Hello world!", a);
  }
  let isFast = true;

  while (count < 5) {
    console.log("Hello world!", count);
    if (isFast && count >= 3) {
      count = 5;
    } else {
      count++;
    }
  }

  const PRODUCT_AMOUNT = 6;
  const DISCOUNT_ADD = 2;

  let discountAmount = 0;
  let productCount = 0;

  while (
    productCount < PRODUCT_AMOUNT &&
    DISCOUNT_ADD <= 10 &&
    discountAmount <= 10
  ) {
    productCount++;

    if (productCount <= 0) {
      break;
    }
    if (productCount <= 3) {
      discountAmount += 1;
    } else if (productCount > 3 && productCount <= 5) {
      discountAmount += 1.5;
    } else if (productCount > 5 && productCount <= 8) {
      discountAmount += 2;
    } else if (productCount > 8) {
      discountAmount += 2.5;
    }
    if (DISCOUNT_ADD) {
      discountAmount += DISCOUNT_ADD;
    }

    console.log(productCount, discountAmount);
  }
  if (discountAmount > 10) {
    discountAmount = 10;
  }
  console.log(`Знижка:`, discountAmount, "%");
  console.log(`Знижка для товарів:`, productCount);
  console.log(`товарів без Знижка :`, PRODUCT_AMOUNT - productCount);

  let container = 5;
  let storage = 20;

  let car = 3;
  do {
    car++;

    storage -= container;

    console.log(car, storage);
  } while (car < 3);

  if (car > 3) {
    console.log("need more car");
  }
  let start = 40;
  let goal = 100;

  let step = 0;
  let set = 8;
  let rest = 10;

  do {
    if (step === 0) {
      console.log("Start train");
    }
    start++;
    step++;
    if (step === goal / 2) {
      console.log("complete 50%");
    }
    if (step === goal || start === goal) {
      console.log("Finish train");
      break;
    }
    if (step % rest === 0) {
      console.log(`take a rest`);
      continue;
    }

    if (step % set === 0) {
      console.log(`done ${step / set} cet(s)`);
    }

    console.log(" in progress", step);
  } while (step < goal && start < goal);

/*ключове слово для (for) звичайного циклу,циклу з двома
лічильниками, вкладені . зовнішні  цикли !!!!
та використання Міток *******/
  let q = 0;
  main: for (let i = 0, j = 5; i <= j; i++) {
    console.log("test", i, j);
    if (i === 3) {
      j++;
    }
    for (;;) {
      console.log("Q", q);
      q++;
      if (q >= i) {
        break main;
      }
    }
  }

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

  if (!hasEdu) {
      console.log("Edu not confirm");
    }
  
  if (!hasExp) {
    console.log("Exp not confirm");
  }
  /* урок 9 Функції!!!!!!!!!!!!***********/

    function calcSpace(amount, unit = "px") {
      return `${amount * 4}${unit}`;
    }

    console.log(calcSpace(5));
  /* урок 9  *******
  Рекурсія викликає сама себе в середине функції!!!!!!!!!!!***********/

  function playTrackById(trackId) {
     search file and launch - запустити пісню
  }
    function stopTrackById(trackId) {
       отримати файл- поставити пісню на паузу
    }
  function play(trackName, trackId) {
    console.log(`Запускаємо ${trackName}`);
    playTrackById(trackId);
  }

  function end(oldTrackName, newTrackName) {
    console.log(`Завершили грати ${oldTrackName}`);
    console.log(`Наступний трек ${newTrackName}`);
  }

  function pausePlay(currentTrackName) {
    console.log(`Трек ${currentTrackName} не на паузі`);
    reloadDataTrack();
    play();
  }
  function reloadDataTrack(amount) {
    if (amount <= 0) {
      console.log("Дані оновлені");
    } else {
      console.log("Повторне оновлення");
        пенвий ко для оновлення данніх. Recurcia)
      reloadDataTrack(amount - 1);
    }
  }
  reloadDataTrack(5);
  /* урок 9  *******
  Замикання  Closures !!!!!!!!!!!***********/
  function pauseStopByTrack(trackName, trackId) {
    let originTrackname = trackName;
    let originTrackId = trackId;

    return function pauseStop() {
      stopTrackById(originTrackId);
      console.log(`Трек ${originTrackname} на паузі`);
    };
  }

  /*сюда повертаемо функцию pauseStopByTrack и вона попадає в змінну!!!!!!!!!!!!*/
  const pauseStop123 = function pauseStop(originTrackId, originTrackname) {
    stopTrackById(originTrackId);
    console.log(`Трек ${originTrackname} на паузі`);
  };
  pauseStop123();
  const pauseStop456 = pauseStopByTrack("IT Console log");
  pauseStop456();

  /* урок 9  *******
  Функціональний вираз ... який повертає функц callback !!!!
  */

    const runCommand = function (command, errorFn) {
      const result = command();
      if (!result) {
        return errorFn();
      }
    };
    runCommand(
      function () {
        console.log("Start");
        return 1 - 1;
      },
      function () {
        console.log("Error");
      }
    );

  /*Стрілкова функція (Arrow function !!!!!!!!!!**********/
  () => {
     тут код
  };
    return () => {
      stopTrackById(originTrackId);
      console.log(`Трек ${originTrackname} на паузі`);
    };

    const runCommand = function (command, errorFn) {
      const result = command();
      if (!result) {
        return errorFn();
      }
    };
    runCommand(
      () => {
        console.log("Start");
        return 1 - 1;
      },
      () => console.log("Error")
    );
  /* стрілкова більшь сучасніша! її варто використовувати в якості аргументів, коли вкладуємо функцію в змінну, або коли повертаємо функцію */
    const testFunc = () => {
      let test = 10;
      return test;
    };
    console.log(testFunc());
  function stopTrackById(trackId) {
         отримати файл- поставити пісню на паузу
    console.log(`отримати - постви пісні з TrackID`);
  }

/*Каррірована функція (curried function !!!!!!!!!!**********/
  function pauseStopByTrack(trackName, trackId) {
    let isPause = null;

    return () => {
      if (isPause == true) {
        return;
      }

      stopTrackById(trackId);
      console.log(`Трек ${trackName} на паузі`);
      isPause = true;
    };
  }

  const pauseStop45 = pauseStopByTrack("IT Console log", 10);
  pauseStop45();
  pauseStop45();
  pauseStop45();

  /*Memoization /          !!!!!!!!!!**********/
  const memoCalcSpace = (oldAmount = null, oldUnit = null, oldResult = null) => {
    return (amount, unit = "px") => {
      if (oldAmount === amount && unit === oldUnit) {
        console.log("memo");

        return oldResult;
      }

      oldResult = `${amount * 4}${unit}`;
      oldAmount = amount;
      oldUnit = unit;

      return oldResult;
    };
  };
  const calcSpace = memoCalcSpace();
  console.log(calcSpace(4));
  console.log(calcSpace(4));

/*Композиція функцій  !!!!!!!!!!**********/

const restartTrack = (trackName, trackId) => {};

const memoCalcSpace = (oldAmount = null, oldUnit = null, oldResult = null) => {
  return (amount, unit = "px") => {
    if (oldAmount === amount && unit === oldUnit) {
      console.log("memo");

      return oldResult;
    }

    oldResult = `${amount * 4}${unit}`;
    oldAmount = amount;
    oldUnit = unit;

    return oldResult;
  };
};
const calcSpace = memoCalcSpace();
console.log(calcSpace(4));
console.log(calcSpace(4));

const getSpaceFromDesign = (componentName) => {
  switch (componentName) {
    case "button":
      return 4;
    case "card":
      return 3;
    default:
      return 2;
  }
};
const isMobile = true;

const amount = getSpaceFromDesign("button");
const amountMobile = isMobile ? amount / 2 : amount;
const amountInpx = calcSpace(amountMobile);

const calcSpaceFromDesign = (componentName) => {
  const result = getSpaceFromDesign(componentName);

  return calcSpace(isMobile ? result / 2 : result);
};
console.log("   /");
console.log(calcSpaceFromDesign("button"));
/*урок 11 вбудовані глобальні функции*/

const code = `console.log("Hello world")`;
eval(code);

function calcScreenRation(w, h) {
  let result = w / h;

  return isFinite(result) ? result : null;
}
console.log(calcScreenRation(1920, "123"));

function calcScreenRation(w, h) {
  let result = w / h;

  if (isNaN(result)) {
    return "Error";
  } else if (!isFinite(result)) {
    return "is Infinity";
  } else {
    return result;
  }
}
console.log(calcScreenRation(1920, 0));

const num = parseInt("12px");
console.log(num);

function calcScreenRation(w, h) {
  w = parseInt(w);
  h = parseInt(h);

  let result = w / h;

  if (isNaN(result)) {
    return "Error";
  } else if (!isFinite(result)) {
    return "is Infinity";
  } else {
    return result;
  }
}
console.log(calcScreenRation("1920px", "1000px"));
const num = parseFloat("1.555");
console.log(num);

/*урок 12 вбудовані можливості для числових типів*/
const a = Number(10);
const b = Number.();
a.toFixed
console.log(a === b);

let a = 0.1 + 0.2;
let b = 0.3;

if (a - b < Number.EPSILON && b - a < Number.EPSILON) {
  console.log("a i b практично рівні");
} else {
  console.log("a i b не рівні");
}

const a = 0.00001;
const b = 0.00002;
const c = 0.00003;

const d = a + b;
console.log(d);

console.log(d - c < Number.EPSILON && c - d < Number.EPSILON);

const a = 0.00051;
const b = 0.00052;
const c = 0.00103;

const d = a + b;
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);

const a = 0.01;
const b = 0.02;
const c = 0.03;

const d = a + b;

console.log(Number.MAX_VALUE);

console.log(d - c < Number.MIN_VALUE && c - d < Number.EPSILON);

/*Перервірка на ЦІЛЕ число !!!!!*/

function reviewNumber(num) {
  if (isNaN(num)) {
    return console.log("Is Not a number", num);
  }

  if (!num && num !== 0) {
    return console.log("Bad number", num);
  }

  if (!Number.isInteger(num)) {
    return console.log("Fraction number", num);
  }
  return console.log(num);
}
reviewNumber("10.5");

function reviewNumber(num) {
  if (isNaN(num)) {
    return console.log("Is Not a number", num);
  }
  if (!num && num !== 0) {
    return console.log("Bad number", num);
  }
  if (!Number.isInteger(num)) {
    return console.log("Fraction number", num);
  }
  if (!Number.isSafeInteger(num)) {
    return console.log("Danger number", num);
  }
  return console.log(num);
}

 reviewNumber(Number.MAX_SAFE_INTEGER + 12);

/* Вбудовані можливсті для!!! числ типів*/

const a1 = Number(10);
const a2 = a1.toFixed();
Number(100).toFixed;

(10).toExponential;
1000;
10000;

/* Number - більш технічний, старий формат створення числа, */
/* краще використати глобалФункцію parseInt() */
const a1 = 1.025501;
const a2 = parseInt("1000 f");
const a3 = parseFloat(a1.toFixed(3));
/*to Fixed превращает число в рядок, ParseFloat поверне нам десяткове число*/
console.log(typeof a3, a3);

const a1 = 1253.45601;
const a2 = parseFloat(a1.toPrecision(2));
console.log(a2);

const a1 = 999989125345601;
const a2 = parseInt(a1);
const a3 = a1.toExponential();
const a4 = parseFloat(a3);
console.log(a3, a4);

const a1 = 94567;
const a2 = a1.toExponential();
const a3 = parseFloat(a2);
console.log(a1 === a3);

const a1 = 94567;
const a2 = a1.toExponential();
const a3 = parseFloat(a2);
const a4 = a3.toString(32);
console.log(a4);
/*урок 13!!! вбудовані можливості для Рядків******/

const a = "HeolloWorold";
console.log(a.length);

console.log(String.fromCodePoint(128515));
console.log(String.fromCharCode(65));

const b = "©123456";
console.log(b.codePointAt(0));
console.log(String.fromCodePoint(169));

console.log(String.raw`www.test/come\HP\work\js`);
console.log(a.concat("      ", b, " ", "!"));

console.log(a.includes("He", 2));
console.log(a.indexOf("l"));
console.log(a.lastIndexOf("ol"));

console.log(a.startsWith("eo", 1));
console.log(a.endsWith("d"));

/** charAt вже устаревает використовуем .at */
console.log(a.at(0));

const c = "HelloWorld";
console.log(c.padStart(15, "Start"));

const d = "HelloWorld  ";
console.log(d.padEnd(15, "End"));

console.log(c.repeat(5));

console.log(c.slice(0, 5));
console.log(c.slice(-5));

console.log(c.toUpperCase());
console.log(c.toLowerCase());
const d = "   Hello World   ";
console.log(c.trim(), 1);

// /*  Урок 14 МАссиви*/

const a = 10;
const b = 20;
const c = 30;

const getOne = () => 1;
let list = [
  function Name() {},
  100,
  "Text",
  null,
  undefined,
  1 + 2,
  5 < 6,
  getOne(),
  a,
  b,
  c,
];

console.log(list);

const testArr = [];

testArr[0] = "Start";
testArr[1] = 2;
testArr[2] = 20;
testArr[testArr.length] = 30;
testArr[testArr.length] = 40;

console.log(testArr[testArr.length - 1]);

/*testArr["test"] = "Test123"; так не використвуємо бо губиться суть масиву*/
/* console.log(testArr.test);*/

delete testArr[0];

console.log(testArr);

const big = [[[1], [2, 3, 4, 5], [3]], [[2]], [[3]]];

console.log(big[0][1][2]);

const locationі = [
  [100, 200],
  [105, 205],
  [110, 190],
];

for (const point of locationі) {
  for (const coord of point) {
    console.log(coord);
  }
}

for (const pointIndex in location) {
  console.log(location[pointIndex]);

  for (const coordIndex in location[pointIndex]) {
    console.log(location[pointIndex][coordIndex]);
  }
}

/* in рідко використвуєтся,of зручніше*** нижче перетворимо!!! на звичайний цикл for*/

for (let i = 0; i < location.length; i++) {
  console.log(location[i]);

  for (let j = 0; j < location[i].length; j++) {
    console.log(location[i][j]);
  }
}

const location = [
  [100, 200],
  [105, 205],
  [110, 190],
  //   [120, 180],
];

const [loc1, ...rest] = location;

const [[p1, p2], loc3, loc4 = "Test"] = rest;

console.log(p1, p2);

let l1 = [2, 3, 4];
let l2 = [1, 2, 3];

const l3 = [100, ...(l1 || [])];

console.log(l1.toString(), l3.toString());
console.log(l1, l3);
delete l1[0];

console.log(l1, l2);

[l1, l2] = [l2, l1];

console.log(l1, l2);

function printFullname([name, surname, lastname, ...arg]) {
  //   console.log(arg);
  //   return arg.toString();

  return `${name} ${surname} ${lastname} ${
    arg.length ? `(${arg.toString()})` : ""
  }`;
}
console.log(printFullname(["Ivan", "Ivanenko", "Ivanov", "Admin", "18"]));

function sumAllNum(...nums) {
  let sum = 0;

  for (const n of nums) {
    sum += n;
  }
  return [sum, nums.length];
}
// console.log(sumAllNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16));

const [sum, numLength] = sumAllNum(
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16
);
console.log(sum, numLength);
/*  Урок 15 ОБ"ЄКТИ ********/

const key = "fgjhf56245qwerty123";

const a = {
  amount: 100,
  [key]: "HelloWorld",

  [key]: {
    [key]: "Ivan",
    age: 35,
  },
};
console.log(a);

console.log(a[key]);

console.log(a.amount);

const b = {};
console.log(b);

delete a.amount;
console.log(a);

/* !!!!!!!!!!!!!!!!робимо ітерацію об'єкта*******************/
const person = {
  name: "Ivan",
  age: 25,
  occupation: "Developer software",

  address: {
    city: "Kiev",
    street: "Shevchenko str.",
    housNr: 10,
  },
};

for (const key in person) {
  const item = person[key];

  if (typeof person[key] === "object") {
    for (const key2 in item) console.log(item[key2]);
  } else {
    console.log(item);
  }
}

const a = { test: 1 };
const b = a;
console.log(a === b);

/* !!!!!!!!!!!!!!!!Деструктуризацію об'єкта*******************/

/*тут мі можемо в основний обьєкт персон, покласти інший обьект **/
const role = {
  value: "admin",
  status: 3,
};

const person = {
  name: "Ivan",
  age: 25,
  occupation: "Developer software",

  info: role,

  address: {
    city: "Kiev",
    street: "Shevchenko str.",
    housNr: 10,
  },
  getAddress: function () {
    return this.address;
  },
};
const person2 = { ...person };

console.log(person.getAddress());

console.log("name" in person);
/* за допомогою оператора (in) "в" перевіряємо в консоли буде вертатись,  true або false, також можно за допомогою !! **/

const {
  name,
  age,
  address: { city, street, zipcode = "02001" },
  ...rest
} = person;

console.log(age, name, city, street, zipcode);
console.log(rest);

function getAddress({
  address: { city, street = "Не вказано", housNr, zipcode = 1000 } = {
    city: "Не вказано",
    street: "Не вказано",
    housNr: 10,
    zipcode: 1000,
  },
}) {
  return `Your address: ${city} ${street} ${housNr} ${zipcode}`;
}
const test = getAddress({});
const test = getAddress({ address: { street: "Hello", city: "Kyiv" } });
console.log(test);

function getAddress({ address }) {
  if (address) {
    const { city, street = "Не вказано", housNr, zipcode = 1000 } = address;

    return `Your address: ${city} ${street} ${housNr} ${zipcode}`;
  }

  return `немає данних`;
}
const test = getAddress({ city: "Kyiv" });
console.log(test);

/*що таке Literal ???? ****/
const b = String("Test");
console.log(b);

/* только для Демо! вбудовуємо свою власну функцию!!!!!!!!!! */
Number.prototype.toMyString = function () {
  console.log(this);

  return `Число: ${this}`;
};
const b = 1;
const c = b.toMyString();
console.log(c);

function Test() {
  this.world = "World";

  return "Hello" + this.world;
}

Test.hello = "Hello";
console.log(Test());
/* Урок №16 Символ ************/
// const user = {
//   name: "Olga",
//   id: 123451,
//   bookId: null,

//   getPhone(book) {
//     return book[this.bookId];
//   },
// };

// const phoneBook = {
//   olga: "+38067433551",
// };

// // ............

// function addToPhoneBook(phone, user) {
//   const key = Symbol(user.id);

//   phoneBook[key] = phone;

//   user.bookId = key;
// }

// addToPhoneBook("+38067433551", user);
//////.............................
/*21:22*/

// console.log(user.getPhone(phoneBook));
// console.log(phoneBook);

/* неунікальний Symbol.for */
//const a = Symbol.for('1')
//const b = Symbol.for('1')
//console.log(a, b);

let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;

    return this;
  },
  next() {
    return this.current <= this.to
      ? { done: false, value: this.current++ }
      : { done: true };
  },
};

// for (let num of range) {
//   console.log(num);
// }

// const iterator = range[Symbol.iterator]();

// do {
//   console.log(iterator.current);

//   result = iterator.next();
// } while (!result.done);

/*!!!!!!!!! может подойти для слайдеру, там де зміна карточки картинок товару*/
const arr = [1, 2, 3, 4, 5];
const iterator = arr[Symbol.iterator]();
result = iterator.next();
do {
  console.log(result.value);
  result = iterator.next();
} while (!result.done);

// /*  Урок 17 Вбудовані функции для Масивів ч1*/////////////////
const obj = {
  0: "Hello",
  1: "World",
  2: "!!!",
  length: 3,
  prefix: "():",
};

console.log(
  Array.from(
    obj,
    function (elem, index) {
      //   console.log(this.length);
      console.log(elem, index);

      return `${this.prefix}${elem}`;
    },
    obj
  )
);
///...
// console.log(
//   Array.isArray(arr));
/*чітко на рівні данних визначає? чи це массив, чи ні*/

// let arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6, 5, 7, 8, 9];

// console.log(Array.of(...arr1, ...arr2));
/*!!! квадратні дужки[замість Array.of   */

// console.log(arr1.at(10));

// console.log(-(arr1.length - arr1.push(10, 20, 30, 40)));
// console.log(arr1);

// console.log(arr1.pop());
// console.log(arr1);

// console.log(arr1.shift());
// console.log(arr1);

// console.log(arr1.unshift(0, 1));
// console.log(arr1);

// console.log(arr2.includes(5));

// console.log(arr2.indexOf(50));

// console.log(arr2.lastIndexOf(5));

/* обьеднаня масивів ************************/

// const arr3 = [...arr1, ...arr2];
// console.log(arr3);
/*аналог с конкат*/
// const arr3 = arr1.concat(...arr2);
// console.log(arr3);

// let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr1);

// arr1.copyWithin(2, 6, 9);

// console.log(arr1);

// arr1.fill([1, 2], 6, 9);
// console.log(arr1);

// arr1.reverse();
// console.log(arr1);

// const filterFn = (value, index, array) => value % 2 === 0;
// const filteredArr = arr1.filter(filterFn);
// console.log(filteredArr);

const sortFn = (elem1, elem2) => {
  // let result = elem1 - elem2;
  // if (elem1 % 2 === 0) {
  //   result += 10;
  // }
  // return elem1 < elem2 ? 1 : -1;
  // return result;

  /* Зробимо сорутвання не просто більше-меньш,!!! а по лівій парні... а по правій непарні***/
  if (elem1 % 2 === elem2 % 2) {
    return 0;
  } else if (elem1 % 2 !== 0 && elem2 % 2 === 0) {
    return 1;
  } else {
    return -1;
  }
};
const sortedArr = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].sort(
  sortFn
);
console.log(sortedArr);

console.log(["Arabic", "Info", "Zero", "City"].sort());

//................

console.log(arr2.some((elem, index, array) => elem < 0));


// /*  Урок 18 Вбудовані функции для Масивів ч2*////////////////
const userList = [
  { id: 6412, name: "Anton", age: 41, balance: 300 },
  { id: 54, name: "Ivan", age: 35, balance: 0 },
  { id: 1, name: "Dima", age: 19, balance: 1200 },
];

const result = userList.map((user, index, array) => {
  user.balanceLimit = 1000 - user.balance;

  if (user.balanceLimit < 0) {
    user.balanceLimit = 0;
  }

  return user.name;
});
console.log(result.join(", "));

const result = userList.reduce((num, user, userIndex, array) => {
  console.log(num, user.age);
  return user.age > num ? user.age : num;
}, 1);

 let minAge = 30;

 const userBigAge = userList.sort((user1, user2) => {
   return user2.age - user1.age;
 });

 const userBigAge = userList.find(({ age }) => age >= minAge);

 const userBigAge = userList.findIndex(({ age }) => age >= minAge);

 const userBigAge = userList.findLast(({ age }) => age >= minAge);

 console.log(userBigAge);

 console.log(userList.keys());

/*Syper iterator!! 19 */

 const iter = userList.values();
 console.log(iter);

 const result = iter.next();

 console.log(result);

 for (const elem of iter) {
   console.log(elem);
 }

/* Join Sepereator!!!!!!!!!!!!!!!!!!!!!!*/
 const arr = ["Apple", "Hotdog", "Banana", "Milk"];
 console.log(arr.join("..."));
 const arrSmall = arr.splice(1, 0, ...userList);

 const arrSmall = arr.slice(1, 3);
 console.log(arrSmall);

...........................
 const flatArray = [
   [100, 105],
   [200, 205],
   [220, 230],
   [400, 455],
 ];

 console.log(flatArray.flat(2));

 console.log(flatArray.map((el) => [...el, el[0] - el[1]]));

const flatArray = [
  [
    [100, 105],
    [200, 205],
  ],
  [
    [220, 230],
    [400, 455],
  ],
];

const result = flatArray.flatMap((el) => {
  return el.map((it) => {
    return it[0] - it[1];
  });
});
console.log(result);
....

result.forEach((elem, index, array) => {
  console.log(elem);
});
/*  Урок 19 Вбудовані можливості для ОБ"ЄКТів ********/
const article = {
  info: {
    title: "My article",
    description: "This is info about article",
  },
  id: 105423,
  categoryId: 1423,
  LikeAmount: 442,
};
const ARTICLE_FIELD = {
  title: "ID статті",
  description: "заголовок статті",
};
articlePhoto = {
  photoUrl: "...url",
  photold: 100,
  photoType: "big",
};

articleCommentList = {
  list: [{ id: 4323, user: "Ivan", message: "Крутий контент" }],
};
Object.assign(article, articlePhoto, articleCommentList);
console.log(article);
console.log(Object.entries(article.info));

const formList = Object.entries(article.info);

const formListLayout = formList.map(([key, value]) => {
  return [
    `<p> <strong> ${ARTICLE_FIELD[key]} </strong> <br> <span>  ${value} <span> `,
  ];
});
console.log(formListLayout);

const objArr = [
  ["id", 10043],
  ["Ivan", "Крутий контент"],
  ["price", 1203],
];
console.log(Object.fromEntries(objArr));

console.log(article.hasOwnProperty("id"));

/* ......Перевірка властивості на перераховність* propertyIsEnumerable( ) prop */
console.log(article.propertyIsEnumerable("test"));

/*Замороженний обьект!!!!!!!!!!!!!!*/
Object.freeze(article);
console.log(Object.isFrozen(article));

Object.preventExtensions(article);
article.test = "33215631";
console.log(article.test);

Object.seal(article);
delete article.id;
console.log(article.id);

console.log(Object.isSealed(article));

console.log(Object.keys(article));

/*Це вбудована функція, яка повертає масив з ключами доступних властивостей об'єкта*/
console.log(Object.values(article.info));


/*  Урок 20 множина ********/

const userIdList = new Set([40132, 45451, 65431, 506541]);
 console.log(userIdList);

 for (const value of userIdList) {
   console.log(value);
 }

/* або так запишемо, аналогічно вийде  ............. */

  userIdList.forEach((value, value2, set) => console.log(value));
 console.log(userIdList.size);

 =====
 userIdList.add(40132);

 console.log(userIdList);
 console.log(userIdList.size);
 =====

 userIdList.add(40133);
 console.log(userIdList);
 console.log(userIdList.size);

 =====

 userIdList.delete(40133);
 console.log(userIdList);
 console.log(userIdList.size);
 ===
 console.log(userIdList.has(40133));
 console.log(userIdList.has(40132));
 ===
 userIdList.clear();
 console.log(userIdList);

 const key = userIdList.values();
 console.log(key);

 const entry = userIdList.entries();

 const obj = Object.fromEntries(entry);
 console.log(obj);

 const valueList = userIdList.values();

 const arr = Array.from(valueList);
 console.log(arr);
 const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

 const set = new Set(arr);

  const arr2 = Array.from(set);
 const arr2 = [...set];

 console.log(arr2);
 const categoryList = new Set();

 function addCategory(category) {
   if (categoryList.has(category)) {
     console.log("Ця категорія вже є");
     return false;
   }

   categoryList.add(category);
   return true;
 }

 console.log(addCategory("спорт"));
 console.log(addCategory("спорт"));
 console.log(addCategory("їжа"));

 result = commonElements (array1, array2);
 console. log (result)

const students = [
  { id: 1, name: "John", course: "Math" },
  { id: 2, name: "Jane", course: "Science" },
  { id: 3, name: "Adam", course: "Math" },
  { id: 4, name: "Eve", course: "English" },
  { id: 5, name: "Kate", course: "Science" },
];

const courseList = new Set(students.map((student) => student.course));
console.log(courseList);
 console.log(Array.from(courseList));
/*  Урок 21 СЛОВНИК Просунутій тип данних ********/
const button = new Map([
  ["color", "red"],
  ["size", "32px"],
]);
console.log(button);

const obj = {
  color: "red",
  size: 32 + "px",
};

const set = new Set(["red", "32px"]);

const button2 = new Map(Object.entries(Object.fromEntries(set.entries())));
console.log(button2);

const button3 = new Map(set.entries());
console.log(button3.entries());

const set2 = new Set(button.keys());
console.log(set2);

const button = new Map([
  ["color", "red", "32px"],
  ["size", "32px"],
]);

for (const value in Object.fromEntries(button.entries())) {
  console.log(value);
}

for (const [key, value] of button) {
  console.log(key, value);
}

button.forEach((value, key, map) => console.log(value, key, map));

console.log(button.size);

button.set("weight", 600);
console.log(button.get("weight"));

console.log(button.delete("weight"));
console.log(button.has("weight"));
console.log(button.has("color"));

button.clear();
console.log(button);

/* 1й приклад!!!!!!!!!!!!! словника - для зміни мов*/
const LANG_LIST = {
  UA: "uk-UA",
  EU: "ea-US",
};
const activeLang = LANG_LIST.UA;
const product = {
  price: 100,
  amount: 3,
  info: new Map([
    [
      LANG_LIST.UA,
      {
        title: "Загаловок",
        info: "Інформація",
      },
    ],
    [
      LANG_LIST.EU,
      {
        title: "Title",
        info: "Info",
      },
    ],
  ]),
};
console.log(product);
const info = product.info.get(activeLang);
console.log(info);

console.log(product.info.has(activeLang));

/* 2й приклад!!!!!!!!!!!!*/
const user1 = {
  id: 1323,
  name: "Ivan",
};
const user2 = {
  id: 4231,
  name: "Anton",
};
const product1 = {
  id: 5314,
  title: "Mob Phone",
};
const product2 = {
  id: 5335,
  title: "Apple",
};


const userProduct = new Map();

userProduct.set(user1, product1).set(user2, product2);
console.log(userProduct);

console.log(userProduct.has(user1));

console.log(userProduct.get(user1));

const productClientList = new Map([[product1, new Set()]]);

productClientList.set(product1, new Set());

productClientList.set(product1, productClientList.get(product1).add(user1));

console.log(productClientList);

productClientList.set(product1, productClientList.get(product1).add(user2));
console.log(productClientList);

const hasUser = productClientList.get(product1).has(user1);
console.log(hasUser);


/*  Урок 22 JSON / URL Просунуті тип данних ********/
const roleField = "roleName";

const data = {
  id: 1043,
  login: "user3431",
  password: "123451we@",
  [roleField]: "Admin",
  go() {
    console.log("go");
  },
  test1: {
    test2: 123,
  },
};

const jsonData = JSON.stringify(
  data,
  (key, value) => {
    if (key === roleField) {
      return null;
    }
    if (typeof value === "string") {
      return value.toUpperCase();
    }

    if (typeof value === "number") {
      return value * 10;
    }
    return value;
  },
  4
);

console.log(jsonData);

const parseData = JSON.parse(jsonData, (key, value) => {
  if (key === roleField) {
    return "Admin";
  }
  if (typeof value === "string") {
    return value.toLowerCase();
  }

  if (typeof value === "number") {
    return value / 10;
  }
  return value;
});
console.log(parseData);
......

const url = new URL("https:www.example.com/path/info#how-to-do").hash;

console.log(url.slice(1));

const url = new URL("https:admin:12345@example.com:8080/path");
console.log(url.password);

const url = new URL("https:example.com/path?param=value#section")
  .searchParams;
console.log(url);
console.log(url.has("q"));
console.log(url.get("name"));

console.log(url.getAll("q"));

const url = new URL("https:google.com/search");
url.searchParams.append("q", "cat photo");
console.log(url.href);

/*  Урок 23 Data Вбудовані можливості: Дата, час...!!! ********/

const date = new Date();
// /*просто дейт виводить в 0-му таймзон*/
// console.log(date);

// const date = Date.now();
/*Date.now повертає миллисекунди*/

const dateString = date.toISOString();

console.log("year", date.getFullYear());
date.setFullYear(2020);
console.log("year", date.getFullYear());
// console.log(date.getFullYear());

console.log("month", date.getMonth());
date.setMonth(1);
console.log("month", date.getMonth());

console.log("date", date.getDate());
date.setDate(27);
console.log("date", date.getDate());

console.log("min", date.getMinutes());
date.setMinutes(26);
console.log("min", date.getMinutes());

console.log("sec", date.getSeconds());
console.log(date.setSeconds(27));
console.log("sec", date.getSeconds());

console.log("ms", date.getMilliseconds());
date.setMilliseconds(501);
console.log("ms", date.getMilliseconds());

console.log(date.toDateString());

// console.log(dateString);
// console.log(new Date(dateString));
/*зробимо на 5000 милисекунд довше час*/
// let date2 = Date.parse(dateString) + 5000;
// let date2 = Date.parse(dateString) + 1000 * 60 * 5;
// console.log(date2);

/*date.toString виводить в нормальному таймзон, тобто мій час!!*/
// console.log(date.toString());

// /*date.toString виводить в 0 таймзон, GMT час! вирахувааня через нульнову таймзону, варто використовувату*/
// console.log(date.toUTCString());
// console.log(date.toISOString());

// /*можно вивести лише дату, або час*/
// console.log(date.toDateString());
// console.log(date.toTimeString());

// const zone = date.getTimezoneOffset() / -60;
// console.log(zone);

const user = -3;

function getUserTimeZone(timezone) {
  // let date = Date.now();

  /* створюємо ДАТУ та час,,,,,,,,,,,,,*/
  let date = new Date(Date.UTC(2023, 5, 26, 12, 30, 0, 0));
  // console.log(date.getTime());
  // console.log(date.getHours());
  // console.log(date.getUTCHours());

  /*тут результатом будут миллисекунди!що добре для обчислень,
  едине що далі ці значення треба вкласти в змінну!*/
  date.setHours(date.getUTCHours() + timezone);
  // console.log(date.toUTCString());

  // const myTimezone = date.getTimezoneOffset() / -60;
  // console.log(myTimezone);
  // date.setTime(date.getTime() - 1000 * 60 * 60 * myTimezone);
  // date.setTime(date.getTime() + 1000 * 60 * 60 * myTimezone);
  // date -= 1000 * 60 * 60 * myTimezone;
  return date;
}
// console.log(new Date(1687782600000).toString());
const userDate = getUserTimeZone(user);
// console.log(userDate.toString());
// console.log(userDate.toUTCString());

// console.log(userDate.getHours());
// console.log(userDate.getUTCHours());
// console.log(userDate.toTimeString());

// console.log(new Date(getUserTimeZone(user)).toString());
// console.log(new Date().toUTCString());

/*  Урок 25 : Консоль...!!! ********/
const counterLabel = "Timer";

console.time(counterLabel);
console.count(counterLabel);
console.groupCollapsed("Group 1");
console.log("Test 1");
console.warn("Test 2");
console.groupCollapsed("Group 2");

console.timeLog(counterLabel);
console.count(counterLabel);

console.debug("Test 3");
console.groupEnd();

console.groupEnd();

console.timeEnd(counterLabel);
console.countReset(counterLabel);

const test1 = () => console.trace("Hello!");
const test2 = () => test1();
const test3 = () => test2();
test3();

const data = [
  { name: "John", age: 25, city: "New York" },
  { name: "Alice", age: 30, city: "London" },
];

console.table(data, ["name", "age", "city"]);

const a = 5;
const b = 10;

const result = a > b;

console.assert(result, "Info: x не дорівнює y");

/* console.clear - одразу ж очищає консоль */

console.log(
  "%cHello World",
  "font-size: 40px; color: yellow; background-color: blue;"
);



/*  Урок 28 : Обробка помилок...!!! ********/

// function getUserData(userId) {
//   try {
//     const a = 10;
//     a = 5;

//     // ... робить запит до бази даних
//   } catch (err) {
//     // err - помилка про те, що дані з сервера не можуть бути отриманні
//     const newError = new Error(
//       `Помилка. Неможливо отримати дані користувача ${userId}`,
//       {
//         cause: err,
//       }
//     );
//     console.log(newError.toString());
//   }
// }
// getUserData(10123);

// ///************/
// function updateUserData(userId) {
//   try {
//     const data = getUserData(userId);
//     data.name = "Ivan";
//     // ...
//   } catch (err) {
//     const newError = new Error(
//       `Помилка. Неможливо отримати дані користувача ${userId}`,
//       {
//         cause: err,
//       }
//     );
//     console.log(newError.message);
//   }
// }
// updateUserData(3123);

function sumNum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Аргументи не є числами");
  }
  return a + b;
}
try {
  sumNum(10, "abc");
} catch (err) {
  console.log(err.message);
}
/*  Урок 29 : ООП ..!!! ********/
/* Наслідування(1принцип), створенн обєекта з прототипом*/

let Animal = {
  name: "Тварина",
  voice: "Звук",
  say() {
    console.log(`${this.name} каже ${this.voice}`);
  },
};
const dog = Object.create(Animal);
dog.name = "Бобік";
dog.voice = "Гав";
dog.say();
/* Інкапсуляція(2принцип), визначення налаштування властивості */
 Object.defineProperty(dog, "_age", {
   value: 5,
   writable: true,
 });
 Object.defineProperty(dog, "age", {
   set(value) {
     this._age = value * 2;
   },
   get() {
     return `${this._age || 0} років`;
   },
 });
 console.log(dog.age);
 dog.age = 15;
 console.log(dog.age);
 delete dog.age;
 console.log(dog._age);
 console.log(Object.keys(dog));

 Object.defineProperty(dog, "location", {
   value: "Ukraine",
   writable: true,
    configurable: true,
    enumerable: true,
 });
 console.log(dog.location);
 delete dog.location;
 console.log(Object.keys(dog));

 console.log(dog.age);
 console.log(dog);
 Animal.go = function () {
   console.log(`${this.name} біжить`);
 };

 dog.go();
  console.log(dog.__proto__);
 console.log(Object.getPrototypeOf(dog) === Animal);
 console.log(Animal.isPrototypeOf(dog));

 Object.setPrototypeOf(dog, { abc: "123" });
 console.log(Object.getPrototypeOf(dog));

/* Поліморфізм(3принцип), */
const Tag = {
  render(value) {
    return `< ${this.className}>${value}<>`;
  },
  className: null,
};
//======
const Button = Object.create(Tag);

Button.render = function (value = "") {
  return `<button class="${this.className}" style="${this.style}">${value}<button>`;
};
//======

const mainButton = Object.create(Button, {
  style: {
    value: "background: red;",
    writable: true,
  },
  className: {
    value: "my-button",
  },
});
console.log(mainButton.render("CLick"));
console.log(mainButton.className);

//======Абстракція (4принцип),

const Input = Object.create(Tag);
Input.render = function () {
  return `<input placeholder="${this.placeholder}" style="${this.style}"/>`;
};

const loginInput = Object.create(Input, {
  style: {
    value: "border: 1px solid red;",
    writable: true,
  },
  placeholder: {
    value: "Login...",
  },
});
console.log(loginInput.render());
console.log(loginInput.className);
//======Абстракція (4принцип),

const serverRequest = {
  data: null,
  getData() {
    /..
  },
  render() {
    this.data = this.getData();
    return `...`;
  },
};
//======Абстракція (4принцип),
const Page = {
  components: [],
  path: "/.../.../",
  render() {
    /..
  },
};


/*  Урок 30 : функції-конструктори..!!! ********/
// const User = {
//   login: null,
//   password: null,
//   role: null,
//   age: null,
// };

function User(data) {
  if (new.target) {
    const { login = null, password = null, isAdmin = null, age = 0 } = data;

    const role = isAdmin ? "Admin" : "User";

    const object = Object.assign(this, {
      login,
      password,
      role,
      age,
    });
    if (role === "Admin") {
      object.verify = function (password) {
        console.debug(password, this);
        return this.password === password;
      };
    }

    if (age >= 50) {
      object.login = String(object.login).toUpperCase();
    }
    object.toString = function () {
      return `Користувач ${this.login}`;
    };
    return object;
  } else {
    return new User(data);
  }
}
// function UserAdmin({ login = null, password= null, isAdmin= null, age = 0 }) {
//   this.login = login;
//   this.password = password;
//   this.role = isAdmin ? "Admin" : "User";
//   this.age = age;

//   this.verify = function (password) {
//     return this.password === password;
//   };
// }

// // =====

const registerData = {
  login: "ivan",
  password: "123qwe342",
  age: 50,
  isAdmin: true,
};

const user = User(registerData);
// console.log(user.verify("qwert45"));
console.log(user.toString());
// // =====

const adminData = {
  login: "ivan",
  password: "123qwe342",
  age: 50,
  isAdmin: true,
};

const admin = new User(adminData);
console.log(admin.password);

// // =====

const testData = {
  login: "ivan",
  password: "123qwert45",
};
const testUser = new User(testData);
console.log(testUser.login);

// // =====
console.log(Object.getPrototypeOf(testUser) === User.prototype);

// // =====

const test = User;

console.log(test.name);

// // ====
console.log("======");
console.log(user.verify("123qwe342"));

const verifyUser = user.verify.bind(user, "123qwe342");

// console.log(verifyUser.apply(user, ["123qwe342"]));
console.log(verifyUser());

function Animal(name) {
  this.name = name;
}
const Person = function (name, age) {
  Animal.call(this, name);
  this.age = age;
};
const user2 = new Person("Iegohtv", 32);
console.log(user2.name);

// function User ({ login, password, role, age }) {
// Animal.call(this);
// this. login = login:
// this.password = password;
// this.role = role;
// this.age = age;
// console. log (new User () .test);
// }


/*  Урок 31 : КЛАСИ..!!! ********/
class Person {
  constructor(name) {
    this.name = name;
  }
  test = () => {
    console.log("Hello world!", this.name);
  };
}
class User extends Person {
  constructor(login, password) {
    super(login);

    this.login = login;
    this.password = password;
  }

  login = null;
  password = null;

  #role = null;

  age = null;
  id = 0;
  #id = 100;
  isAdmin = () => {
    console.log(this.#id);
    this.createAdminUser();
    return this.role === "Admin";
  };
  /* створимо Статик для створення нoвого логину */
  createAdminUser = (login) => {
    const password = this.generateRandomPassword();
    return new User();
  };

  static generateRandomPassword = () => {
    return true;
  };

  get admin() {
    return this.#role === "Admin";
  }
  set admin(value) {
    this.#role = "Admin";
  }
}
const user = new User("Ivan", "123login");

// console.log(user.isAdmin());

function verifyAdmin(fn) {
  const result = fn();

  if (!result) {
    throw new Error("Не адмін");
  }
  return true;
}
console.log(user.test());

console.log(user instanceof User);

// verifyAdmin(user.isAdmin);

// console.log(user.admin);
// user.admin = true;
// console.log(user.admin);

// console.log(user);

/*defineProperties() - визначає декілька нових або змінює існуючі властивості. Синтаксис: Object.defineProperties (obj, {name:props [, name2:props2, .*/
// Object.defineProperties({
//   name: {
//     get() {

//     }
//     set () {

//     }
//   }
// });
//======//============
// console.log(User.prototype === user.__proto__);
// console.log(User.prototype.isPrototypeOf(user));


/*  Урок 34 : ЦИКЛИ Подій..!!! ********/

const immediateId = setImmediate(() => {
  console.log("Перший");
});

const itervalId = setInterval(() => {
  console.log("П'ятий");
}, 1000);

timeoutId = setTimeout(() => {
  console.log("Другий");

  clearInterval(itervalId);
}, 5000);

console.log("Третій");

console.log("Четвертий");

clearImmediate(immediateId);
// clearTimeout(timeoutId);

///.....////....////

/*  Урок 35 : Управління асинхронними
операціями..!!! ********/
// result.then((data) => {
//   console.log(data, 3);
//   return null;
// });
//.....////....////

function loadFile(filename) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log("2222");
      resolve(`Вміст файлу ${filename}`);
    }, 2000);
  });
}
function convertFile(content) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Конвертований вміст: ${content.toUpperCase()}`);
    }, 1000);
  });
}
function saveFile(convertedContent) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log("saveFile");
      reject("Error test");
    }, 1500);
  });
}
function sendFileToClient() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log("sendFileToClient");
      reject("Error test 2");
    }, 500);
  });
}
function getInfofromFile(file) {
  // console.log(file, 1111);

  return Promise.resolve(file + 100);
}
// Promise.all([
// const test = Promise.allSettled([
// const test = Promise.any([
const test = Promise.race([
  loadFile("example.txt"),
  getInfofromFile("example.txt"),
  saveFile(),
  sendFileToClient(),
  convertFile("file"),
])
  .then((data) => {
    console.log("Data", data);
  })
  .catch((error) => {
    console.log("Error", error);
  });
// console.log(test);
//.....////....////

// loadFile("example.txt")
//   .then((content) => {
//     console.log("Файл завантажено успішно!");
//     console.log("Вміст файлу:", content);
//     return convertFile(content);
//   })
//   .then((data) => {
//     return getInfofromFile(data);
//   })
//   .then((convertedContent) => {
//     console.log("Файл успішно сконвертовано!");
//     console.log("Конвертований вміст:", convertedContent);
//     return saveFile(convertedContent);
//   })
//   .then(() => {
//     console.log("Файл успішно збережено!");
//     return sendFileToClient();
//   })
//   .catch((error) => {
//     console.error("Сталася помилка:", error);
//   })
//   .finally(() => {
//     console.log("Файл успішно відправлено клієнту!");
//   });


/*  Урок 36 : Робота з Promise та HTTP запити..!!! ********/
// function loadFile() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Дані файлу "), 2000);
//   });
// }
// function sendFileToData(fileData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(true), 1500);
//   });
// }
// const loadAndSendFile = () =>
//   loadFile()
//     .then((data) => sendFileToData(data))
//     .finally(() => console.log("Файл відправлен!"));

// const loadAndSendFile = async () => {
//   const data = await loadFile();
//   await sendFileToData(data);
//   console.log("end send file");
// };

// loadAndSendFile().then(() => {
//   console.log("End");
// });

/*  Урок 36 : ... HTTP запити    !!! ********/

// console.log(new Date().getTime());

// const request = new Request("https://jsonplaceholder.typicode.com/todos/1", {
//   method: "DELETE",
// });
// console.log(request.method);
// fetch(request);

// fetch("https://jsonplaceholder.typicode.com/todos/1", {
//     method: "DELETE",
// });

// const data = {
//   id: 1,
//   name: "User",
//   age: 54,
// };

// async function getData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
//     method: "GET",
//     //   body: JSON.stringify(data),

//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer your_taken",
//     },
//   });
//   //   .then((res) => res.json());

//   console.log(res.bodyUser);
//   const data = await res.json();

//   console.log(data);

//   //   console.log(res.status);
//   console.log(res.ok);
// }
// getData();

/*  Урок 37 : Функціі - генератори    !!! ********/
// function* myGenerator() {
//   console.log("Start");
//   yield 1;

//   console.log("Start 2");
//   yield 2;

//   console.log("Start 3");
//   yield 3;
//   console.log("End");

//   return 4;
// }

// const generator = myGenerator();
// const result1 = generator.next();
// console.log(result1);

// const result2 = generator.next();
// console.log(result2);

// const result3 = generator.next();
// console.log(result3);

// const result4 = generator.next();
// console.log(result4);

// function* generatorFunction() {
//   yield "1Value";
//   yield "2Value";
// }

// const generator = generatorFunction();
// for (let value of generator) {
//   console.log(value);
// }

// Функція, яка симулює завантаження даних з сервера
function fetchDataFromServer() {
  return new Promise((resolve, reject) => {
    // Симулюємо асинхронний запит до сервера
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.7) {
        resolve("Дані успішно завантажені");
      } else {
        reject("Помилка завантаження даних");
      }
    }, 1000);
  });
}

// // Функція для конвертації даних
// function convertData(data) {
//   return new Promise((resolve) => {
//     // Симулюємо асинхронну конвертацію даних
//     setTimeout(() => {
//       const convertedData = data.toUpperCase();
//       // Приклад конвертації
//       resolve(convertedData);
//     }, 500);
//   });
// }

// Генераторний метод, що використовує "уіeld" для послідовного завантаження даних з сервера
async function* fetchData() {
  try {
    yield "pending"; // Повертаємо статус "pending"
    const result = await fetchDataFromServer(); // Завантажуємо дані з сервера
    yield "success"; // Повертаємо статуc "success"
    const convertedData = await convertedData(result); // Конвертуємо дані

    return convertedData; // Повертаємо конвертовані дані
  } catch (error) {
    yield "error"; // Повертаємо статус "error"
  }
}
(async () => {
  const generator = fetchData();
  console.log(await generator.next());
  console.log(await generator.next());
  console.log(await generator.next());
})();

// const asyncFunc = () => new Promise((resolve) => setTimeout(resolve, 1000));
// async function* asyncGenerator() {
//   await asyncFunc();
//   yield "After 1sec";

//   await asyncFunc();
//   yield "After 2sec";
// }
// async function runGenerator() {
//   const generator = asyncGenerator();
//   for await (const result of generator) {
//     console.log(result);
//     await asyncFunc();
//   }
// }
// runGenerator();
