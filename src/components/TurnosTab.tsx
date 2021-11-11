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
import { pin, time, wifi, wine, warning, walk, refresh } from 'ionicons/icons';

import UsuarioContext from '../context/UsuarioContext';
import TurnosDescripcion from "./TurnosDescripcion"

import ImagenTurno from "../images/turno.jpg"
import "../components/TurnosTab.css";
import Tripulantes  from './tripulantes';


import './Tab2.css';

const TurnosTab: React.FC = () => {
  const [showAlert2, setShowAlert2] = useState(false);
  const [loading, setLoading] = useState(false)
  const handleLoading = (status: boolean) =>{
      setLoading(status);
  }

    // @ts-ignore
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
                <IonItem >
                            <Tripulantes/>
                    </IonItem>
                {/* <IonCard style={{height:'auto',padding:'5px'}}>
                    <IonText  style={{alignContent:'center'}} >Acá podrás ver los turnos que la concesionaria reservó para vos</IonText>

                </IonCard> */}
                <IonContent>

                    {/*TODO Para poder mostrar el loading, hay que descomentar esta parte*/}
                    <IonLoading
                        cssClass='my-custom-class'
                        isOpen={loading}
                        message={'Por favor espere...'}
                    />
                    <TurnosDescripcion loadingHandler={handleLoading}/>

                </IonContent>
D
                <IonIcon icon={refresh}/>

            </IonContent>

  </IonPage>



);

}

export default TurnosTab;
