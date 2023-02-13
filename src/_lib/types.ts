export type IPage = {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: 'Page';
  _updatedAt: Date;
  name: string;
  menuOrder: number;
  content: IHeadingAndTitle[] | ITestimonial[] | IHero[];
};

type ISanityImage = {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
};

type ICallToAction = {
  callToAction: string;
  navigateToPage: string;
  name: string;
  url: string;
  image: ISanityImage;
  _type: string;
};

export type IHero = {
  _key: string;
  _type: string;
  title: string;
  description: string;
  image: ISanityImage;
  buttons: ICallToAction[];
  layout: 'slash-right' | 'circle-left';
};

export type IBlog = {
  _id: string;
  _type: string;
  title: string;
  slug: ISlug;
  image: ISanityImage;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  category: string;
  author: string;
};

export type IHeadingAndTitle = {
  _type: string;
  title: string;
  heading: string;
};

export type ITestimonial = {
  _ref: string;
  _type: 'Testimonial';
  title: string;
  quote: string;
  company: ICompany;
  person: IPerson;
  referenceImage: string;
};

export type ICompany = {
  _id: string;
  _type: 'Company';
  name: string;
  people: IPerson[];
};

export type IPerson = {
  _id: string;
  _type: 'Person';
  name: string;
  role: string;
  company: ICompany;
  image: ISanityImage;
};

export type IReference = {
  _ref: string;
  _type: 'Testimonial' | 'blogPost' | 'Social';
};

export type IService = {
  _key: string;
  _type: string;
  title: string;
  description: string;
  image: ISanityImage;
};

export type ISlug = {
  current: string;
};
