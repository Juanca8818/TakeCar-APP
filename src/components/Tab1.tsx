import React from 'react';
import ImagenNews from "../images/covid.png"
import ImagenNews1 from "../images/azafata.jpg"
import ImagenNews2 from "../images/avion.jpeg"
import {
    IonSlides,
    IonSlide,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonPage,
    IonButton,
    IonMenuButton,
    IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonItem, IonLabel
} from '@ionic/react';
import { swapVertical } from 'ionicons/icons';
import './Tab1.css';

const slideOpts = {
  initialSlide: 1,
  autoplay:true,
  speed: 400


};

export const Tab1: React.FC = () => {
  return (
  <IonPage>
  <IonContent fullscreen class="ion-padding" scroll-y="false">
    <IonHeader>
        <IonToolbar>
          <br></br>

          <IonMenuButton color="primary"slot="start"/>

          <IonTitle>Inicio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

          <IonCard className={'card'}>
              <IonCardHeader>
                  <IonCardTitle>Datos del vehículo</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                  Modelo: Etios
              </IonCardContent>
              <IonCardContent>
                  Año: 2000
              </IonCardContent><IonCardContent>
              Patente: AE754LP
          </IonCardContent>
          </IonCard>
          <IonCard className={'card'}>
              <IonCardHeader>
                  <IonCardTitle>Turnos próximos</IonCardTitle>
              </IonCardHeader>
              <IonCardContent className={'card'}>
                  <IonItem button onClick={() => { }}>
                      <IonLabel >
                          Button Item
                      </IonLabel>
                  </IonItem>
                  <IonItem button onClick={() => { }}>
                      <IonLabel>
                          Button Item
                      </IonLabel>
                  </IonItem>
              </IonCardContent>
          </IonCard>

          <IonButton >Seguro</IonButton>
          <IonButton>Seguro</IonButton>
          <IonButton>Seguro</IonButton>


  </IonContent>
  </IonContent>
  </IonPage>
);
};


export default Tab1;
