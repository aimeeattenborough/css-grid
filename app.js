// DIGITAL ROOT *****************************************************************

// function digital_root(n) {
//   const splitNum = n.toString().split('');
//   const newNumber = splitNum.map(function(n) {
//     return parseInt(n);
//   });
//   console.log('new number', newNumber);
//
//   const sum = newNumber.reduce((x, splitNum) => {
//     return x + splitNum;
//   }, 0);
//   console.log('reduced sum', sum);
//
//
//   if(sum.toString().length <= 1) {
//     console.log('sum is one digit');
//     return sum;
//   } else {
//     console.log('sum is more than one digit');
//     digital_root(sum);
//   }
// }
//
// digital_root(999999999999);

// ******************************************************************************

// CAKE BAKING

// const recipe = {flour: 500, sugar: 200, eggs: 1};
// const available = {flour: 2000, sugar: 1200, eggs: 5, milk: 200};

// const recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
// const available = {sugar: 500, flour: 2000, milk: 2000};
//
// const recipe = {crumbles: 83,chocolate: 5,eggs: 40};
// const available = {nuts: 8300,milk: 6200,oil: 9800,chocolate: 5000,apples: 7200,eggs: 3200,crumbles: 4500,cocoa: 4600,pears: 6100,cream: 5900,flour: 5600,sugar: 8500,butter: 1100};
//
// function cakes(recipe2, available2) {
//   const recipe = Object.assign(recipe2);
//   const available = Object.assign(available2);
//
//   let result = true;
//   let cakes = 0;
//
//   while(result){
//     for (const key in recipe) {
//       if(!available[key]) result = false;
//       if (available[key] < recipe[key]){
//         result = false;
//       }
//       available[key] = available[key] - recipe[key];
//     }
//     if(result === true) cakes++;
//   }
//   return cakes;
// }
//
// console.log(cakes(recipe, available));





// function cakes(recipe, available) {
//   let result = true;
//   let cakes = 0;
//
//   while(result){
//     for (const key in recipe) {
//       if(!available[key]) result = false;
//       if (available[key] < recipe[key]){
//         result = false;
//       }
//       available[key] = available[key] - recipe[key];
//     }
//     if(result === true) cakes++;
//   }
//   return cakes;
// }
//
// console.log(cakes(recipe, available));
//
//
//
//
//

// function cakes(recipe, available) {
//   let result = true;
//   let cakes = 0;
//
//   while(result){
//     for (const key in available) {
//       if (available[key] < recipe[key]){
//         result = false;
//       }
//       available[key] = available[key] - recipe[key];
//     }
//     if(result === true) cakes++;
//   }
//   return cakes;
// }
//
// cakes(recipe, available);
