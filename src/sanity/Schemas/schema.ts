import { SchemaTypeDefinition } from 'sanity';
import Blog from './Blog';
import Page from './Page';
import Hero from './types/Hero';
import Testimonial from './Testimonial';
import Service from './Service';
import HeadingAndTitle from './types/HeadingAndTitle';
import BlockContent from './types/BlockContent';
import BlogHeading from './types/BlogHeading';
import BlogImage from './types/BlogImage';
import BlogParagraph from './types/BlogParagraph';
import Company from './Company';
import Person from './Person';
import LandingPage from './types/LandingPage';
import GridConfig from './types/GridConfig';
import Social from './types/Social';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    Page,

    Testimonial,
    Blog,
    Company,
    Person,

    LandingPage,

    Hero,
    Social,
    Service,
    HeadingAndTitle,
    BlockContent,
    BlogHeading,
    BlogImage,
    BlogParagraph,

    // Configuration objects
    GridConfig,
  ],
};
