import { SchemaTypeDefinition } from 'sanity'
import Blog from './Blog'
import Page from './Page'
import Hero from './types/Hero'
import Testimonials from './Testimonials'
import About from './types/About'
import Services from './Services'
import HeadingAndTitle from './types/HeadingAndTitle'
import Button from './types/Button'
import BlockContent from './types/BlockContent'
import BlogHeading from './types/BlogHeading'
import BlogImage from './types/BlogImage'
import BlogParagraph from './types/BlogParagraph'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    Blog,
    Page,
    Hero,
    Testimonials,
    About,
    Services,
    HeadingAndTitle,
    Button,
    BlockContent,
    BlogHeading,
    BlogImage,
    BlogParagraph
  ],
}
