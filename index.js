/*  Урок 35 : Управління асинхронними
операціями..!!! ********/
//  result.then ((data) => {
//     console.log (data, 3);
//     return null;
//  });
///.....////....////

// function loadFile(filename) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Вміст файлу ${filename}`);
//     }, 2000);
//   });
// }
// function convertFile(content) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Конвертований вміст: ${content.toUpperCase()}`);
//     }, 1000);
//   });
// }
// function saveFile(convertedContent) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, 1500);
//   });
// }

///.....////....////
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
//     return savefile(convertedContent);
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
