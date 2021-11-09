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
    IonMenuButton, IonImg, IonText, IonSpinner, IonLoading
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
  const [loading, setLoading] = useState(false)
  const handleLoading = (status: boolean) =>{
      setLoading(false);
  }
  

  
  return (
    <IonPage>
            <IonHeader>
                <IonToolbar className="tab">
                    <IonMenuButton className="tab" color="primary" slot="start" />
                    <IonTitle className="tab">Turnos</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent style={{alignContent:'center'}} scrollY={false}>
                <IonCardHeader>
                    <IonImg src={ImagenTurno}/>
                </IonCardHeader>
                <IonCard style={{height:'auto',padding:'5px'}}>
                    <IonText  style={{alignContent:'center'}} >Acá podrás ver los turnos que la concesionaria reservó para vos</IonText>
                </IonCard>
                <IonContent>
                    <IonSpinner name="bubbles"/>
                    <IonLoading
                        cssClass='my-custom-class'
                        isOpen={true}

                        message={'Please wait...'}

                    />
                    <TurnosDescripcion/>
                </IonContent>
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
