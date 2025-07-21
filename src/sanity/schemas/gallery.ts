import { defineType, defineField } from 'sanity'

export const gallery = defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      options: {
        list: [
          { title: 'KITCHENS', value: 'KITCHENS' },
          { title: 'EXTERIORS', value: 'EXTERIORS' },
          { title: 'FLOOR PLANS', value: 'FLOOR PLANS' },
          { title: 'LIVING-DINING', value: 'LIVING-DINING' },
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
    }),
  ],
})
