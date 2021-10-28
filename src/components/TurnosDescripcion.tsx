import { IonBadge,IonChip,IonModal,IonList,IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonLabel, IonCard, IonPage, IonCardContent, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonItem } from '@ionic/react';
import React, { useState,useEffect,useContext } from 'react';
import Turnos from './Turnos'
import './TurnosDescripcion.css';

import UsuarioContext from '../context/UsuarioContext';
import {confirmarTurno, fetchTurnos} from "../firebaseConfig";

const TurnosDescripcion: React.FC =() => {


  const userIngresado = useContext(UsuarioContext);
  const {user}= userIngresado;

  const [showModal, setShowModal] = useState(false);
  const [turnos, setTurnos] = useState([]);

  useEffect(()=>{

    obtener();


  },[])

  const obtener= async ()=>{
    const averga =JSON.parse(localStorage.getItem('vuel') || '{}');
    const t = await fetchTurnos();
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

  const setConfirmado = async (turnoId: string, esConfirmado: boolean) =>{
    let aux: any[] | ((prevState: never[]) => never[]) = [];
    await Promise.all(turnos.map(async turno => {
      let turnoAux = turno;
      // @ts-ignore
      if (turno.id === turnoId){
        console.log('turno encontrado')
        if (esConfirmado) {
          await confirmarTurno(turnoId)
          console.log('confirmado')
          // @ts-ignore
          turnoAux.estado = 'confirmado';
        }
        else {
          // @ts-ignore
          turnoAux.estado = 'disponible';

        }
      }
      // @ts-ignore
      aux = [turnoAux, ...aux]
    }))
    // @ts-ignore
    setTurnos(aux);
  }

  return (
      <IonPage>
          <IonContent>
            {turnos.map((turno:any)=>(
                <Turnos
                    turno={turno}
                    setConfirmado={setConfirmado}
                />
            ))}
          </IonContent>
      </IonPage>

  );
}
export default TurnosDescripcion;
