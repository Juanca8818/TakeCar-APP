import {
    IonLabel,
    IonPage,
    IonIcon,
    IonGrid,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonMenuButton,
    IonButton,
    IonRow,
    IonCol, IonModal, IonButtons, IonCard, IonThumbnail, IonRadioGroup, IonRadio, IonInput
} from '@ionic/react';
import React, { useState, useEffect, useContext } from 'react';
import './MiPerfil.css';
import ImagenPerfil from "../images/perfil.jpg"
// import { descarga } from '../firebaseConfig';
import UsuarioContext from '../context/UsuarioContext';
import Imagenlogout from "../images/logout.svg"
import {cloudUpload} from "ionicons/icons";

const Documentos: React.FC = () => {
    const userIngresado = useContext(UsuarioContext);
    const { user } = userIngresado;
    const [showModalDoc, setShowModalDoc] = useState(false);
    const [selected, setSelected] = useState<string>('seguro');
    const [vuelos, guardarVuelos]: Array<any> = useState(['']);
    useEffect(() => {
        obtener();
    }, [user])
    const obtener = () => {
        const averga = JSON.parse(localStorage.getItem('vuel') || '{}');
        // descarga.collection(averga).onSnapshot(manejarSnapshot)
    }
    function manejarSnapshot(snapshot: any) {
        const vuelosTotales = snapshot.docs.map((doc: { id: any; data: () => any; }) => {
            return {
                id: doc.id,
                ...doc.data()
            }
        });

        guardarVuelos(vuelosTotales.filter((vu: any) => vu.id == 'infoPerfil'))
    }
    async function login() {

        window.location.href = '/'
        localStorage.clear();
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonMenuButton   className="tab" color="primary" slot="start" />
                    <IonTitle className="tab"><b>Documentos</b></IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen >
                <IonGrid>
                    <IonRow>
                        <IonCol><IonButton size="small" style={{ width: '100%'}}  onClick={() => setShowModalDoc(true)} >Nuevo documento</IonButton></IonCol>
                    </IonRow>
                </IonGrid>
                <IonItem>
                    <IonThumbnail slot="start">
                        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                    </IonThumbnail>
                    <IonLabel>Seguro</IonLabel></IonItem>
                <IonItem><IonThumbnail slot="start">
                    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                </IonThumbnail>
                    <IonLabel>Registro</IonLabel></IonItem>

                    <IonModal backdropDismiss={true} isOpen={showModalDoc}>
                        <IonToolbar>
                            <IonButtons slot="end">
                                <IonButton color="danger" strong onClick={() => setShowModalDoc(false)}>Cerrar</IonButton>
                            </IonButtons>
                        </IonToolbar>
                        <IonContent> <IonCard className={'card'}>
                            <IonRadioGroup value={selected} onIonChange={e => setSelected(e.detail.value)}>
                                <IonItem>
                                    <IonRadio slot="start" value="seguro" />
                                    <IonLabel>Seguro</IonLabel>
                                </IonItem>
                                <IonItem>
                                    <IonRadio slot="start" value="registro" />
                                    <IonLabel>Registro</IonLabel>
                                </IonItem>
                            </IonRadioGroup>
                            <input style={{padding:'8px'}} type={'file'}/>
                            {/* eslint-disable-next-line react/jsx-no-undef */}
                        </IonCard>

                                <IonButton style={{width:'100%'}} onClick={() => setShowModalDoc(false)}>
                                    Guardar
                                </IonButton>

                        </IonContent>

                    </IonModal>


            </IonContent>
        </IonPage>
    );
};

export default Documentos;
