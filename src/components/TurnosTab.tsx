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

import UsuarioContext from '../context/UsuarioContext';
import TurnosDescripcion from "./TurnosDescripcion"
import ImagenPerfil from "../images/logo2.jpg"
import ImagenTurno from "../images/turno.jpg"
import "../components/TurnosTab.css";


import './Tab2.css';
const TurnosTab: React.FC = () => {
  const [showAlert2, setShowAlert2] = useState(false);
  return (
    <IonPage>

            <IonHeader>
                <IonToolbar className="tab">
                    <IonMenuButton className="tab" color="primary" slot="start" />
                    <IonTitle className="tab">Turnos</IonTitle>
                </IonToolbar>
            </IonHeader>

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



  </IonPage>



);

}

export default TurnosTab;
