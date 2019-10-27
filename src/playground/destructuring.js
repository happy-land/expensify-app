
// // Object destructuring


// const person = {
//     //name: 'Ruslan',
//     age: 32,
//     location: {
//         city: 'Rogachevo',
//         temp: 20
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// // const name = person.name;
// // const age = person.age;
// console.log(`${firstName} is ${age}`);

// const { city, temp:temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }


// Array destruct

const address = ['1299 Maloe Rog', 'Rog', 'Dmitrov', 'zip'];

const [, city, state = 'Moscow'] = address;

console.log(`You are in ${city} ${state}`);