/* Using with useIonModal Hook */

import React, { useState } from 'react';
import { IonButton, IonItem, IonList, IonIcon, IonAvatar, IonLabel, IonContent, useIonModal, IonHeader, IonToolbar, IonTitle, IonButtons } from '@ionic/react';
import ImgPiloto from "../images/piloto.svg"
import ImgComandante from "../images/comandante.svg"
import ImgTripulante from "../images/tripulantes.svg"
import ImgCheck from "../images/check.svg"
import ImgNoCheck from "../images/nocheck.svg"
import './Tab5.css';

const Body: React.FC<{

 

  count: number;
  onDismiss: () => void;
  onIncrement: () => void;
}> = ({ count, onDismiss, onIncrement }) => (
  
  <div>
    <IonHeader translucent>
      <IonToolbar>
        <br></br>
        <IonButtons slot="end">
          <IonButton color="danger" strong  onClick={() => onDismiss()}>Cerrar</IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>

    <IonContent fullscreen scroll-y="false">
      <IonList>
        <IonItem>
           <IonAvatar slot="start">
                <img src={ImgCheck} />
            </IonAvatar>
          <IonLabel>
            <h2><b>Cambio de aceite y filtro</b></h2>
            <p><b>Realizado</b></p>
          </IonLabel>
        </IonItem>
      </IonList>

      <IonList>
        <IonItem>
            <IonAvatar slot="start">
              <img src={ImgCheck} />
            </IonAvatar>
          <IonLabel>
            <h2><b>Cambio de correas</b></h2>
            <p><b>Realizado</b></p>
          </IonLabel>
        </IonItem>
      </IonList>

      <IonList>
        <IonItem>
            <IonAvatar slot="start">          
               <img src={ImgNoCheck} />
            </IonAvatar>
          <IonLabel>
            <h2><b>Chequeo de rutina</b></h2>
            <p><b>Rechazado</b></p>
          </IonLabel>
        </IonItem>
      </IonList>

      <IonList>
        <IonItem>
              <IonAvatar slot="start">
              <img src={ImgCheck} />
              </IonAvatar>
          <IonLabel>
            <h2><b>Limpieza de radiador</b></h2>
            <p><b>Realizado</b></p>
          </IonLabel>
        </IonItem>
      </IonList>

      {/* <IonList>
        <IonItem>
            <IonAvatar slot="start">
              <img src={ImgTripulante} />
              </IonAvatar>
          <IonLabel>
            <h2><b>Avelina Villa</b></h2>
            <p>Tripulante</p>
          </IonLabel>
        </IonItem>
      </IonList>
      <IonList>
        <IonItem>
        <IonAvatar slot="start">
              <img src={ImgTripulante} />
              </IonAvatar>
          <IonLabel>
            <h2><b>David Palomares</b></h2>
            <p>Tripulante</p>
          </IonLabel>
        </IonItem>
      </IonList> */}

    </IonContent>

  </div>
);

const ModalExample: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDismiss = () => {
    dismiss();
  };
 
  /**
   * First parameter is the component to show, second is the props to pass
   */
  const [present, dismiss] = useIonModal(Body, {
    count,
    onDismiss: handleDismiss,
    onIncrement: handleIncrement,
  });

  return (
    
      <IonContent>
      
        <IonButton className="centrada" color="small" 
          
          shape="round" fill="outline"
          onClick={() => {
            present({
              cssClass: 'my-class',
            });
          }}
        >          
        Ver historial
        </IonButton>       
      </IonContent>
    
  );
};

export default ModalExample;