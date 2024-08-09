const artists =
[
    {name: "Nikkun", procrastinating: true},
    {name: "Renti", procrastinating: false},
    {name: "Sakuya", procrastinating: true},
    {name: "Wow", procrastinating: false}
];

const getProcrastinators = (artists) =>
{
    return artists.filter(artists => artists.procrastinating);
};


export { getProcrastinators, artists as default};