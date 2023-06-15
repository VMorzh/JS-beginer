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
