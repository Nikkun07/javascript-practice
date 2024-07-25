const artists = 
[
    {Type: "Procrastinator", Name: 'Nikkun'},
    {Type: "Femboy", Name: 'Renti'},
    {Type: "Racist", Name: 'Sakuya'}
]

//console.log(JSON.stringify(artists));

localStorage.setItem('artist', JSON.stringify(artists));

const storedData = localStorage.getItem('artist');
console.log(JSON.parse(storedData));
