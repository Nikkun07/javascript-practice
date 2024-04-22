//object literals

//Arrays of Objects
/* const blogs = 
[
    {
        title: 'How not to be retarded.',
        likes: 69
    },
    
    {
        title: 'Why I want to die.',
        likes: 40
    },
]; */

// console.log(blogs);

let user = {
    name: 'Nikkun',
    age: '24',
    email: 'nikkun.illust@gmail.com',
    location: 'Philippines',
    blogs: 
    [
        {
            title: 'How not to be retarded.',
            likes: 69
        },
        
        {
            title: 'Why I want to die.',
            likes: 40
        },
    ],
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
                console.log(blog.title, blog.likes, 'Likes');
            });
        // console.log(this);
        //"this" keyword is a context object.
    }
};

user.logBlogs();