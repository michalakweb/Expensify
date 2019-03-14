// const person = {
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };

// const {name = 'Grong', age} = person;

// console.log(`${name} is ${age}.`)

// const {city, temp: temperature} = person.location

// console.log(`It's ${temperature} degrees in ${city}.`)

const address = ['1299 Kopernika', 'Blemowo', 'Lubuskie', '66-530'];

const [street, city, state, zip] = address;

console.log(`The street name is ${street}, city is ${city} in ${state} state and the zip is ${zip}`)