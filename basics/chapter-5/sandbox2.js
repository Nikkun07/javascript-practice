//object literals

let user = {
    name: 'Nikkun',
    age: '24',
    email: 'nikkun.illust@gmail.com',
    location: 'Philippines',
    blogs: ['How not to be retarded.', 'Why I want to die.'],
    login: function()
    {
        console.log('The User Logged In');
    },
    logout()
    {
        console.log('The User Logged Out');   
    },
    logBlogs()
    {
        console.log(this.blogs);
        console.log("This user has written the following blogs: ");
        this.blogs.forEach(blog =>
            {
                console.log(blog);
            });
        // console.log(this);
        //"this" keyword is a context object.
    }
};



user.login();

user.logBlogs();

user.logout();

//Similar to the method:

//Methods are functions that are defined in an object

/* const name = 'Sakuya';
name.toUppercase(); */