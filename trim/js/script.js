"use strict";
// function first() {
//   setTimeout(function () {
//     console.log("1");
//   }, 500);
// }

// function second() {
//   console.log("2");
// }

// first();
// second();

// function learnJs(lang, callback) {
//   console.log(` Я учу ${lang}`);
//   callback();
// }
// learnJs(`javascript`, function () {
//   console.log(`Я ПРОШЕЛ ЭТОТ УРОК`);
// });
// function learnJs(lang, callback) {
//   console.log(` Я учу ${lang}`);
//   callback();
// }

// function done() {
//   console.log(`Я ПРОШЕЛ ЭТОТ УРОК`);
// }

// learnJs(`javascript`, done);

//объекты,деструктуризация

const options = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    bg: "red",
  },
  makeTest: function () {
    console.log("Test");
  },
};
// for (let key in options) {
//   if (typeof options[key] === "object") {
//     for (let i in options[key]) {
//       console.log(`свойство ${i} имеет значение: ${options[key][i]}`);
//     }
//   } else {
//     console.log(`свойство ${key} имеет значение: ${options[key]}`);
//   }
// }
// options.makeTest();
// console.log(Object.keys(options).length);
const { border, bg } = options.colors;
console.log(border);
