// import {firebase} from 'firebase';
import 'firebase/firestore';
import {initializeApp} from 'firebase/app'
import {collection, doc, getDoc, getDocs, getFirestore, query, updateDoc, where} from "firebase/firestore/lite";

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
                    turnos = [{id: turnoRef.id, ...turnoRef.data()},...turnos];
                })

           )
        }
    }
    return turnos
}

const isTurno = async (turnoFiltrado: string, turno:any) => {
    const turnoSnapshot = await getDoc(turno);
    if (turnoSnapshot.exists()){
        // console.log(`turno found ${turnoSnapshot.id}, turno filtrado ${turnoFiltrado}`)
        return turnoSnapshot.id === turnoFiltrado
    }
}

export const rechazarTurno = async (turnoId: string) => {
    const turnoRef = doc(db, 'turnos', turnoId);
    const usersRef = collection(db, 'usuarios')
    const userQuery = query(usersRef, where("username","==", "7777777"));
    const userSnapshot = await getDocs(userQuery);
    const userRef = doc(db,'usuarios', userSnapshot.docs[0].id)
    await updateDoc(turnoRef, {estado:"rechazado", cliente:null})

    let turnos = userSnapshot.docs[0].data().turnos
    let turnos_aux: any[] = []
    // @ts-ignore
    await Promise.all(turnos.map(async turno => {
        if (!await isTurno(turnoId, turno)){
            turnos_aux = [turno, ...turnos_aux]
        }
    }));
    console.log(`turnos aux: ${turnos_aux}`)
    await updateDoc(userRef, {turnos: turnos_aux})
    await fetchTurnosDisponibles();
}

export const confirmarTurno = async (turnoId: string) => {
    const turnoRef = doc(db, 'turnos', turnoId);
    console.log(turnoRef);
    await updateDoc(turnoRef, {estado: 'confirmado'})
}

export const fetchTurnosDisponibles = async () => {
    const turnosCollection = collection(db, 'turnos');
    const turnoQuery = query(turnosCollection, where('cliente','==', null));
    const turnoRef = await getDocs(turnoQuery);

    let turnos: any[] = []
    await Promise.all(
        turnoRef.docs.map(t => turnos = [...turnos, {id: t.id, ...t.data()}])
    )
    // console.log('Turnos:');
    // console.log(turnos);
    return turnos
}

export const tomarTurno = async (turnoId: string) => {
    const turnoRef = doc(db, 'turnos', turnoId);
    const usersRef = collection(db, 'usuarios')
    const userQuery = query(usersRef, where("username","==", "7777777"));
    const userSnapshot = await getDocs(userQuery);
    const userRef = doc(db,'usuarios', userSnapshot.docs[0].id)
    await updateDoc(turnoRef, {estado:"confirmado", cliente:userRef})

    let turnos_aux: any[] = userSnapshot.docs[0].data().turnos
    turnos_aux = [turnoRef, ...turnos_aux]
    console.log(`turnos aux: ${turnos_aux}`)
    await updateDoc(userRef, {turnos: turnos_aux})
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