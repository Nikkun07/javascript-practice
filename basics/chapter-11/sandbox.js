//Dates and Times
//Date constructor is used to create date and time

const now = new Date();

console.log(now);
console.log(typeof now);

//Year, months, days, times.
console.log('getFullYear: ', now.getFullYear());
console.log('getMonth: ', now.getMonth());
console.log('getDate: ', now.getDate());
console.log('getDay: ', now.getDay());
console.log('getHours: ', now.getHours());
console.log('getMinutes: ', now.getMinutes());
console.log('getSeconds: ', now.getSeconds());



//Timestamps (can be used to compare two dates together)

console.log('timestamp: ', now.getTime());

//Date Strings
console.log('Date Now (String): ', now.toDateString());
console.log('Time Now: ', now.toTimeString());
console.log('Local Time Now: ', now.toLocaleString());