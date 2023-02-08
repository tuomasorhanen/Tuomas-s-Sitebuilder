import { IService } from '_lib/types';

const Service = ({ services }) => {
  return (
    <div className="bg-gray-900 pb-16 lg:relative lg:z-10 lg:pb-0">
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-8 lg:px-8">
        {services.map((service: IService) => (
          <div
            key={service.title}
            className="text-md max-w-3xl px-12 pb-12 text-center font-light leading-9 text-gray-100 md:pb-20"
          >
            <div className=" ">
              <div className="flex items-center justify-center">
                <div className="md:flex-shrink-0">
                  <img
                    className="mb-4 h-20 w-20 rounded-full shadow-xl"
                    src={service.referenceImage}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <h1 className="mb-4 text-3xl font-medium text-white">
              {service.title}
            </h1>
            <p>&ldquo;{service.description}&rdquo;</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
