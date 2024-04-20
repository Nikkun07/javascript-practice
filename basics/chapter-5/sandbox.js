//object literal notation


let user = {
    name: 'Nikkun',
    age: '24',
    email: 'nikkun.illust@gmail.com',
    location: 'Philippines',
    blogs: ['How not to be retarded', 'Why I want to die']
};

console.log(user);
console.log(user.name);
console.log(user.email);

//user.age = 40;
console.log(user.age);

// const key = 'location';
console.log(user['email']);
console.log(user['location']);


user['name'] = 'Retard';
console.log(user.name);


console.log(typeof user);