import React, {useState} from 'react';
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
    IonAvatar,
    IonList,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonItem,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
    IonModal,
    IonInput,
    IonText
} from '@ionic/react';
import autoPerfil from "../images/etios.jpg"
import autoBackPerfil from "../images/etiosback.jpg"
import { swapVertical } from 'ionicons/icons';
import './Home.css';

const slideOpts = {
    initialSlide: 1,
    autoplay: true,
    speed: 400,
    height: '100px'
};
export const Home: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <IonPage >
            <IonHeader >
            <IonToolbar>
                <IonMenuButton className="tab" color="primary" slot="start" />
                <IonTitle className="tab">Inicio</IonTitle>
            </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false}>
                <IonContent fullscreen>
                    <IonSlides pager={true} options={slideOpts} >
                        <IonSlide>
                            <img src={autoPerfil} alt={'auto'}/>
                        </IonSlide>
                        <IonSlide>
                            <img src={autoBackPerfil}  alt={'auto'}/>
                        </IonSlide>
                    </IonSlides>
                    <IonCard className={'card'}>
                        <IonRow>
                            <IonCol><strong>Marca:</strong>Etios</IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol><strong>Modelo:</strong> XPS</IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol><strong>Número de chasis:</strong> EER4567</IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol><strong>Número de chasis:</strong> MAE6784</IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol><strong>Año:</strong> 2018</IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol><strong>Patente:</strong> AC180CD</IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol><strong>KM:</strong> 15000</IonCol>
                        </IonRow>
                    </IonCard>
                    <IonGrid>
                        <IonRow>
                            <IonCol><IonButton size="small" style={{ width: '100%'}}>Documentos</IonButton></IonCol>
                            <IonCol><IonButton fill='outline' size="small" style={{ width: '100%' }} onClick={() => setShowModal(true)}>Editar</IonButton></IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
                    <IonModal cssClass='editarAuto' isOpen={showModal}>
                        <IonCard className={'card'}>
                            <IonRow>
                                <IonCol>
                                    <IonLabel>Marca</IonLabel>
                                    <IonInput placeholder="Marca" mode={'ios'}/>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonLabel>Modelo</IonLabel>
                                    <IonInput placeholder="Modelo" mode={'ios'}/>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonLabel>Número de chasis</IonLabel>
                                    <IonInput placeholder="Número de chasis" mode={'ios'}/>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonLabel>Número de chasis</IonLabel>
                                    <IonInput placeholder="Número de chasis" mode={'ios'}/>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonLabel>Año</IonLabel>
                                    <IonInput placeholder="Año" mode={'ios'}/>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonLabel>Patente</IonLabel>
                                    <IonInput placeholder="Marca" mode={'ios'}/>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonLabel>Kilómetros</IonLabel>
                                    <IonInput placeholder="Marca" mode={'ios'}/>
                                </IonCol>
                            </IonRow>
                        </IonCard>
                        <IonButton  size='small' style={{width:'80%',alignSelf:'center'}} onClick={() => setShowModal(false)}>Cerrar</IonButton>
                    </IonModal>
            </IonContent>
        </IonPage>
    );
};
export default Home;
