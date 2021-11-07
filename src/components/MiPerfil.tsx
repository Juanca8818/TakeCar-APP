import {
  IonLabel,
  IonPage,
  IonIcon,
  IonGrid,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonMenuButton,
  IonButton,
  IonRow,
  IonCol
} from '@ionic/react';
import React, { useState, useEffect, useContext } from 'react';
import './MiPerfil.css';
import ImagenPerfil from "../images/perfil.jpg"
// import { descarga } from '../firebaseConfig';
import UsuarioContext from '../context/UsuarioContext';
import Imagenlogout from "../images/logout.svg"

const MiPerfil: React.FC = () => {
  const userIngresado = useContext(UsuarioContext);
  const { user } = userIngresado;
  const [vuelos, guardarVuelos]: Array<any> = useState(['']);
  useEffect(() => {
    obtener();
  }, [user])
  const obtener = () => {
    const averga = JSON.parse(localStorage.getItem('vuel') || '{}');
    // descarga.collection(averga).onSnapshot(manejarSnapshot)
  }
  function manejarSnapshot(snapshot: any) {
    const vuelosTotales = snapshot.docs.map((doc: { id: any; data: () => any; }) => {
      return {
        id: doc.id,
        ...doc.data()
      }
    });

    guardarVuelos(vuelosTotales.filter((vu: any) => vu.id == 'infoPerfil'))
  }
  async function login() {

    window.location.href = '/'
    localStorage.clear();
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonMenuButton   className="tab" color="primary" slot="start" />
          <IonTitle className="tab"><b>Mis datos</b></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonContent scrollEvents={true} scroll-y={true} >
          <IonGrid style={{width:'100%'}}>
            <IonRow className="ion-align-items-center">
              <IonCol size="12" offset="8" className="ion-align-self-center">
                <IonButton fill='outline' size='small'>Editar</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
          <img className="centrada" src={ImagenPerfil} alt="centered image" width="100" height="100" />
          <IonList>
            <IonItem  >
              <IonLabel><b>Nombre: Benito</b> </IonLabel>
            </IonItem>
            <IonItem  >
              <IonLabel><b>Apellido: Gomez </b></IonLabel>
            </IonItem>
            <IonItem  >
              <IonLabel><b>DNI: 7777777 </b></IonLabel>
            </IonItem>
            <IonItem  >
              <IonLabel><b>Domicilio: Lima 717</b> </IonLabel>
            </IonItem>
            <IonItem  >
              <IonLabel><b>Celular: 1123452345</b> </IonLabel>
            </IonItem>
            <IonItem  >
              <IonLabel><b>Email: benito.gomez@gmail.com</b> </IonLabel>
            </IonItem>



          </IonList>


        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default MiPerfil;
