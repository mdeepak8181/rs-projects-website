import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { deskStructure } from './src/sanity/deskStructure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'RS Projects',
  projectId: 'ff1105lc',    // hardcoded here, not from env
  dataset: 'production',    // hardcoded here, not from env
  apiVersion: '2024-07-18',
  basePath: '/studio',
  plugins: [deskTool({ structure: deskStructure }), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
