import { Image } from 'sanity'

export type IHero = {
  _type: string
  title: string
  description: string
  heroImage: string
  buttonText1: string
  url1: string
  buttonText2: string
  url2: string
}
export type IAbout = {
  _type: string
  title: string
  description: string
  aboutImage: string
  buttonText: string
  url: string
}
export type IBlog = {
  _type: string
  title: string
  slug: ISlug
  author: string
  authorImage: string
  mainImage: string
  excerpt: string
  publishedAt: string
  body: object
  readingTime: string
  category: string
}

export type IHeadingAndTitle = {
  _type: string
  title: string
  heading: string
}

export type ITestimonial = {
  _type: string
  title: string
  quote: string
  role: string
  name: string
  company: string
  referenceImage: string
}

export type IService = {
  _type: string
  title: string
  description: string
  referenceImage: string
}

export type IButton = {
  _type: string
  buttonText: string
  buttonUrl: string
}

export type ISlug = {
  current: string
}
