import { initializeApp } from 'firebase/app';
import 
{
    getFirestore, collection, getDocs
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

  //Get Collection Data
 getDocs(colRef)
    .then((snapshot) => 
    {
        let books = [];
        snapshot.docs.forEach((doc) =>
        {
            books.push({ ...doc.data(), id: doc.id });
        });
        console.log(books);
    })
    .catch(err =>
    {
        console.log(err.message);
    });