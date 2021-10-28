import { IonLabel, IonPage, IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonMenuButton, IonButton } from '@ionic/react';
import React, { useState, useEffect, useContext } from 'react';
import './MiPerfil.css';
import ImagenPerfil from "../images/perfil.jpg"
// import { descarga } from '../firebaseConfig';
import UsuarioContext from '../context/UsuarioContext';
import Imagenlogout from "../images/logout.svg"



const MiPerfil: React.FC = () => {



  const userIngresado = useContext(UsuarioContext);
  const { user } = userIngresado;



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
          <br></br>

          <IonMenuButton color="primary" slot="start" />




          <IonTitle><b>Mis datos</b></IonTitle>

        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>



        <IonContent scrollEvents={true} scroll-y={true} >
          <br></br>

          <img className="centrada" src={ImagenPerfil} alt="centered image" width="100" height="100" />



          <IonList>

            <IonItem  >

              <IonLabel><b>Nombre: Pablo Roberto</b> </IonLabel>
            </IonItem>

            <IonItem  >

              <IonLabel><b>Apellido: Vanegas </b></IonLabel>
            </IonItem>

            <IonItem  >

              <IonLabel><b>DNI: 7777777 </b></IonLabel>
            </IonItem>


            <IonItem  >

              <IonLabel><b>Domicilio: Lima 717</b> </IonLabel>
            </IonItem>

            <IonItem  >

              <IonLabel><b>Celular: 11-2345-2345</b> </IonLabel>
            </IonItem>

            <IonItem  >

              <IonLabel><b>Email: prvanega@gmail.com</b> </IonLabel>
            </IonItem>



          </IonList>


        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default MiPerfil;
