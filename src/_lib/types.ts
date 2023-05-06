export type ISiteSettings = {
  accentColor: IColor;
  _id: string;
  title: string;
  description: string;
  logo: ISanityImage;
  textColorLight: IColor;
  bgColorLight: IColor;
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
  menuOrder?: number;
  content?: IHeadingAndTitle[] | IHero[] | IGrid[] | IUiElement[] | IPerson[];
};

export type ICallToAction = {
  _key: any;
  _id: string;
  _type: string;
  callToAction: string;
  navigateToPage?: string;
  navigateToUrl?: string;
  linkType: string;
  buttonContent: string;
  image?: ISanityImage;
  backgroundColor?: string;
  textColor?: string;
  customColor?: boolean;
  chosenCustomColor?: IColor;
  border?: boolean;
  borderColor: string
};

export interface IUiElement {
  _key: string;
  _type: 'uiElement';
  style: 'wave' | "transparent-overlap" | 'image-divider' | 'solid-left';
  image?: ISanityImage;
  opacity?: number;
}

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
  layout: 'image-bg-center' | 'image-bg-left' | 'image-bg-right' | 'image-right' | 'circle-overlap-left';
  opacity?: number;
};

export type ISimpleImage = {
  _id: string;
  _key: string;
  _type: string;
  image: ISanityImage;
  style: "square" | "logo-cloud"
}

export type ICard = {
  _id: string;
  _key: string;
  _type: string;
  blockContent: any;
  image?: ISanityImage;
  buttons?: ICallToAction[];
  layout: 'simple' | 'image-top' | 'image-reveal' | 'image-top-rounded-full';
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
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
};

export type IHeadingAndTitle = {
  _id: string;
  _type: string;
  _key: string;
  blockContent: any;
  style: 'centered' | 'overlap-bellow';
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
