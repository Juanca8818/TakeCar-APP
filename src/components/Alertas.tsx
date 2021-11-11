import React from 'react';
import {
    IonList,
    IonTitle,
    IonItemSliding,
    IonItem,
    IonLabel,
    IonItemOptions,
    IonItemOption,
    IonIcon,
    IonPage, IonToolbar, IonMenuButton, IonContent, IonHeader, IonButton, IonCard, IonGrid, IonRow, IonCol, IonModal,
} from '@ionic/react';
import {archive, build, checkmarkSharp, home} from 'ionicons/icons';
//import ImgInfo from "../images/info.svg"
import ImgInfo from "../images/info.png"
import takecar from '../images/takecar.png';
import './tripulantes.css';
import './Alertas.css';
const Alertas: React.FC = () => {
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
<IonPage>
    <IonHeader>

    <IonToolbar>
        <IonMenuButton className="tab" color="primary" slot="start" />
        <IonTitle className="tab">Alertas</IonTitle>
    </IonToolbar>
    </IonHeader>


    <IonContent>
        <img className="centrada"  src={ImgInfo} alt="centered image"  width="100" height="100" />



        <IonItemSliding>
            <IonItemOptions side="start">
                <IonItemOption color="danger" expandable>
                    Borrar
                </IonItemOption>
            </IonItemOptions>

            <IonItem>
                <IonIcon icon={checkmarkSharp}/><IonLabel><b>Nuevo turno asignado</b></IonLabel>
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
                <IonIcon icon={checkmarkSharp}/><IonLabel><b>Revisa la vigencia del seguro</b></IonLabel>
            </IonItem>
            <IonItemOptions side="end">
                <IonItemOption color="tertiary" expandable>
                    Archivar
                </IonItemOption>
            </IonItemOptions>
        </IonItemSliding>
        <IonGrid>
            <IonRow>
                <IonCol >

                    <IonButton style={{marginTop:'80px'}} size={'small'} fill={'outline'}>
                        <IonIcon icon={archive}/>
                    </IonButton>
                </IonCol>

            </IonRow>

        </IonGrid>

    </IonContent>
</IonPage>
);
}
export default Alertas;
