import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schemas'  // 👈 Your schema index

export default defineConfig({
  name: 'default',
  title: 'RS Projects CMS',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ff1105lc',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  basePath: '/studio',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes, // 👈 Make sure this matches what you export
  },
})
