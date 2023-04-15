
import Script from 'next/script';
import { IBot } from '_lib/types';

type IRhobotWebChatComponent = {
    'tenant-id': string;
    'instance-id': string;
    'subscription-key': string;
  
    'node-id'?: string;
    'conversation-key'?: string;
    'user-id'?: string;
    'user-name'?: string;
    'user-tags'?: string;
    'locale'?: string;
    'debug'?: boolean;
  };
  
  declare global {
    namespace JSX {
      interface IntrinsicElements {
        'rhobot-webchat': IRhobotWebChatComponent;
      }
    }
  }

const BotSection = (props: IBot) => {
  const { tenantId, instanceId, subscriptionKey,  } = props;

  return (<>
      <Script type="module" src="https://dev.rhobot.studio/cdn/rhobot-components/rhobot-components.esm.js"></Script>
        <rhobot-webchat tenant-id={tenantId} instance-id={instanceId} subscription-key={subscriptionKey}></rhobot-webchat>
        </>
  );
};

export default BotSection;