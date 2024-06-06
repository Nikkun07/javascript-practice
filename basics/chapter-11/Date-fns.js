const now = new Date();

//console.log(dateFns.isToday(now));

// Formatting Options:
console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'MMMM'));
console.log(dateFns.format(now, 'dddd'));
console.log(dateFns.format(now, 'do'));

console.log(dateFns.format(now, 'dddd Do MMMM YYYY'));


// Comparing Dates/Timestamps

const before = new Date('May 3 2000 3:00:00');

console.log(dateFns.distanceInWords(now,before, {addSuffix: true}));