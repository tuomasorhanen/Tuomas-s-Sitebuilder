import { IContacts } from '_lib/types';
import Link from 'next/link';

import Calendly from './Calendly';
import Image from './Image';

const ContactsSection = (props: IContacts) => {
  const { title, address, businessId, buttons, description, email, phone } = props;

  const buttonElements = buttons.map(button => {
    if (button._type === 'Social') {
      return (
        <div key={button.name}>
          <Link key={button.name} href={button.url} className="flex">
            <Image {...button.image} alt={button.imageText} className="h-10 w-10 rounded-full" />
          </Link>
        </div>
      );
    }
    return (
      <Link
        key={button.navigateToPage}
        href={button.navigateToPage}
        className=" rounded-md border-2 p-2 shadow-xl hover:scale-105">
        {button.callToAction}
      </Link>
    );
  });

  return (
    <div key={props._key} className="relative flex py-20 lg:px-32">
      <div className="mx-auto max-w-7xl">
        <div className=" pt-32">
          <h3 className="text-6xl font-bold">{title}</h3>
          <h3 className="mt-6 text-xl ">{description}</h3>
          <div className="mt-6">
            <p>{phone}</p>
            <p>{email}</p>
            <p>{address}</p>
            <p>{businessId}</p>
          </div>
          <ul role="list" className="mt-6 flex space-x-4">
            {buttonElements}
          </ul>
        </div>
      </div>
      <div className="h-full w-full">
        <Calendly />
      </div>
    </div>
  );
};

export default ContactsSection;
