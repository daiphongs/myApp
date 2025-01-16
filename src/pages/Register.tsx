import { IonBackButton, IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { checkmarkDoneOutline } from 'ionicons/icons';

const Login: React.FC = () => {
    const doRegister = (even: any) => {
        event?.preventDefault();
        console.log('Logged in!');
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'success'}>
                    <IonButton slot='start' fill='clear' color={'light'}>
                    <IonBackButton  defaultHref="/" text="Back"></IonBackButton>
                    </IonButton>

                    <IonTitle>Free Code Camp</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonCard>
                    <IonCardContent>
                        <form onSubmit={doRegister}>
                            <IonInput className="ion-margin-top" fill='outline' label='Email' type='email' labelPlacement='floating' placeholder='abc@email.com'></IonInput>
                            <IonInput className="ion-margin-top" fill='outline' label='Password' type='password' labelPlacement='floating'></IonInput>
                            <IonButton className="ion-margin-top" expand='block' type='submit'>Login <IonIcon icon={checkmarkDoneOutline} slot="end"></IonIcon></IonButton>
                        </form>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Login;