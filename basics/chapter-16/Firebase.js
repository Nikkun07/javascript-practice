const list = document.querySelector('ul');
const form = document.querySelector('form');

const addArtist = (artistInfo, id) =>
{
    let time = artistInfo.created_at.toDate();

    let html = 
    `
    <li data-id = "${id}">
        <div>${artistInfo.title}</div>
        <div>${time}</div>
        <button class="btn btn-danger btn-sm btn-my2">Delete</button>
    </li>
    `;
    list.innerHTML += html;
}

db.collection('test-collection').get().then(snapshot =>
{
    //when data is captured
    snapshot.docs.forEach(doc => {
        console.log(doc.data());
        addArtist(doc.data(), doc.id);
    });
    //console.log(snapshot.docs[0].data());
}).catch(err =>
{
    console.log(err);
});

//Add Documents
form.addEventListener('submit', e =>
{
    e.preventDefault();
    const now = new Date();
    const artTitle = 
    {
        title: form.Artist.value,
        created_at: firebase.firestore.Timestamp.fromDate(now)
    };

    db.collection('test-collection').add(artTitle).then(() =>
    {
        console.log("Title Added");
    }).catch(err =>
    {
        console.log(err);
    });
});


//Data Deletion
list.addEventListener('click', e =>
{
    //console.log("Clicked");
    if(e.target.tagName === 'BUTTON')
    {
        const id = e.target.parentElement.getAttribute('data-id');
        db.collection('test-collection').doc(id).delete().then(()=>
        {
            console.log("Info Deleted");
        });
    }
}
);