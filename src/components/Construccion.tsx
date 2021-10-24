import React from 'react';
import {IonContent, IonIcon, IonPage, IonText} from "@ionic/react";
import {build} from "ionicons/icons";

export default function Construccion() {
    return (
        <IonPage>
            <IonContent>
            <IonText>Funcionalidad en construcción!</IonText>
            <IonIcon icon={build}/>
            </IonContent>
        </IonPage>
    )
}
