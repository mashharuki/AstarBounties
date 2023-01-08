import { IonContent, IonHeader, IonButton,IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import { getNodeInfo } from '../../hooks/PolkadotJs';
import './Tab1.css';

/**
 * Tab1 Component
 * @returns 
 */
const Tab1: React.FC = () => {

  /**
   * clickAction
   */
  const clickAction =async () => {
    // call getNodeInfo function
    const {chain, nodeName, nodeVersion} = await getNodeInfo();

    console.log("chain:", chain.toString());
    console.log("nodeName:", nodeName.toString());
    console.log("nodeVersion:", nodeVersion.toString());
  } 

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>GetNodeInfo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">GetNodeInfo</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="GetNodeInfo page" />
        <IonButton
          onClick={clickAction}
        >
          get node info
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
