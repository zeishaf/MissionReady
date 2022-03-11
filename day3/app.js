// // Exercise 5a

// function halfNumber (wholeNumber) {
// const halvedNumber = (wholeNumber/2)
// return halvedNumber;
// }

// const result = halfNumber(23);

// console.log('Half of 23 is ' + result);

// // Exercise 5b

// function getTimeInSeconds(timeInMinutes) {
//     const getTimeInSeconds = timeInMinutes *60;
//     return getTimeInSeconds

// const userInputMinutes = prompt('Enter the minutes', '5');
// const userInputMinutesNum = parseInt=(userInputMinutes);
// const timeinSeconds = getTimeInSeconds(userInputMinutesNum);
// alert(userInputMinutes + ' minutes is ' + timeInSeconds + ' seconds');
// }

// // Objects


// const person = {
// firstName: 'Zeisha' ,
// lastName: 'Fremaux'
// };


// console.log(person.firstName, person.lastName);

// person['firstName']

// const person = {
//     name: "Zeisha",
//     age: 36
// }

// // Enter below into console

// person.name

// person.age

// person["age"];
// person["name"];

// const property = 'name';
// const hero = {
//     name: 'Batman'
// };

// hero['name']; // => 'Batman'
// hero[property]; // => 'Batman'


// // Find area of the rectangle

// const rectangle = {
//     length = 10,
//     width = 20,
// };

// console.log(rectangle['length']);
// console.log(rectangle['width']);

// const rectangleArea = rectangle ['length']* rectangle['width']

// console.log(rectangleArea)


// const person = {
//     name: "Bear",
//     age: 4
// }

// person.age = 6

// person.name = "Bearsey"

// Exercise

const person = {
    firstName : 'Tani'
    lastName : 'Wha'
    favoriteNumber : '5'
    favoriteDay : 'Wednesday'
}

console.log(person);
person.favoriteFood = 'Lasagne'

console.log(person);
delete person.favoriteDay
person.favoriteNumber = person.favoriteNumber * 2;
console.log(person);

// Example:

const person = {
    firstName : 'Sebin', 
    lastName : 'Benjamin',
    favoriteNumber : 3,
    favoriteDay: 'Friday'
  }
  
  console.log(person);
  person.favoriteFood = 'Icecream'
  console.log(person);
  delete person.favoriteDay;
  person.favoriteNumber = person.favoriteNumber * 2;
  console.log(person);

// Exercise 4

  const myFavNumbers = {
      firstNumber : 2,
      secondNumber : 3,
      thirdNumber : 4
  }
  
  let sum = 0
  for (const key in myFavNumbers) {
      sum = sum + myFavNumbers[key];
      console.log(sum, myFavNumbers);
  }