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

let productTitle = null;
productTitle ||= "Назва товару";
console.log("productTitle", productTitle);
