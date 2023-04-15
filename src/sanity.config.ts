import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { colorInput } from '@sanity/color-input';
import { deskTool } from 'sanity/desk';
import { myTheme } from 'theme';
import { apiVersion, dataset, projectId } from './sanity/env';
import { schema } from './sanity/Schemas/schema';
import { structure } from './sanity/Schemas/types/structure';
import { media } from 'sanity-plugin-media';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [deskTool({ structure }), colorInput(), visionTool({ defaultApiVersion: apiVersion }), media()],
  theme: myTheme,
});
