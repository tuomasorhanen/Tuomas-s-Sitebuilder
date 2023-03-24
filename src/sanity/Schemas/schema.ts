import { SchemaTypeDefinition } from 'sanity';
import Blog from './Blog/Blog';
import Page from './Page Builder/Page';
import Hero from './types/Hero';
import HeadingAndTitle from './types/HeadingAndTitle';
import BlogHeading from './types/BlogHeading';
import BlogImage from './types/BlogImage';
import BlogParagraph from './types/BlogParagraph';
import Person from './Blog/Person';
import LandingPage from './Page Builder/LandingPage';
import meta from './types/meta';
import socialFields from './types/social-fields';
import siteSettings from './Site Settings/site-settings';
import grid from './types/grid';
import columns from './types/columns';
import Card from './types/card';
import spacer from './types/spacer';
import UiElement from 'components/UI elements/uiElements';
import uiElement from './types/UiElement';
import blockContent from './types/block-content';
import Ball from './types/ball';
import lineBreak from './types/lineBreak';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings,
    Page,
    Blog,

    Person,

    LandingPage,

    Hero,
    Card,
    Ball,
    HeadingAndTitle,
    BlogHeading,
    BlogImage,
    BlogParagraph,
    meta,
    socialFields,
    grid,
    columns,
    spacer,
    uiElement,
    blockContent,
    lineBreak
  ],
};
