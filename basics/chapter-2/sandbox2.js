let likes = 10;
//Number Concatination
let result = 'the blog has ' + likes + ' likes';
console.log(result);

//Template Strings (New and Better Option)

const title = 'Best Illustration of 2024';
const author = 'Nikkun';

//concatenation way;
// let result2 = 'Illustration is called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// console.log(result2);

//Template String way:
let result2 = `The Blog called ${title} by ${author} has ${likes} likes`;
console.log(result2);

let html = `
    <h2>${title}</2>
    <p>By ${author}</p>
    <span>This Blog has ${likes} likes.</span>
`;

console.log(html);