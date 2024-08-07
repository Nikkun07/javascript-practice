const symbolOne = Symbol('a generic name here');
const symbolTwo = Symbol('a generic name here');

console.log(symbolOne, symbolTwo, typeof symbolOne);
console.log(symbolOne === symbolTwo);

//Symbols can be used as keys for objects
const artist = {};

artist.age = 24;
artist['name'] = 'Nikkun';
artist['name'] = 'Sakuya';

artist[symbolOne] = 'Renti';
artist[symbolTwo] = 'Guian';

console.log(artist);