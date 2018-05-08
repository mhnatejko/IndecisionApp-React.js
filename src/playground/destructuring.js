// console.log(1)

// const person = {
//     name: 'maksio',
//     age: 30,
//     location : {
//         city: 'torun',
//         temp: 92
//     }
// };

// const {name, age, location} = person;
// const {city, temp} = location

// console.log(`${city}`)


// const book = { 
//     title: 'Ego i s enemy',
//     author: 'Rajan',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-publisher'} = book.publisher

// console.log(publisherName)

// const address = ['1299 S Junipero', 'torun', 'pensylwania', '12338457'];
// const [, , , zip] = address
// console.log(`you in ${zip} ${state}`)

const item = ['cofee', '1', '2', '3'];
const [...x] = item;
console.log(`${x[0]}`);
