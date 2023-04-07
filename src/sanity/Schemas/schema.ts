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
import Carousel from './types/carousel';
import columns from './types/columns';
import CustomButton from './types/customButton';
import grid from './types/grid';
import HeadingAndTitle from './types/headingAndTitle';
import Hero from './types/hero';
import lineBreak from './types/lineBreak';
import SimpleImage from './types/simpleImage';
import meta from './types/meta';
import uiElement from './types/uiElement';

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
    Carousel,
    columns,
    CustomButton,
    grid,
    HeadingAndTitle,
    Hero,
    lineBreak,
    meta,
    SimpleImage,
    uiElement
  ],
};
