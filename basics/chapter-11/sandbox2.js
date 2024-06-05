//timestamps

const before = new Date('May 3, 2021 7:30:21');
const now = new Date();

//console.log(now.getTime(), before.getTime());

const diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff/ 1000 / 60);
const hrs = Math.round(mins / 60);
const days = Math.round(hrs / 24);
const years = Math.round(days / 365.25);

console.log(mins, hrs, days, years);

console.log(`the timestamp is ${years} years ago`);


//converting timestamps into date objects
const timestamp = 1675938474990;
console.log(new Date(timestamp));