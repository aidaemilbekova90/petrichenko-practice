// console.log(NaN || 2 || undefined);  //2

// console.log(NaN && 2 && undefined); //  NaN
// console.log(1 && 2 && 3);  //3
// console.log(!1 && 2 || !3); // false
// console.log(25 || null && !3); //25
// console.log(NaN || null || !3 || undefined || 5); // 5
// console.log(NaN || null && !3 && undefined || 5); //5
// console.log(5===5 && 3>1 ||5); // true

// let result = "";
// const lengthOfStars = 7;
// for (let i = 1; i < lengthOfStars; i++) {
//   for (let j = 0; j < i; j++) {
//     result += "*";
//   }
//   result += "\n";
// }
// console.log(result);

// let s = "";
// let a = 5;
// for (let i = 1; i < a; i++) {
//   for (let j = 0; j < i; j++) {
//     s += "&";
//   }
//   s += "\n";
// }

// console.log(s);

// function firstTask() {
//   for (let i = 5; i < 11; i++) {
//     console.log(i);
//   }
// }
// firstTask();

// function secondTask() {
//   for (let i = 20; i > 10; i--) {
//     if (i === 13) {
//       break;
//     }
//     console.log(i);
//   }
// }

// // secondTask();

// function thirdTask() {
//   for (let i = 2; i < 11; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// }
// thirdTask();

// for (let i = 2; i <= 16; i++) {
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// let i = 2;
// while (i <= 16) {
//   i++;
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// function fifthTask() {
//   for (let i = 5; i < 11; i++) {
//     let arr = [];
//     console.log([i]);
//   }
// }
// fifthTask();

function fifthTask() {
  const arrayOfNumbers = [];

  for (let i = 5; i < 11; i++) {
    arrayOfNumbers[i - 5] = i;
  }

  console.log(arrayOfNumbers);
  return arrayOfNumbers;
}

fifthTask();
