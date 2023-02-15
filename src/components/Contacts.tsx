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
            <Image {...button.image} alt={button.imageText} className="h-10 w-10 rounded-full object-cover" />
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
    <div key={props._key}>
      <div className="mx-auto grid text-center md:max-w-7xl md:grid-cols-3 md:text-left">
        <div className="pt-24 lg:pt-48">
          <h3 className="text-6xl font-bold">{title}</h3>
          <h3 className="mx-auto mt-6 max-w-3xl text-xl ">{description}</h3>
          <div className="mt-6">
            <p>{phone}</p>
            <p>{email}</p>
            <p>{address}</p>
            <p>{businessId}</p>
          </div>
          <ul role="list" className="mt-6 flex justify-center space-x-4 md:justify-start">
            {buttonElements}
          </ul>
        </div>
        <div className="mt-6 md:col-span-2 md:pl-12">
          <div className="mx-auto">
            <Calendly />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsSection;
