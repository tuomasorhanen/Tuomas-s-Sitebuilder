import { SchemaTypeDefinition } from 'sanity';
import Page from './Page Builder/Page';
import Hero from './types/Hero';
import HeadingAndTitle from './types/HeadingAndTitle';
import LandingPage from './Page Builder/LandingPage';
import meta from './types/meta';
import siteSettings from './Site Settings/site-settings';
import grid from './types/grid';
import columns from './types/columns';
import Card from './types/card';
import uiElement from './types/UiElement';
import blockContent from './types/block-content';
import Ball from './types/ball';
import lineBreak from './types/lineBreak';
import post from './Blog/post';
import Person from './Blog/Person';
import category from './Blog/category';
import CustomButton from './types/customButton';
import ExternalPages from './Page Builder/ExternalPages';
import SimpleImage from './types/SimpleImage';
import Carousel from './types/carousel';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings,
    meta,
    Page,
    LandingPage,
    ExternalPages,
    post,
    category,
    Person,
    Hero,
    HeadingAndTitle,
    uiElement,
    CustomButton,
    grid,
    columns,
    Card,
    Ball,
    Carousel,
    SimpleImage,
    blockContent,
    lineBreak
  ],
};
