import React from 'react';
import { IonList, IonTitle, IonAvatar,  IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption, IonIcon, IonNote, IonPage } from '@ionic/react';
import { checkmarkSharp} from 'ionicons/icons';
//import ImgInfo from "../images/info.svg"
import ImgInfo from "../images/info.png"


import './Tab5.css';

const Tab5: React.FC = () => {
    return (
<IonPage>
<IonList>

      {/* Sliding item with text options on both sides */}
  
      <br></br>
     <IonItem>
      <IonTitle><b>Alertas</b></IonTitle>
    </IonItem>
    
  <br></br>

  <img className="centrada"src={ImgInfo} alt="centered image" width="100" height="100" /> 
  
  <br></br>  
  <br></br>
  
    
  
  
 
  
  {/* Sliding item with expandable options on both sides */}
  <IonItemSliding>
    <IonItemOptions side="start">
      <IonItemOption color="danger" expandable>
        Borrar
      </IonItemOption>
    </IonItemOptions>

    <IonItem>
    <IonIcon icon={checkmarkSharp}/><IonLabel><b>Nuevo turno asingado</b></IonLabel>
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
    <IonIcon icon={checkmarkSharp}/><IonLabel><b>Chequeá tu VTV</b></IonLabel>
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
    <IonIcon icon={checkmarkSharp}/><IonLabel><b>Revisa el estado del seguro</b></IonLabel>
    </IonItem>

    <IonItemOptions side="end">
      <IonItemOption color="tertiary" expandable>
      Archivar
      </IonItemOption>
    </IonItemOptions>
  </IonItemSliding> 
  
  {/* <IonItem>
    <IonIcon icon={checkmarkSharp}/><IonLabel><b>Nuevas Novedades</b></IonLabel>
    </IonItem>

    <IonItemOptions side="end">


    <IonItemOptions side="start">
      <IonItemOption color="danger" expandable>
        Borrar
      </IonItemOption>
    </IonItemOptions>
      
      
      <IonItemOption color="tertiary" expandable>
        Archivar
      </IonItemOption>
    </IonItemOptions>
    <IonItemSliding>

    
  </IonItemSliding>  */}


  <br></br>
  
  <br></br>
  
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  
  

  

  
  
  
</IonList>
</IonPage>
);
}
export default Tab5;