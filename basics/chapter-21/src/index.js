import { initializeApp } from 'firebase/app';
import 
{
    getFirestore, collection, onSnapshot,
    addDoc, deleteDoc, doc,
    query, where,
    orderBy, serverTimestamp,
    getDoc, updateDoc
} from 'firebase/firestore';

import
{
    getAuth,
    createUserWithEmailAndPassword,
    signOut, signInWithEmailAndPassword,
    onAuthStateChanged
}from 'firebase/auth';

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
  const auth = getAuth();

  //Collection Reference
  const colRef = collection(db, 'books' /* Collection Name */);

  //Queries
  const q = query(colRef, orderBy('createdAt'));

  //Realtime Collection Data
  const unsubCol = onSnapshot(q, (snapshot) =>
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

const unsubDoc = onSnapshot(docRef, (doc) =>
{
    console.log(doc.data(), doc.id);
})

//Updating a Document
const updateForm = document.querySelector('.update');
updateForm.addEventListener('submit', (e) =>
{
    e.preventDefault();

    const docRef = doc(db, 'books', updateForm.id.value);
    updateDoc(docRef, 
    {
        title: 'Updated Title'
    })
    .then(() => 
    {
        updateForm.reset();
    });
});

//Signup Users
const signUpForm = document.querySelector('.signup');
signUpForm.addEventListener('submit', (e) =>
{
    e.preventDefault();

    const email = signUpForm.email.value;
    const password = signUpForm.password.value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((cred) =>
        {
            //console.log("User Created: ", cred.user);
            signUpForm.reset();
        })
        .catch((err) =>
        {
            console.log(err.message);
        })
});


//Logging In & Logging out
const logOutButton = document.querySelector('.logout');
logOutButton.addEventListener('click', () =>
{
    signOut(auth)
        .then(() =>
        {
            //console.log('User Logged Out.');
        })
        .catch((err) =>
        {
            console.log(err.message);
        });
});

const logInForm = document.querySelector('.login');
logInForm.addEventListener('submit', (e) =>
{
    e.preventDefault();

    const email = logInForm.email.value;
    const password = logInForm.password.value;
    signInWithEmailAndPassword(auth, email, password)
        .then((cred) =>
        {
            //console.log("User Logged In", cred.user);
        })
        .catch((err) =>
        {
            console.log(err.message);
        })
});

//Sub to Auth Change

const unsubAuth = onAuthStateChanged(auth, (user) =>
{
    console.log('User Status Changed:', user);
});

//Unsub 
const unsubBtn = document.querySelector('.unsub')
unsubBtn.addEventListener('click', () =>
{
    console.log("Unsubscribing...");
    unsubCol();
    unsubDoc();
    unsubAuth();
});