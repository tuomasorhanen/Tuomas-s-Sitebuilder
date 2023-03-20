export type ISiteSettings = {
  _id: string;
  title: string;
  description: string;
  logo: ISanityImage;
  meta: IMetaFields;
  socialFields: ISocialFields;
  defaultBgColor: IColor;
  defaultTextColor: IColor;
  defaultHighlightColor: IColor;
};

export type IColor = {
  _type: 'color';
  hex: string;
  alpha: number;
};

export type IMetaFields = {
  metaTitle?: string;
  metaDescription?: string;
  openGraphImage?: ISanityImage;
  openGraphTitle?: string;
  openGraphDescription?: string;
};

export type ISocialFields = {
  twitter?: string;
  instagram?: string;
  facebook?: string;
  linkedIn?: string;
  youtube?: string;
};

export type IPage = {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: 'Page';
  _updatedAt: Date;
  meta: IMetaFields;
  name: string;
  menuOrder: number;
  content: IHeadingAndTitle[] | ITestimonial[] | IHero[];
};

export type ISanityImage = {
  url: any;
  _type: string;
  asset: {
    url(url: any): unknown;
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
  imageText: string;
  _type: string;
};

export type IHero = {
  _key: string;
  _type: string;
  title: string;
  description: string;
  image: ISanityImage;
  buttons: ICallToAction[];
  layout: 'image-bg' | 'image-right' | 'image-left' | 'new-hero';
  bgColor: IColor;
  textColor: IColor;
  highlightColor: IColor;
  opacity: number;
};

export type IBlog = {
  _id: string;
  _type: string;
  _key: string;
  title: string;
  slug: ISlug;
  image: ISanityImage;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  category: string;
  author: string;
  content: IBlogImage[] | IBlogHeading[] | IBlogParagraph[];
};

export type IBlogImage = {
  _type: string;
  _key: string;
  image: ISanityImage;
  description: string;
};

export type IBlogHeading = {
  _type: string;
  _key: string;
  text: string;
  level: number;
};

export type IBlogParagraph = {
  _type: string;
  _key: string;
  text: string;
  style: string;
};

export type IHeadingAndTitle = {
  _type: string;
  _key: string;
  title: string;
  heading: string;
};

export type ITestimonial = {
  _ref: string;
  _type: 'Testimonial';
  _key: string;
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
  _type: 'Testimonial' | 'blogPost';
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
