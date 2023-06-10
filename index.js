// /* урок 9 Функції!!!!!!!!!!!!***********/

// // function calcSpace(amount, unit = "px") {
// //   return `${amount * 4}${unit}`;
// // }

// // console.log(calcSpace(5));
// /* урок 9  *******
// Рекурсія викликає сама себе в середине функції!!!!!!!!!!!***********/

// function playTrackById(trackId) {
//   //search file and launch - запустити пісню
// }
// // function stopTrackById(trackId) {
// //   //отримати файл- поставити пісню на паузу
// // }
// function play(trackName, trackId) {
//   console.log(`Запускаємо ${trackName}`);
//   playTrackById(trackId);
// }

// function end(oldTrackName, newTrackName) {
//   console.log(`Завершили грати ${oldTrackName}`);
//   console.log(`Наступний трек ${newTrackName}`);
// }

// function pausePlay(currentTrackName) {
//   console.log(`Трек ${currentTrackName} не на паузі`);
//   reloadDataTrack();
//   play();
// }
// function reloadDataTrack(amount) {
//   if (amount <= 0) {
//     console.log("Дані оновлені");
//   } else {
//     console.log("Повторне оновлення");
//     // пенвий ко для оновлення данніх. Recurcia)
//     reloadDataTrack(amount - 1);
//   }
// }
// reloadDataTrack(5);
// /* урок 9  *******
// Замикання  Closures !!!!!!!!!!!***********/
// function pauseStopByTrack(trackName, trackId) {
//   let originTrackname = trackName;
//   let originTrackId = trackId;

//   return function pauseStop() {
//     stopTrackById(originTrackId);
//     console.log(`Трек ${originTrackname} на паузі`);
//   };
// }

// /*сюда повертаемо функцию pauseStopByTrack и вона попадає в змінну!!!!!!!!!!!!*/
// const pauseStop123 = function pauseStop(originTrackId, originTrackname) {
//   stopTrackById(originTrackId);
//   console.log(`Трек ${originTrackname} на паузі`);
// };
// pauseStop123();
// const pauseStop456 = pauseStopByTrack("IT Console log");
// pauseStop456();

// /* урок 9  *******
// Функціональний вираз ... який повертає функц callback !!!!
// */

// // const runCommand = function (command, errorFn) {
// //   const result = command();
// //   if (!result) {
// //     return errorFn();
// //   }
// // };
// // runCommand(
// //   function () {
// //     console.log("Start");
// //     return 1 - 1;
// //   },
// //   function () {
// //     console.log("Error");
// //   }
// // );

// /*Стрілкова функція (Arrow function !!!!!!!!!!**********/
// () => {
//   //тут код
// };
// // return () => {
// //   stopTrackById(originTrackId);
// //   console.log(`Трек ${originTrackname} на паузі`);
// // };

// // const runCommand = function (command, errorFn) {
// //   const result = command();
// //   if (!result) {
// //     return errorFn();
// //   }
// // };
// // runCommand(
// //   () => {
// //     console.log("Start");
// //     return 1 - 1;
// //   },
// //   () => console.log("Error")
// // );
// /* стрілкова більшь сучасніша! її варто використовувати в якості аргументів, коли вкладуємо функцію в змінну, або коли повертаємо функцію */
// // const testFunc = () => {
// //   let test = 10;
// //   return test;
// // };
// // console.log(testFunc());
// function stopTrackById(trackId) {
//   //   //отримати файл- поставити пісню на паузу
//   console.log(`отримати - постви пісні з TrackID`);
// }

/*Каррірована функція (curried function !!!!!!!!!!**********/
// function pauseStopByTrack(trackName, trackId) {
//   let isPause = null;

//   return () => {
//     if (isPause == true) {
//       return;
//     }

//     stopTrackById(trackId);
//     console.log(`Трек ${trackName} на паузі`);
//     isPause = true;
//   };
// }

// const pauseStop45 = pauseStopByTrack("IT Console log", 10);
// pauseStop45();
// pauseStop45();
// pauseStop45();

// /*Memoization /          !!!!!!!!!!**********/
// const memoCalcSpace = (oldAmount = null, oldUnit = null, oldResult = null) => {
//   return (amount, unit = "px") => {
//     if (oldAmount === amount && unit === oldUnit) {
//       console.log("memo");

//       return oldResult;
//     }

//     oldResult = `${amount * 4}${unit}`;
//     oldAmount = amount;
//     oldUnit = unit;

//     return oldResult;
//   };
// };
// const calcSpace = memoCalcSpace();
// console.log(calcSpace(4));
// console.log(calcSpace(4));

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
console.log("///////");
console.log(calcSpaceFromDesign("button"));
