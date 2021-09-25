import { IonLabel,IonPage,IonCheckbox,IonButton,IonHeader,IonToolbar,IonTitle,IonContent,IonGrid,IonRow,IonCol,IonItemDivider,IonList,IonInput,IonItem } from '@ionic/react';
import React,{useState,useEffect,useContext} from 'react';
import {Link} from 'react-router-dom'
import ImagenTakeCar from "../images/takecar.png"
import './Login.css';
import {loginUser} from '../firebaseConfig';
import { toast } from '../components/toast';
import UsuarioContext from '../context/UsuarioContext'

const Login: React.FC=()=>{

  const userIngresado = useContext(UsuarioContext);
  const {user,agregarUser}= userIngresado;

  const [usuario, guardarUsuario]=useState({
      email:'',
        password:''
    });
  const {email,password}= usuario;

  useEffect(()=>{
    agregarUser(usuario);


  },[usuario])

  const onChange=(e:any)=>{
        guardarUsuario({
            ...usuario, [e.target.name]: e.target.value
        })


    }
  async function login(){

      const res= await loginUser(email, password)
      if (!res){
        toast('Credenciales incorrectas')

      }else{
        toast('Ingresando...')

        window.location.href='/menu'
        localStorage.setItem('vuel',JSON.stringify(usuario.email));

      }



}

    return(

        <IonPage className="todo">
        <IonHeader>
          <IonToolbar>
            <img src={ImagenTakeCar}/>

          </IonToolbar>
        </IonHeader>
        <IonContent>
        <div className='inputs'>
            <IonItem>
                <IonLabel position="floating">Correo electrónico*</IonLabel>
                <IonInput
                    name="email"
                    value={email}
                    onIonChange={onChange} />
            </IonItem>
            <IonItem>
                <IonLabel position="floating" >Contraseña*</IonLabel>
                <IonInput
                    name="password"
                    value={password}
                    onIonChange={onChange}
                    type="password" />
            </IonItem>
        </div>



  <IonGrid>
      <IonRow>
        <IonCol>
          <IonButton className="ion-margin-top"  onClick={login} expand="block">
          Iniciar Sesion
           </IonButton>

        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol><Link to="#" >Olvidaste tu contraseña?</Link></IonCol>
      </IonRow>
  </IonGrid>


        </IonContent>
      </IonPage>
    );
};

export default Login;
