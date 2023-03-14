"use strict";
/*property of restaurent*/

/*const openingHours = {
  sunday: {
    open: 10,
    close: 22
  },
  friday: {
    open: 12,
    close: 20
  },
  wednesday: {
    open: 8,
    close: 20
  }
}

const restaurant = {
  name: 'Burger House',
  location: 'Puran Bogura, Dhaka,Bangladesh',
  category: ['Italian', 'Thailand', 'Indian', 'Local', 'Organic'],
  startMenu: [
    'Chicken Cheese Burger',
    'Beef Burger',
    'Garlic Bread',
    'Italian Spicy Pasta'
  ],
  mainMenu: ['Burger', 'Pasta', 'Pizza', 'French Fries'],

  openingHours,
  order: function (startInd, mainInd) {
    return [this.startMenu[startInd], this.mainMenu[mainInd]];
  },
  orderDelivery: function ({ startIndex = 0, mainIndex = 0, time = '10:00pm', address = 'Unknown' }) {
    console.log(`${this.startMenu[startIndex]} & ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)
  },
  burgerOrder: function (ing1, ing2, ing3) {
    console.log(`Here is your is burger with ${ing1} , ${ing2} & ${ing3}`)
  },
  orderPizz: function (mainIng, ...other) {
    console.log(mainIng, other);
  }
}

/*----------Map-----------*/
////////////////////////////////
/*const rest = new Map();
rest.set('name', 'Laptop Bazar');
rest.set(1, 'Dhaka');
rest.set(2, 'Bogura');
rest.set('category', ['Chainess', 'Indian', 'Italian']).set('open', 10).set('close', 22).set(true, 'We are open').set(false, 'We are close');

console.log(rest.get('name'));
console.log(rest.get(1));
console.log(rest.get(true));

let time = 10.1;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('open') && rest.get(true));
const arr = [1, 2];
rest.set('arr', 'OurArray');
console.log(rest.get('arr'));

console.log(rest);

const lang = new Map([
  [1, 'C Lang'],
  [2, 'C++'],
  [3, 'Java'],
  [4, 'JavaScript'],
  [5, 'React'],
  [6, 'HTML']
]);
console.log(lang);

for (const [langInd, value] of lang) {
  console.log(`${langInd}: ${value}`);
}
*/
/*--------Object to Map---------*/
////////////////////////////////////
/*
const hours = new Map(Object.entries(openingHours));

for (const [index, value] of hours) {
  console.log(`On ${index}: Open at ${value.open}`);
}

for (const [index, value] of hours) {
  console.log(`On ${index}: Close at ${value.close}`);
}
console.log(hours);*/

/*------------Map to Array----------*/
//////////////////////////////////////
/*console.log(...lang)
console.log([...lang.keys()]);
console.log([...lang.values()]);

const myArr = [...lang];

for (const [index, values] of myArr) {
  console.log(values)
} */

/*----------Strins----------*/
//////////////////////////////////
//let station = 'Santahar Rail Way Station';
//let train = "Rupsha Express";

// console.log(station[0]);//S
// console.log(station[3]);//t
// console.log('Momin'.includes('m'));//true
// console.log(station.charAt(5));//h
// console.log(station.charCodeAt(5));//104
// console.log(station.indexOf('S'));//0
// console.log(station.lastIndexOf('Rail'));//9
// console.log(station.length);//25
// console.log(station.endsWith('ion'));//true
// console.log(station.startsWith('san'));//false
// console.log(station.toUpperCase());

/*slice(starting ind, ending endex(not included))*/
// console.log(station.slice(0, 8));//(0-7)
// console.log(station.slice(0, station.indexOf(' ')));
//console.log(train.slice(train.indexOf(' ') + 1))

/* To Get Last Element*/
// console.log(station.slice(-1));
// console.log(station[station.length - 1]);
// console.log(station.at(-1))

// function chekSeatNumber(seatNumber) {
// W for Window
//M for middle
//C for cabin
//   let slicedSeatNumber = seatNumber.slice(2, 3);
//   if (slicedSeatNumber === 'W') {
//     console.log(`Your seat is placed beside window`);
//   }
//   else {
//     console.log(`Your seat is not placed beside window`);
//   }
// }
// chekSeatNumber('22W20');
// chekSeatNumber('20M22')

/*-----String Part-2*/
//////////////////////////

// function capitalization(name) {
//   let lowerName = name.toLowerCase();
//   let capitalization = lowerName.at(0).toUpperCase() + lowerName.slice(1);

//   return capitalization;
// }

// console.log(capitalization("yuHanA"));
// console.log(capitalization("shoHan"));
// console.log(capitalization("yOuSuf"));
// console.log(capitalization("moMIN"));
// console.log(capitalization("SHM"));

// function normalizeEmail(email) {
//   let normalEmail = email.toLowerCase().trim();

//   return normalEmail;
// }

// console.log(normalizeEmail("          UsUF@Gmail.cOm      \n      "));
// console.log(normalizeEmail("          AyeShA@Gmail.cOM      \n      "));
// console.log(normalizeEmail("          HImeLKHan@Gmail.cOM      \n      "));

/*Replace & ReplaceAll*/
// let country = "India is my birthland";
// let changeCountry = country.replace("India", "Bangladesh");
// console.log(changeCountry);
// let warningMsg = "Beware of Trojan.86! Trojan.86! Trojan.86!";
// let correct1 = warningMsg.replaceAll("Trojan", " tomato");
// console.log(correct1);

/* Split & Join */
// let str1 = "Hello,+I+am+a+student+of+Islamic+university";
// let str2 = str1.split("+");
// let correct = str2.join(" ");
// console.log(correct);
