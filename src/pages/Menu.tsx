import { Redirect, Route } from 'react-router-dom';
import IconoHome from "../images/home3.png"
import React, { useState, useEffect, useContext } from 'react';

import {
  IonAlert,
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
  home,
  calendar,
  square,
  triangle,
  moon,
  star,
  flame,
  car,
  globe,
  man,
  person,
  cardSharp,
  notifications
} from 'ionicons/icons';

import Home from '../components/Home';
import TurnosTab from '../components/TurnosTab';
import Alertas from '../components/Alertas';
import './Menu.css';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import '../theme/variables.css';
import {descarga} from '../firebaseConfig';



const Menu: React.FC = () => {
 return(
  <IonApp className="todo">
  <IonReactRouter>
    <IonTabs>
      <IonRouterOutlet id="scheduleAppM1">
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/turnos">
          <TurnosTab />
        </Route>


        <Route exact path="/alertas">
          <Alertas />
        </Route>



        <Route exact path="/menu">
          {/* <Redirect to="/tab1" /> */}
          <Redirect to="/home" />

        </Route>


      </IonRouterOutlet>
      <IonTabBar slot="bottom">

        <IonTabButton tab="home" href="/home">
        <IonIcon icon={home} />
          <IonLabel>Inicio</IonLabel>
        </IonTabButton>

        <IonTabButton tab="turnos" href="/turnos">
          <IonIcon icon={calendar} />
          <IonLabel>Turnos</IonLabel>
        </IonTabButton>




        <IonTabButton tab="alertas" href="/alertas">
          <IonIcon icon={notifications} />
          <IonLabel>Alertas</IonLabel>
        </IonTabButton>

      </IonTabBar>
    </IonTabs>
  </IonReactRouter>
</IonApp>


)};

export default Menu;
