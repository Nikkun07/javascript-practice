const list = document.querySelector('ul');
const form = document.querySelector('form');

const addArtist = (artistInfo) =>
{
    let time = artistInfo.created_at.toDate();

    let html = 
    `
    <li>
        <div>${artistInfo.title}</div>
        <div>${time}</div>
        
    </li>
    `;
    list.innerHTML += html;
}

db.collection('test-collection').get().then(snapshot =>
{
    //when data is captured
    snapshot.docs.forEach(doc => {
        console.log(doc.data());
        addArtist(doc.data());
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
    }
    )
}
)