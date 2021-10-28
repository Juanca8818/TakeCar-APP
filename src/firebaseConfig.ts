// import {firebase} from 'firebase';
import 'firebase/firestore';
import { initializeApp } from 'firebase/app'
import { getFirestore,collection, getDocs, getDoc, updateDoc, doc, addDoc, query, where} from "firebase/firestore/lite";

const config = {
    apiKey: "AIzaSyB_w39ZQY_nGOGYwkdGvfMI0e2CSGIsgqw",
    authDomain: "flyteam-3f138.firebaseapp.com",
    projectId: "flyteam-3f138",
    storageBucket: "flyteam-3f138.appspot.com",
    messagingSenderId: "859773126501",
    appId: "1:859773126501:web:3d6c9ef37f65e43dbf438c",
    measurementId: "G-95ZPHZWNXB"
}

// firebase.initializeApp(config);

const firebaseApp = initializeApp(config);
const db = getFirestore(firebaseApp);

export const fetchTurnos = async () =>{
    const usersRef = collection(db, 'usuarios')
    const userQuery = query(usersRef, where("username","==", "7777777"));

    const userSnapshot = await getDocs(userQuery);
    // @ts-ignore
    let turnos: any[] = []
    if (userSnapshot.docs[0]){
        const userData = userSnapshot.docs[0].data()
        if (userData.turnos.length > 0){
            await Promise.all(
                // @ts-ignore
                userData.turnos.map(async turno => {
                    const turnoRef = await getDoc(turno);
                    // @ts-ignore
                    turnos = [turnoRef.data().turno,...turnos];
                })

           )
        }
    }
    return turnos
}

// export const descarga= firebase.firestore();


// export async function loginUser(username:string, password:string){
//     const email= `${username}@flyteam.com`
//     try{const res = await firebase.auth().signInWithEmailAndPassword(email,password);
//         console.log(res);
//         return true
//     }catch(error){
//         console.log(error)
//         return false;
//     }
//   }