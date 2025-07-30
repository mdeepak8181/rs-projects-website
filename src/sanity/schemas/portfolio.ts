import { defineType, defineField } from 'sanity'

export const portfolio = defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'location', title: 'Location / Area', type: 'string' }),
    defineField({ name: 'type', title: 'Type', type: 'string' }),
    defineField({ name: 'year', title: 'Year', type: 'string' }),
    defineField({ name: 'size', title: 'Size', type: 'string' }),
    defineField({ name: 'bedrooms', title: 'Bedrooms', type: 'number' }),
    defineField({ name: 'bathrooms', title: 'Bathrooms', type: 'number' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'object',
      fields: [
        { name: 'hero', title: 'Hero Image', type: 'image' },
        { name: 'before', title: 'Before Image', type: 'image' },
        {
          name: 'gallery',
          title: 'Gallery Images',
          type: 'array',
          of: [{ type: 'image' }],
        },
      ],
    }),
    defineField({ name: 'budget_range', title: 'Budget Range', type: 'string' }),
    defineField({ name: 'timeline', title: 'Timeline', type: 'string' }),

    // 🔥 Reference to Community for your matching
    defineField({
      name: 'community',
      title: 'Community',
      type: 'reference',
      to: [{ type: 'community' }],
    }),
  ],
})
