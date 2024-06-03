//Declaration
const addForm = document.querySelector('.add');
const todoList = document.querySelector('.todos');
const searchToDo = document.querySelector('.search input');

const genTemplate = todo =>
{
    const html = `
        <li class="flex flex-row w-full max-w-[55%] rounded-lg py-4 px-12 mx-auto my-1 items-center justify-between hover:bg-blue-400 hover:text-black hover:scale-105 duration-150">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete p-3 cursor-pointer rounded-full hover:bg-red-600 hover:text-white duration-150"></i>
        </li> 
        `;
    todoList.innerHTML += html;
};
addForm.addEventListener('submit', e =>
{
    e.preventDefault();
    const todo = addForm.add.value.trim();

    //console.log(todo); (Console Check)

    if(todo.length)
    {
        genTemplate(todo);
        addForm.reset();
    }
});

//Event Delegation
//Delete ToDos

todoList.addEventListener('click', e =>
{
    if(e.target.classList.contains('delete'))
    {
        e.target.parentElement.remove();
    }
});

const filterToDos = (term) => 
{
    Array.from(todoList.children)
        .filter((todoItems) => !todoItems.textContent.toLowerCase().includes(term))
        .forEach((todoItems) => todoItems.classList.add('hidden'));

    
    Array.from(todoList.children)
        .filter((todoItems) => todoItems.textContent.toLowerCase().includes(term))
        .forEach((todoItems) => todoItems.classList.remove('hidden'));

    console.log(todoList.textContent);
};

//Keyup Event
searchToDo.addEventListener('keyup', () =>
{
    const term = searchToDo.value.trim().toLowerCase();
    filterToDos(term);
});