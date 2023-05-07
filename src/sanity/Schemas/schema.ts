import { SchemaTypeDefinition } from 'sanity';
import Page from './Page Builder/page';
import LandingPage from './Page Builder/landingPage';
import siteSettings from './Site Settings/siteSettings';
import post from './Blog/post';
import person from './Blog/person';
import category from './Blog/category';
import Ball from './types/ball';
import blockContent from './types/block-content';
import Card from './types/card';
import columns from './types/columns';
import CustomButton from './types/customButton';
import grid from './types/grid';
import HeadingAndTitle from './types/headingAndTitle';
import lineBreak from './types/lineBreak';
import SimpleImage from './types/simpleImage';
import uiElement from './types/uiElement';
import Hero from './types/Hero';
import Calendly from './types/calendly';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [

    //Documents
    Page,
    LandingPage,
    siteSettings,
    post,
    person,
    category,

    //Objects
    Ball,
    blockContent,
    Card,
    columns,
    CustomButton,
    grid,
    HeadingAndTitle,
    Hero,
    lineBreak,
    SimpleImage,
    uiElement,
    Calendly,
  ],
};
