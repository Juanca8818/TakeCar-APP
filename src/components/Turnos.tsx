import {
    IonActionSheet,
    useIonAlert,
    IonAlert,
    IonText,
    IonModal,
    IonList,
    IonButton,
    IonLabel,
    IonCard,
    IonIcon,
    IonItem,
    IonChip,
    IonToolbar, IonHeader, IonContent, IonTitle,IonRadioGroup, IonRadio
} from '@ionic/react';
import React, { useState, useEffect, useContext } from 'react';
import {
    calendar,
    checkbox,
    carSport, document, person, call, timeOutline, checkmarkCircleOutline
} from 'ionicons/icons';


import { location } from 'ionicons/icons';



import './Turnos.css';

import UsuarioContext from '../context/UsuarioContext';

import {capitalize} from "../utils";
import {IonBackButtonInner} from "@ionic/react/dist/types/components/inner-proxies";


const Turnos: React.FC<{ turno: any, setConfirmado: any }> = props => {

//cambiar el valor a true para que salga el aviso//
    const [showAlert2, setShowAlert2] = useState(false);

    //cambiar el valor a true para que salga el aviso activo//
    const [showActionSheet, setShowActionSheet] = useState(props.turno.estado === 'pendiente');

    const [showModal, setShowModal] = useState(false);
    const [confirmar, guardarConfirmar] = useState(false);
    const [confirmar2, guardarConfirmar2] = useState(false);
    const [elModal, guardarElModal] = useState(true);
    const [present] = useIonAlert();
    const [showModalNuevaFecha, setShowModalNuevaFecha] = useState(false)

    console.log(props.turno)

    const confirmarHandler = (esConfirmado: boolean) =>{
        props.setConfirmado(props.turno.id, esConfirmado).then()

    }

    const estadoTurno = () => {
        const estado = props.turno.estado;
        if (estado === 'confirmado'){
            return (
                <div ><IonText color="success"><IonIcon icon={checkbox} size="large" color="success"/></IonText> </div>
            );
        }
        else if (estado === 'pendiente'){
            return null
        }
    }

    // @ts-ignore
    // @ts-ignore
    return (

        <>
            <IonCard>

                <IonModal isOpen={showModal} cssClass={'modal'}>
                    <div className={'modalTurno'}>
                        <IonChip   color={props.turno.estado === "confirmado"?"success":"warning"}>
                            <IonIcon size={'default'} icon={props.turno.estado === "confirmado"?checkmarkCircleOutline:timeOutline}/>
                            <IonLabel  >{capitalize(props.turno.estado)}</IonLabel>
                        </IonChip>
                        <IonCard className='card'>
                            <IonList style={{backgroundColor:'#F8F7F2'}}>
                                <IonItem lines='none' className='item'>
                                    <IonLabel className="vuelos">{props.turno.ubicacion}</IonLabel>
                                    <IonIcon icon={location} color='primary' slot="start" />
                                </IonItem>

                                <IonItem lines='none' >
                                    <IonLabel className="vuelos">{props.turno.hora}</IonLabel>
                                    <IonIcon icon={carSport} slot="start" />
                                </IonItem>

                                <IonItem  lines='none'>
                                    <IonLabel className="turnos">{props.turno.descripcion} </IonLabel>
                                    <IonIcon icon={document} color='primary' slot="start" />
                                </IonItem>


                                <IonItem lines='none'>
                                    <IonLabel className="turnos">{"Esteban, Quito"} </IonLabel>
                                    <IonIcon icon={person} slot="start" />
                                </IonItem>

                                <IonItem lines='none'>
                                    <IonLabel>1139048342</IonLabel>
                                    <IonIcon icon={call} color='primary' slot="start" />
                                </IonItem>
                            </IonList>
                        </IonCard>

                        <IonButton  onClick={() => setShowModal(false)}>Cerrar</IonButton>
                    </div>

                </IonModal>

                <div>
                    <IonButton disabled={false} onClick={() => setShowModal(elModal)} color="primary" slot="end" expand="full">
                    {props.turno.guardia?<IonIcon icon={calendar} slot="start" />:<IonIcon icon={calendar} slot="start" />}

                    <IonLabel><b>{props.turno.fecha}</b>
                    </IonLabel>
                        {/*{confirmar2?<div><IonIcon icon={closeCircle} size="large" color="danger" /></div>:null}*/}
                        {estadoTurno()}
                    </IonButton>
                </div>


                {props.turno.estado === 'pendiente'?
                    <div className="confirmar"  onClick={() =>
                        present({

                            header: '¡Importante!',
                            message: '¿Confirma el turno?',
                            buttons: [
                                { text: 'Aceptar fecha', handler: (d) => {confirmarHandler(true)} },
                                { text: 'Rechazar'}
                            ],
                            // onDidDismiss: (e) => {setShowActionSheet(false)},
                        })
                    } >

                            <IonButton  size='default' fill='outline'>Confirmar</IonButton>


                    </div>

                    :null}
            </IonCard>
            <IonModal cssClass='nuevaFecha' isOpen={showModalNuevaFecha}>

                    <IonHeader translucent>
                        <IonToolbar className="tab">

                             <IonTitle className="tab" slot={'end'}>Turnos disponibles</IonTitle>


                        </IonToolbar>
                    </IonHeader>
                <IonContent>
                    <IonList>
                        <IonRadioGroup>
                            {/*{turnos.map((turno:any)=>(*/}
                            <IonItem>
                                <IonIcon slot="start" icon={calendar}/> <IonLabel>7/11/2021 - 13:00 hs</IonLabel>
                                <IonRadio/>
                            </IonItem>
                            <IonItem>
                                <IonIcon slot="start" icon={calendar}/> <IonLabel>7/11/2021 - 13:00 hs</IonLabel>
                                <IonRadio/>
                            </IonItem>
                            <IonItem>
                                <IonIcon slot="start" icon={calendar}/> <IonLabel>7/11/2021 - 13:00 hs</IonLabel>
                                <IonRadio/>
                            </IonItem><IonItem>
                            <IonIcon slot="start" icon={calendar}/> <IonLabel>7/11/2021 - 13:00 hs</IonLabel>
                            <IonRadio/>
                        </IonItem><IonItem>
                            <IonIcon slot="start" icon={calendar}/> <IonLabel>7/11/2021 - 13:00 hs</IonLabel>
                            <IonRadio/>
                        </IonItem>
                            <IonItem>
                                <IonIcon slot="start" icon={calendar}/> <IonLabel>7/11/2021 - 13:00 hs</IonLabel>
                                <IonRadio/>
                            </IonItem>
                            <IonItem>
                                <IonIcon slot="start" icon={calendar}/> <IonLabel>7/11/2021 - 13:00 hs</IonLabel>
                                <IonRadio/>
                            </IonItem><IonItem>
                            <IonIcon slot="start" icon={calendar}/> <IonLabel>7/11/2021 - 13:00 hs</IonLabel>
                            <IonRadio/>
                        </IonItem>
                            <IonItem>
                                <IonIcon slot="start" icon={calendar}/> <IonLabel>7/11/2021 - 13:00 hs</IonLabel>
                                <IonRadio/>
                            </IonItem>






                            {/*}))}*/}
                        </IonRadioGroup>

                    </IonList>
                </IonContent>
                <IonButton onClick={() => setShowModalNuevaFecha(false)}>Confirmar</IonButton>

            </IonModal>
            <IonAlert
                isOpen={showAlert2}

                header={'¡Alerta!'}


                message=  {'Hay un nuevo turno asignado'}
                buttons={['Aceptar']}

            />

            <IonActionSheet

                isOpen={showActionSheet}

                cssClass='my-custom-class'
                header={"¡Hay un nuevo turno asignado!"}
                animated={true}
                backdropDismiss={false}

                buttons={[{
                    //icon: atCircleSharp,
                    text: 'Aceptar',
                    role: 'destructive',

                    handler: () => {
                        console.log('Delete clicked');
                    }
                }

                ]}
            >
            </IonActionSheet>



        </>

    );
}
export default Turnos;
