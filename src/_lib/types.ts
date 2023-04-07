export type ISiteSettings = {
  _id: string;
  title: string;
  description: string;
  logo: ISanityImage;
  meta: IMetaFields;
  accentColorLight: IColor;
  secondaryColorLight: IColor;
  primaryColorLight: IColor;
  textColorLight: IColor;
  bgColorLight: IColor;
  accentColorDark: IColor;
  secondaryColorDark: IColor;
  primaryColorDark: IColor;
  textColorDark: IColor;
  bgColorDark: IColor;
};

export type IColor = {
  alpha: number;
  hex: string;
};

export type IPage = {
  _id: string;
  _rev: string;
  _type: 'page';
  name: string;
  meta?: IMetaFields;
  menuOrder?: number;
  content?: IHeadingAndTitle[] | IHero[] | IGrid[] | IUiElement[] | IPerson[];
};

type ICallToAction = {
  _id: string;
  _type: string;
  callToAction: string;
  navigateToPage?: string;
  navigateToUrl?: string;
  linkType: string;
  buttonContent: string;
  image?: ISanityImage;
};

export interface IUiElement {
  _key: string;
  _type: 'uiElement';
  style: 'wave' | "transparent-overlap" | 'window';
  image?: ISanityImage;
}

export type IMetaFields = {
  _id: string;
  metaTitle?: string;
  metaDescription?: string;
  openGraphImage?: ISanityImage;
  openGraphTitle?: string;
  openGraphDescription?: string;
};

export type ISanityImage = {
  _key: string;
  _id: string;
  url: any;
  _type: string;
  asset: {
    url(url: any): unknown;
    _ref: string;
    _type: string;
  };
};

export type ICustomButton = {
  _id: string;
  _key: string;
  buttons: ICallToAction[];
}
  
export type IHero = {
  _id: string;
  _key: string;
  _type: string;
  blockContent?: any;
  image?: ISanityImage;
  buttons?: ICallToAction[];
  layout: 'image-bg' | 'image-right' | 'image-left' | 'hero-slash-bg' | 'hero-right-simple';
  opacity?: number;
};

export type ICarousel = {
  _id: string;
  _type: string;
  items: ISimpleImage[];
  layout: 'simpleImage';
};

export type ISimpleImage = {
  _id: string;
  _type: string;
  image: ISanityImage;
}

export type ICard = {
  _id: string;
  _key: string;
  _type: string;
  blockContent: any;
  image?: ISanityImage;
  buttons?: ICallToAction[];
  layout: 'simple' | 'image-top';
};

export type IBall = {
  _id: string;
  _key: string;
  _type: string;
  blockContent: any;
  opacity?: number;
};

export type IGrid = {
  _id: string;
  _key: string;
  title: string;
  columns: IColumns;
  items: IHero[] | ICard [] | IBall[];
};

export type IColumns = {
  small: '12' | '6' | '4' | '3' | '2';
  medium: '12' | '6' | '4' | '3' | '2';
  large: '12' | '6' | '4' | '3' | '2';
};

export type IHeadingAndTitle = {
  _id: string;
  _type: string;
  _key: string;
  blockContent: any;
};

export type IPost = {
  _type: string;
  _key: string;
  title: string;
  slug: ISlug;
  person: IPerson;
  mainImage: ISanityImage;
  categories: ICategory[];
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  blockContent: any;
};

export type IPerson = {
  _id: string;
  _type: 'person';
  name: string;
  role: string;
  image: ISanityImage;
  number?: string;
  email?: string;
};

export type ICategory = {
  _key: string;
  _ref: string;
  _id: string;
  _type: 'category';
  name: string;
  description?: string; 
};

export type IReference = {
  _id: string;
  _ref: string;
  _type: 'post';
};

export type ISlug = {
  current: string;
};
