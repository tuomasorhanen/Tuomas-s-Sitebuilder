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
  _id: string;
  _type: 'color';
  hex: string;
  alpha: number;
};

export interface ISpacer {
  _key: string;
  _type: 'spacer';
  size: '4' | '8' | '16' | '24';
  bgColor: IColor;
}

export interface IUiElement {
  _key: string;
  _type: 'uiElement';
  style: 'wave';
  bgColor: IColor;
  highlightColor: IColor;
}

export type IMetaFields = {
  _id: string;
  metaTitle?: string;
  metaDescription?: string;
  openGraphImage?: ISanityImage;
  openGraphTitle?: string;
  openGraphDescription?: string;
};

export type ISocialFields = {
  _id: string;
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
  content: IHeadingAndTitle[] | IHero[] | ISpacer[] | IGrid[];
};

export type ISanityImage = {
  _id: string;
  url: any;
  _type: string;
  asset: {
    url(url: any): unknown;
    _ref: string;
    _type: string;
  };
};

type ICallToAction = {
  _id: string;
  callToAction: string;
  navigateToPage: string;
  name: string;
  url: string;
  image: ISanityImage;
  imageText: string;
  _type: string;
};

export type IHero = {
  _id: string;
  _key: string;
  _type: string;
  blockContent: any;
  image: ISanityImage;
  buttons: ICallToAction[];
  layout: 'image-bg' | 'image-right' | 'image-left' | 'hero-slash-bg' | 'hero-right-simple';
  bgColor: IColor;
  textColor: IColor;
  highlightColor: IColor;
  opacity: number;
};

export type ICard = {
  _id: string;
  _key: string;
  _type: string;
  blockContent: any;
  image: ISanityImage;
  layout: 'simple' | 'image-top';
  bgColor: IColor;
  textColor: IColor;
  highlightColor: IColor;
  opacity: number;
};

export type IBall = {
  _id: string;
  _key: string;
  _type: string;
  blockContent: any;
  bgColor: IColor;
  textColor: IColor;
  highlightColor: IColor;
  opacity: number;
};

export type IGrid = {
  _id: string;
  _key: string;
  title: string;
  columns: IColumns;
  items: IHero[] | ICard;
};

export type IColumns = {
  small: '12' | '6' | '4' | '3' | '2' ;
  medium: '12' | '6' | '4' | '3' | '2' ;
  large: '12' | '6' | '4' | '3' | '2' ;
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
  _id: string;
  _type: string;
  _key: string;
  image: ISanityImage;
  description: string;
};

export type IBlogHeading = {
  _id: string;
  _type: string;
  _key: string;
  text: string;
  level: number;
};

export type IBlogParagraph = {
  _id: string;
  _type: string;
  _key: string;
  text: string;
  style: string;
};

export type IHeadingAndTitle = {
  _id: string;
  _type: string;
  _key: string;
  blockContent: any;
  bgColor: IColor;
  textColor: IColor;
};

export type IPerson = {
  _id: string;
  _type: 'Person';
  name: string;
  role: string;
  image: ISanityImage;
};

export type IReference = {
  _id: string;
  _ref: string;
  _type: 'blogPost';
};

export type ISlug = {
  current: string;
};
