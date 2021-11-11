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
    IonText, IonIcon, IonButtons, IonThumbnail
} from '@ionic/react';
import autoPerfil from "../images/etios.jpg"
import autoBackPerfil from "../images/etiosback.jpg"
import {cloudUpload, swapVertical} from 'ionicons/icons';
import './Home.css';

const slideOpts = {
    initialSlide: 1,
    autoplay: true,
    speed: 400,
    height: '100px'
};
export const Home: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [showModalDoc, setShowModalDoc] = useState(false);

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
                            <IonCol><strong>Marca:</strong>Toyota</IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol><strong>Modelo:</strong> Etios XPS</IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol><strong>Número de chasis:</strong> EER4567</IonCol>
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
                            <IonCol><IonButton size="small" style={{ width: '100%'}} onClick={() => setShowModalDoc(true)}>Documentos</IonButton></IonCol>
                            <IonCol><IonButton fill='outline' size="small" style={{ width: '100%' }} onClick={() => setShowModal(true)}>Editar</IonButton></IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>

                //modals
                <IonModal cssClass='editarAuto' isOpen={showModal}>
                        <IonCard className={'card'}>
                            <IonRow>
                                <IonCol>
                                    <IonLabel>Marca</IonLabel>
                                    <IonInput placeholder="Toyota" mode={'ios'}/>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonLabel>Modelo</IonLabel>
                                    <IonInput placeholder="Etios XPS" mode={'ios'}/>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonLabel>Número de chasis</IonLabel>
                                    <IonInput placeholder="EER4567" mode={'ios'}/>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonLabel>Año</IonLabel>
                                    <IonInput placeholder="2018" mode={'ios'}/>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonLabel>Patente</IonLabel>
                                    <IonInput placeholder="AC180CD" mode={'ios'}/>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonLabel>Kilómetros</IonLabel>
                                    <IonInput placeholder="15000" mode={'ios'}/>
                                </IonCol>
                            </IonRow>
                        </IonCard>
                        <IonButton  size='small' style={{width:'80%',alignSelf:'center'}} onClick={() => setShowModal(false)}>Cerrar</IonButton>
                    </IonModal>
                <IonModal cssClass='modalDoc' backdropDismiss={true} isOpen={showModalDoc}>
                    <IonToolbar>
                        <IonButtons slot="end">
                            <IonButton color="danger" strong  onClick={() => setShowModalDoc(false)}>Cerrar</IonButton>
                        </IonButtons>
                    </IonToolbar>
                    <IonContent>
                        <IonCard className={'card'}>
                            <IonButton size={'default'} style={{justifyContent:'center',alignSelf:'center',marginLeft:'15px'}}>
                                {/* eslint-disable-next-line react/jsx-no-undef */}
                                <IonIcon icon={cloudUpload}/>
                                Subir archivo
                            </IonButton>
                            {/* eslint-disable-next-line react/jsx-no-undef */}

                        </IonCard><IonItem><IonThumbnail slot="start">
                        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                    </IonThumbnail>
                        <IonLabel>Seguro</IonLabel></IonItem>
                        <IonItem><IonThumbnail slot="start">
                            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                        </IonThumbnail>
                            <IonLabel>Registro</IonLabel></IonItem>
                    </IonContent>

                </IonModal>
            </IonContent>
        </IonPage>
    );
};
export default Home;
