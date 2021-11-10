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
    IonBackdrop,
    IonDatetime, IonToolbar, IonHeader, IonContent, IonTitle, IonMenuButton, IonRadioGroup, IonRadio
} from '@ionic/react';
import React, { useState, useEffect, useContext } from 'react';
import {
    caretForwardCircle,
    heart,
    share,
    trash,
    calendar,
    checkmark,
    checkbox,
    alert,
    close,
    lockClosed,
    closeCircle,
    balloon,
    pin,
    browsers,
    bulbOutline,
    balloonOutline,
    sparkles,
    walk,
    atCircleSharp,
    helpCircleSharp,
    carSport, hammer, document, person, call, time, timeOutline, checkmarkCircleOutline
} from 'ionicons/icons';
import { IonGrid, IonRow, IonCol, } from '@ionic/react';
import ImagenRoma from "../images/coliseo.jpg"
import ImagenLondres from "../images/london.jpg"
import ImagenNY from "../images/ny.jpg"
import ImagenLisboa from "../images/lisboa.jpg"
//import ImagenPCana from "../images/puntacana.jpg"
import ImagenPCana from "../images/Conce.jpg"

import { location } from 'ionicons/icons';

import ImgDetalles from "../images/departures.svg"
import ImgPin from "../images/pin.svg"
import ImgCar from "../images/car3.svg"
import ImgCar2 from "../images/car4.svg"
import ImgPerson from "../images/person.svg"
import ImgTool from "../images/tool.svg"
import ImgWa from "../images/what.svg"

import ImgDetalles1 from "../images/arrival.svg"
import ImgDetalles2 from "../images/boarding.svg"
import ImgDetalles3 from "../images/location.svg"
import ImgDetalles4 from "../images/capacidad.svg"
import ImgDetalles5 from "../images/flight-time.svg"
import ImgDetalles6 from "../images/airplane.svg"
import ImgConfirmar from "../images/ok.svg"
import ImgRechazar from "../images/no.svg"
import ImgSeparador from "../images/separacion.svg"



import './Turnos.css';

import UsuarioContext from '../context/UsuarioContext';

import {capitalize} from "../utils";


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
                                { text: 'Nueva fecha', handler: (d) => {setShowModalNuevaFecha(true)}},
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
                           <IonTitle slot='start'>Turnos disponibles</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                <IonContent>
                    <IonList>
                        <IonRadioGroup>
                            {/*{turnos.map((turno:any)=>(*/}
                            <IonItem button onClick={()=> false}>
                                <IonIcon slot="start" icon={calendar}/> <IonLabel>hola</IonLabel>
                                <IonRadio value={'hola'}></IonRadio>

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
