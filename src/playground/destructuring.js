
/*
 * Object Destructuring
 */

// const person = {
//     name: 'Mark',
//     age: 27,
//     location: {
//         city: 'Washington DC',
//         temp: 92
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${name} is ${age}`);

// const { city, temp: temperature } = person.location;
// console.log(`It's ${temperature} in ${city}`);

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'self-published' } = book.publisher;

// console.log(`${publisherName}`); // Penguin, self-published

/*
 * Array Destructuring
 */

//  const address = ['1299 Juniper St.', 'Philidelphia', 'PA', '19147'];

//  const [street, city, state] = address;
//  console.log(`Your are in ${city}, ${state}`);

//  const [, , state] = address;
//  console.log(`Your are in ${state}`);

//  //defaults:
//  const [ , , state = 'New York'] = address;

 const item = ['Coffee (hot)', 2, 2.5, 2.75];
 const [orderItem, ,orderAmount] = item;

 console.log(`A ${orderItem} costs ${orderAmount}`);