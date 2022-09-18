'use strict'
/*property of restaurent*/
const openingHours = {
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
const rest = new Map();
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

/*--------Object to Map---------*/
////////////////////////////////////

const hours = new Map(Object.entries(openingHours));

for (const [index, value] of hours) {
  console.log(`On ${index}: Open at ${value.open}`);
}

for (const [index, value] of hours) {
  console.log(`On ${index}: Close at ${value.close}`);
}
console.log(hours);

/*------------Map to Array----------*/
//////////////////////////////////////
console.log(...lang)
console.log([...lang.keys()]);
console.log([...lang.values()]);

const myArr = [...lang];

for (const [index, values] of myArr) {
  console.log(values)
}