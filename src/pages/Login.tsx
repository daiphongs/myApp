import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { logInOutline } from 'ionicons/icons';
import { personCircleOutline } from 'ionicons/icons';
import logo from '../assets/logo.png'

const Login: React.FC = () => {
const doLogin = (even:any) => {
    event?.preventDefault();
    console.log('Logged in!');
}
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'success'}>
                    <IonTitle>Free Code Camp</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <div className='ion-text-center ion-padding'><img src={logo} width={'50%'} ></img></div>
                <IonCard>
                    <IonCardContent>
                        <form onSubmit={doLogin}>
                            <IonInput className="ion-margin-top" fill='outline' label='Email' type='email' labelPlacement='floating' placeholder='abc@email.com'></IonInput>
                            <IonInput className="ion-margin-top" fill='outline' label='Password' type='password' labelPlacement='floating'></IonInput>
                            <IonButton className="ion-margin-top" expand='block' type='submit'>Login <IonIcon icon={logInOutline} slot="end"></IonIcon></IonButton>
                            <IonButton routerLink="/register" color="secondary" className="ion-margin-top" expand='block' type='button'>Create Account <IonIcon icon={personCircleOutline} slot="end"></IonIcon></IonButton>
                        </form>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Login;