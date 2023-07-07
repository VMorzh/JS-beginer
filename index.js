/*  Урок 28 : Обробка помилок...!!! ********/

function getUserData(userId) {
  try {
    const a = 10;
    a = 5;

    // ... робить запит до бази даних
  } catch (err) {
    // err - помилка про те, що дані з сервера не можуть бути отриманні
    const newError = new Error(
      `Помилка. Неможливо отримати дані користувача ${userId}`,
      {
        cause: err,
      }
    );
    console.log(newError.toString());
  }
}
getUserData(10123);

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
