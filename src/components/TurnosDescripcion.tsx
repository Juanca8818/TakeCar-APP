import { IonBadge,IonChip,IonModal,IonList,IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonLabel, IonCard, IonPage, IonCardContent, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonItem } from '@ionic/react';
import React, { useState,useEffect,useContext } from 'react';
import Turnos from './Turnos'
import './TurnosDescripcion.css';

import UsuarioContext from '../context/UsuarioContext';
import {confirmarTurno, fetchTurnos, fetchTurnosDisponibles, rechazarTurno, tomarTurno} from "../firebaseConfig";
// @ts-ignore
const TurnosDescripcion=(props) => {


  const userIngresado = useContext(UsuarioContext);
  const {user}= userIngresado;

  const [showModal, setShowModal] = useState(false);
  const [turnos, setTurnos] = useState([]);

  useEffect(()=>{

    obtener();


  },[])

  const obtener= async ()=>{
    const averga =JSON.parse(localStorage.getItem('vuel') || '{}');
    // @ts-ignore
    props.loadingHandler(true);
    const t = await fetchTurnos();
    // @ts-ignore
    props.loadingHandler(false);
    // @ts-ignore
    setTurnos(t);
    // descarga.collection(averga).onSnapshot(manejarSnapshot)
  }

  function manejarSnapshot(snapshot:any){
    const vuelosTotales =snapshot.docs.map((doc: { id: any; data: () => any; })=>{
      return {
        id:doc.id,
        ...doc.data()
      }
    });

    // guardarVuelos(vuelosTotales.filter((vu:any)=>vu.id!=='infoPerfil'))

  }
  const setNewStatus = async (turnoId: string, newStatus: string, turnoATomar: string) =>{
    props.loadingHandler(true);
    let aux: any[] | ((prevState: never[]) => never[]) = [];
    await Promise.all(turnos.map(async turno => {
      let turnoAux = turno;
      // @ts-ignore
      if (turno.id === turnoId){
        // console.log('turno encontrado')
        if (newStatus === 'confirmado') {
          await confirmarTurno(turnoId)
          // console.log('confirmado')
          // @ts-ignore
          turnoAux.estado = 'confirmado';
        }
        else if (newStatus === 'rechazado'){
          await tomarTurno(turnoATomar)
          await rechazarTurno(turnoId)
          console.log(`rechazado ${turnoId}`)
          // @ts-ignore
          turnoAux.estado = 'rechazado';
          obtener()
        }
        else {
          // @ts-ignore
          turnoAux.estado = 'disponible';
        }
      }
      // @ts-ignore
      if (turnoAux.estado !== 'rechazado'){
        // @ts-ignore
        aux = [turnoAux, ...aux]
      }
    }))
    props.loadingHandler(false);
    // @ts-ignore
    setTurnos(aux);

  }


  return (
      <IonPage>
          <IonContent>
            {turnos.map((turno:any)=>(
                <Turnos
                    turno={turno}
                    setNewStatus={setNewStatus}
                    setLoading={props.loadingHandler}
                />
            ))}
          </IonContent>
      </IonPage>

  );
}
export default TurnosDescripcion;
