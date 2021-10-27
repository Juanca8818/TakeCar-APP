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
    IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonItem, IonLabel, IonGrid, IonRow, IonCol, IonModal, IonInput
} from '@ionic/react';
import autoPerfil from "../images/etios.jpg"
import autoBackPerfil from "../images/etiosback.jpg"
import { swapVertical } from 'ionicons/icons';
import './Home.css';

const slideOpts = {
    initialSlide: 1,
    autoplay: true,
    speed: 400
};
export const Home: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <IonPage>
            <IonContent fullscreen  scroll-y="false">
                <IonHeader>
                    <IonToolbar>
                        <IonMenuButton className="tab" color="primary" slot="start" />
                        <IonTitle className="tab">Inicio</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>


                    <IonSlides pager={true} options={slideOpts} >
                        <IonSlide>
                            <img src={autoPerfil} />
                        </IonSlide>
                        <IonSlide>
                            <img src={autoBackPerfil} />
                        </IonSlide>
                    </IonSlides>


                    <IonRow>
                        <IonCol>Marca:Etios</IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>Modelo: XPS</IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>Número de chasis: EER4567</IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>Número de chasis: MAE6784</IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>Año: 2018</IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>Patente: AC180CD</IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>KM: 15000</IonCol>
                    </IonRow>




                    {/* <IonCard className={'card'}>
              <IonCardHeader>
                  <IonCardHeader>
                      <IonCardTitle className={"title"}>Turnos próximos</IonCardTitle>
                  </IonCardHeader>
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
                  <IonItem button onClick={() => { }}>
                      <IonLabel>
                          Button Item
                      </IonLabel>
                  </IonItem>
              </IonCardContent>
          </IonCard> */}
                    <IonGrid>
                        <IonRow>
                            <IonCol><IonButton size="small" style={{ width: '100%'}}>Documentos</IonButton></IonCol>

                            <IonCol><IonButton fill='outline' size="small" style={{ width: '100%' }} onClick={() => setShowModal(true)}>Editar</IonButton></IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
                <IonContent>
                    <IonModal cssClass='my-custom-class' isOpen={showModal}>
                        <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
                    </IonModal>

                </IonContent>
            </IonContent>
        </IonPage>
    );
};


export default Home;
