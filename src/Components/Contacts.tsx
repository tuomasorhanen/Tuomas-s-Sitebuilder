import { client } from '_lib/client';
import { IContacts } from '_lib/types';
import Img from 'next/image';
import Link from 'next/link';
import { useNextSanityImage } from 'next-sanity-image';

const ContactsSection = (props: IContacts) => {
  const { title, address, businessId, buttons, description, email, phone } = props;

  return (
    <div className="relative py-32 sm:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="pl-16">
          <h3 className="text-6xl font-bold">{title}</h3>
          <h3 className="mt-6 text-xl ">{description}</h3>
          <div className="mt-6">
            <p className="">{phone}</p>
            <p className="">{email}</p>
            <p className="">{address}</p>
            <p className="">{businessId}</p>
          </div>
        </div>
        <ul role="list" className="mt-6 flex space-x-4 pl-16">
          {buttons &&
            buttons.map(btn => {
              if (btn._type === 'Social') {
                const { image } = btn;
                const imageProps = useNextSanityImage(client, image);
                return (
                  <div>
                    <Link key={btn.name} href={btn.url} className="flex">
                      <Img {...imageProps} className="h-10 w-10 rounded-full" alt="" />
                    </Link>
                  </div>
                );
              }
              return (
                <Link
                  key={btn.navigateToPage}
                  href={btn.navigateToPage}
                  className=" rounded-md border-2 p-2 shadow-xl hover:scale-105">
                  {btn.callToAction}
                </Link>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default ContactsSection;
