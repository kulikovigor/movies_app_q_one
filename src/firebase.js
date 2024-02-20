import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs, writeBatch } from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyDNHcQwOx4wX36orPeVy-is8XNMJMSlF7E",
  authDomain: "movies-app-75493.firebaseapp.com",
  projectId: "movies-app-75493",
  storageBucket: "movies-app-75493.appspot.com",
  messagingSenderId: "15694034172",
  appId: "1:15694034172:web:d2b6b9d83be08a13d29379"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function add(films) { 
    try {
        const docRef = await addDoc(collection(db, "movies-app"), {
          title: films,
          checked: false,
          id: Date.now(),
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

async function get() {
    const querySnapshot = await getDocs(collection(db, "movies-app"));
    const filmDB = [];

    querySnapshot.forEach((doc) => {
       filmDB.push({
        title: doc.data().title,
        checked: doc.data().checked,
        id: doc.data().id
       })
});
  return filmDB;
}

async function deleteDataFirestore() {
  const batch = writeBatch(db);

  films.forEach((film) => {
    const ref = doc(db, key, film.id);
    batch.delete(ref);
  });

  await batch.commit();

}

 

add();
get();
deleteDataFirestore();