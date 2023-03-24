import { SchemaTypeDefinition } from 'sanity';
import Blog from './Blog/post';
import Page from './Page Builder/Page';
import Hero from './types/Hero';
import HeadingAndTitle from './types/HeadingAndTitle';
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
import post from './Blog/post';
import Person from './Blog/Person';
import category from './Blog/category';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings,
    Page,
    post,
    Person,
    LandingPage,
    Hero,
    Card,
    Ball,
    HeadingAndTitle,
    meta,
    socialFields,
    grid,
    columns,
    spacer,
    uiElement,
    blockContent,
    lineBreak,
    category
  ],
};
