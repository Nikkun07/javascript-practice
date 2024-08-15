import { initializeApp } from 'firebase/app';
import 
{
    getFirestore, collection, onSnapshot,
    addDoc, deleteDoc, doc,
    query, where,
    orderBy, serverTimestamp,
    getDoc
} from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyCf9LRXM-Tr6l7Rcv6sNloxjTVlD72_XUg",
    authDomain: "fir-test-2636c.firebaseapp.com",
    projectId: "fir-test-2636c",
    storageBucket: "fir-test-2636c.appspot.com",
    messagingSenderId: "275865507343",
    appId: "1:275865507343:web:07843d0000888030c9f57a"
  };

  //Initialize App
  initializeApp(firebaseConfig);

  //Initialize Service
  const db = getFirestore();

  //Collection Reference
  const colRef = collection(db, 'books' /* Collection Name */);

  //Queries
  const q = query(colRef, orderBy('createdAt'));

  //Realtime Collection Data
    onSnapshot(q, (snapshot) =>
    {
        let books = [];
        snapshot.docs.forEach((doc) =>
        {
            books.push({ ...doc.data(), id: doc.id });
        });
        console.log(books);
    });

//Adding Documents
const addBookForm = document.querySelector('.add');
addBookForm.addEventListener('submit', (e) => 
{
    e.preventDefault();

    addDoc(colRef, {
        title: addBookForm.title.value,
        author: addBookForm.author.value,
        createdAt: serverTimestamp()
    })
    .then(() =>
    {
        addBookForm.reset();
    })
});  

//Deleting Documents
const deleteBookForm = document.querySelector('.delete');
deleteBookForm.addEventListener('submit', (e) =>
{
    e.preventDefault();

    const docRef = doc(db, 'books', deleteBookForm.id.value);
    deleteDoc(docRef)
        .then(() =>
        {
            deleteBookForm.reset();
        })

});

const docRef = doc(db,'books', '3sLClSHodoGrpw0VoZTb');

onSnapshot(docRef, (doc) =>
{
    console.log(doc.data(), doc.id);
})