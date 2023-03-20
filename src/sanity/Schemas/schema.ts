import { SchemaTypeDefinition } from 'sanity';
import Blog from './Blog/Blog';
import Page from './Page Builder/Page';
import Hero from './types/Hero';
import Testimonial from './Testimonial';
import Service from './Service';
import HeadingAndTitle from './types/HeadingAndTitle';
import BlogHeading from './types/BlogHeading';
import BlogImage from './types/BlogImage';
import BlogParagraph from './types/BlogParagraph';
import Company from './Company';
import Person from './Blog/Person';
import LandingPage from './Page Builder/LandingPage';
import meta from './types/meta';
import socialFields from './types/social-fields';
import siteSettings from './Site Settings/site-settings';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings,
    Page,
    Blog,

    Testimonial,
    Company,
    Person,

    LandingPage,

    Hero,
    Service,
    HeadingAndTitle,
    BlogHeading,
    BlogImage,
    BlogParagraph,
    meta,
    socialFields,
  ],
};
