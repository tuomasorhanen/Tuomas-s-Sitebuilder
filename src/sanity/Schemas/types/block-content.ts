import { RiFileTextLine } from 'react-icons/ri';
import { defineField } from 'sanity';
import lineBreak from './lineBreak';

const blockContent = defineField({
  name: 'blockContent',
  title: 'Block Content',
  description: 'Text Block',
  type: 'object',
  hidden: false,
  icon: RiFileTextLine,
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'H5', value: 'h5' },
            { title: 'H6', value: 'h6' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [{ title: 'Bullet', value: 'bullet' }],
          marks: {
            decorators: [
              { value: 'strong', title: 'Strong' },
              {
                value: 'em',
                title: 'Italic',
              },
              { value: 'underline', title: 'Underline' },
              { value: 'code', title: 'Code' },
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
              {
                title: 'Internal Link',
                name: 'internalLink',
                type: 'reference',
                to: [{ type: 'post' }, { type: 'page' }], // Adjust this to match your internal document types
              },
            ],
          },
        },
        lineBreak,
        {
          name: 'youtube',
          title: 'YouTube Video',
          type: 'object',
          fields: [
            {
              name: 'url',
              title: 'YouTube Video URL',
              type: 'url',
            },
          ],
        },
        {
          name: 'externalLink',
          title: 'External Link',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Text Section',
      };
    },
  },
});

export default blockContent;
