import { Redirect, Route } from 'react-router-dom';
import {IonItem,IonMenu,IonHeader,IonToolbar,IonTitle,IonContent,IonList,
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,IonMenuToggle
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, alertCircle, logOut ,person } from 'ionicons/icons';


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
import './App.css';

/* Theme variables */
import './theme/variables.css';

import Login from './pages/Login';
import Menu from './pages/Menu';
import MiPerfil from './components/MiPerfil';
import Tab6 from './components/Tab6';
import UsuarioState from "./context/UsuarioState"
import './App.css'
//import ImagenFly from "./images/fly.jpg"
import ImagenFly from "./images/takecarlogo.jpg"
import Home from "./components/Home";
import Construccion from './components/Construccion';

const App: React.FC = () => (
  <UsuarioState>
  <IonApp className="todo">
    <IonReactRouter>
    <IonMenu side="start" contentId="scheduleAppM1">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
        <IonMenuToggle>
            <IonItem routerLink="/menu"  ><IonIcon color="medium" slot="start" icon={home}></IonIcon><IonLabel>Home</IonLabel></IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="/miperfil"  ><IonIcon color="medium" slot="start" icon={person}></IonIcon><IonLabel>Perfil</IonLabel></IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem   ><IonIcon color="medium" slot="start" icon={alertCircle}></IonIcon><IonLabel>versión 1.1</IonLabel></IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="/" ><IonIcon color="medium" slot="start" icon={logOut}></IonIcon><IonLabel>Cerrar Sesion</IonLabel></IonItem>
          </IonMenuToggle>
          <img className="imagenHeader2"src={ImagenFly}/>
        </IonList>
      </IonContent>
    </IonMenu>

      <IonRouterOutlet id="scheduleAppM1">
        {/*<Route path="/" component={Login} exact/>*/}
        <Route path="/" component={Menu} exact/>
        <Route path="/miperfil" component={MiPerfil} exact/>
        <Route path="/tab6" component={Tab6} exact/>
        <Route path="/home" component={Home} exact/>
        <Route path="/construccion" component={Construccion} exact/>
        <Redirect to="/"/>
      </IonRouterOutlet>
s
    </IonReactRouter>
  </IonApp>
  </UsuarioState>
);

export default App;
