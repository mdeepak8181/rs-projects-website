import { defineType, defineField } from 'sanity'

export const community = defineType({
  name: 'community',
  title: 'Community',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Community Name', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'image',
      title: 'Thumbnail Image',
      type: 'image',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
    }),
  ],
})
