import {
    IonAlert,
    IonToggle,
    IonCardHeader,
    IonLabel,
    IonCard,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
    IonItem,
    IonMenuButton, IonImg
} from '@ionic/react';
import React, { useState,useEffect,useContext } from 'react';
import { pin, time, wifi, wine, warning, walk } from 'ionicons/icons';
import {descarga} from '../firebaseConfig';

import UsuarioContext from '../context/UsuarioContext';
import TurnosDescripcion from "./TurnosDescripcion"
import ImagenPerfil from "../images/logo2.jpg"
import ImagenTurno from "../images/turno.jpg"



import './Tab2.css';
const TurnosTab: React.FC = () => {
  const [showAlert2, setShowAlert2] = useState(false);
  return (
    <IonPage>
        <IonContent fullscreen class="ion-padding" scroll-y="false">
        <IonHeader>
            <IonToolbar>
                <IonMenuButton color="primary" slot="start" />
                <IonTitle>Turnos</IonTitle>
            </IonToolbar>
        </IonHeader>
    <IonContent >
        <IonContent>
        <IonCardHeader>
        <IonImg src={ImagenTurno}/>
        </IonCardHeader>
        </IonContent>
        <IonContent>
            <TurnosDescripcion/>
        </IonContent>

        <IonAlert
            isOpen={showAlert2}
            onDidDismiss={() => setShowAlert2(false)}
            cssClass='my-custom-class'
            header={'Nueva alerta'}
            //subHeader={'prueba'}
            message={'Hay un nuevo turno asignado'}
            buttons={['Aceptar']}
          />
    </IonContent>
        </IonContent>
  </IonPage>



);

}

export default TurnosTab;
