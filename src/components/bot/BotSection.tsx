import Script from 'next/script';
import { IBot } from '_lib/types';
import Image from 'components/Image';

type IRhobotWebChatComponent = {};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'rhobot-webchat': IRhobotWebChatComponent;
    }
  }
}

const BotSection = (props: IBot) => {
  const { bot, layout, image } = props;
  const { tenantId, instanceId, subscriptionKey } = bot;

  switch (layout) {
    case 'bot-center':
      return (
        <div>
          <Script
            dangerouslySetInnerHTML={{
              __html: `
                function applyStyles() {
                  const targetElement = document.querySelector('.webchat__send-box__main');
                  const rhobotElement = document.getElementById('rhobot-webchat');
                  if (targetElement) {
                    targetElement.style.display = 'none';
                  }
                }
              `,
            }}
          />
          <Script type="module" src="https://dev.rhobot.studio/cdn/rhobot-components/rhobot-components.esm.js" />
          <div className="grid grid-cols-12 py-16 sm:py-24">
            <div id="rhobot-webchat" className="col-start-4 col-span-6 h-h-bot overflow-y-auto rhobot-webchat"></div>
          </div>
          <rhobot-webchat tenant-id={tenantId} instance-id={instanceId} subscription-key={subscriptionKey}></rhobot-webchat>
        </div>
      );
    case 'bot-image-bg':
      return (
        <div key={props._key} className="relative flex aspect-video max-h-screen w-full items-center justify-center sm:-mt-8">
          <div className="absolute left-0 top-0 -z-10 h-full w-full">
            {image && <Image {...image} className="h-full w-full object-cover" alt="" />}
          </div>
          <div className="absolute left-0 top-0 z-20 h-full w-full "></div>
          <div>
            <Script
              dangerouslySetInnerHTML={{
                __html: `
                  function applyStyles() {
                    const targetElement = document.querySelector('.webchat__send-box__main');
                    const rhobotElement = document.getElementById('rhobot-webchat');
                    if (targetElement) {
                      targetElement.style.display = 'none';
                    }
                  }
                `,
              }}
            />
            <Script type="module" src="https://dev.rhobot.studio/cdn/rhobot-components/rhobot-components.esm.js" />
            <div className="grid grid-cols-12">
              <div id="rhobot-webchat" className={`col-start-4 col-span-6 h-h-bot overflow-y-auto`}></div>
            </div>
            <rhobot-webchat tenant-id={tenantId} instance-id={instanceId} subscription-key={subscriptionKey}></rhobot-webchat>
          </div>
        </div>
      );

    default:
      return <></>;
  }
};

export default BotSection;
