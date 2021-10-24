import React from 'react';
import {
    IonList,
    IonTitle,
    IonAvatar,
    IonItemSliding,
    IonItem,
    IonLabel,
    IonItemOptions,
    IonItemOption,
    IonIcon,
    IonNote,
    IonPage,
    IonText, IonContent, IonToolbar, IonMenuButton, IonHeader, IonCard, IonCardHeader, IonCardContent, IonImg
} from '@ionic/react';
import {build, checkmarkSharp} from 'ionicons/icons';
import ImgInfo from "../images/info.svg"
import takecar from '../images/takecar.png';
import './tripulantes.css';
import './Alertas.css';
const Alertas: React.FC = () => {
    return (
<IonPage>
  {/*
<IonList>


      <br></br>
     <IonItem>
      <IonTitle><b>Alertas</b></IonTitle>
    </IonItem>

  <br></br>

  <img className="centrada"src={ImgInfo} alt="centered image" width="100" height="100" />

  <br></br>
  <br></br>

  <IonItemSliding>
    <IonItemOptions side="start">
      <IonItemOption color="danger" expandable>
        Borrar
      </IonItemOption>
    </IonItemOptions>

    <IonItem>
    <IonIcon icon={checkmarkSharp}/><IonLabel><b>Nueva guardia asignada</b></IonLabel>
    </IonItem>

    <IonItemOptions side="end">
      <IonItemOption color="tertiary" expandable>
        Archivar
      </IonItemOption>
    </IonItemOptions>
  </IonItemSliding>

  <IonItemSliding>
    <IonItemOptions side="start">
      <IonItemOption color="danger" expandable>
      Borrar
      </IonItemOption>
    </IonItemOptions>

    <IonItem>
    <IonIcon icon={checkmarkSharp}/><IonLabel><b>Chequeá tus vuelos</b></IonLabel>
    </IonItem>

    <IonItemOptions side="end">
      <IonItemOption color="tertiary" expandable>
      Archivar
      </IonItemOption>
    </IonItemOptions>
  </IonItemSliding>

  <IonItemSliding>
    <IonItemOptions side="start">
      <IonItemOption color="danger" expandable>
      Borrar
      </IonItemOption>
    </IonItemOptions>

    <IonItem>
    <IonIcon icon={checkmarkSharp}/><IonLabel><b>Revisa el estado del tránsito</b></IonLabel>
    </IonItem>

    <IonItemOptions side="end">
      <IonItemOption color="tertiary" expandable>
      Archivar
      </IonItemOption>
    </IonItemOptions>
  </IonItemSliding>



  <br></br>

  <br></br>

  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>








</IonList>*/}
    <IonContent fullscreen>
        <IonHeader>
            <IonToolbar>
                <IonMenuButton color="primary"slot="start"/>
                <IonTitle>Notificaciones</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent  slot="fixed" >
            <IonCard className={'container'}>
                <IonCardHeader>
                    <IonIcon className={'icon'} size="large" icon={build}/>
                    <IonImg src={takecar}></IonImg>
                </IonCardHeader>
                <IonCardContent className={'icon'}>
                    Funcionalidad en construcción
                </IonCardContent>

            </IonCard>

        </IonContent>
    </IonContent>











</IonPage>
);
}
export default Alertas;
