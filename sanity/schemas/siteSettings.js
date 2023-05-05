import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField('string', {
      name: 'title',
      title: 'Site Title',
      type: 'string',
    }),
    defineField('string', {
      name: 'description',
      title: 'Site Description',
      type: 'string',
    }),
    defineField('string', {
      name: 'url',
      title: 'Site Keywords',
      type: 'string',
    }),
  ],
})
