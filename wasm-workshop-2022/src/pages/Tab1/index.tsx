import { IonContent, IonHeader, IonButton,IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { 
  getNodeInfo, 
  stateQuery,
  connect
} from '../../hooks/PolkadotJs';
import { useState } from 'react';
import './Tab1.css';
import Account from '../../components/Acconut';

/**
 * Tab1 Component
 * @returns 
 */
const Tab1: React.FC = () => {
  const [accountName, setAccountName] = useState<string | null>();
  const [address, setAddress] = useState<string | null>();

  /**
   * clickAction
   */
  const clickAction =async () => {
    // call getNodeInfo function
    const {
      chain, 
      nodeName, 
      nodeVersion, 
      consts,
      header
    } = await getNodeInfo();

    console.log("chain:", chain.toString());
    console.log("nodeName:", nodeName.toString());
    console.log("nodeVersion:", nodeVersion.toString());
    console.log("consts:", consts);
    console.log(`last block #${header.number} has hash ${header.hash}`);
  } 

  /**
   * clickAction2 function
   */
  const clickAction2 =async () => {
    // call stateQuery function
    const {
      now,
      data,
      accountData
    } = await stateQuery();

    console.log("now:", now.toString());
    console.log("data:", data.toJSON());
    console.log("accountData:", accountData.toString());
  };

  /**
   * clickAction3
   */
  const clickAction3 = async () => {
    // call createAccount function
    const accounts = await connect();

    console.log(`account address:${accounts?.address}`);
    console.log(`account name:${accounts?.meta.name}`);
    console.log(`account genesisHash:${accounts?.meta.genesisHash}`);

    setAccountName(accounts?.meta.name);
    setAddress(accounts?.address);
  };

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
        <Account name={accountName} address={address} />
        <IonButton
          onClick={clickAction}
        >
          get node info
        </IonButton>
        <IonButton
          onClick={clickAction2}
        >
          state Query
        </IonButton>
        <IonButton
          onClick={clickAction3}
        >
          Connect Wallet
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
