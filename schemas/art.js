// schemas/image.js
export default {
  name: 'art',
  type: 'document',
  title: 'Art',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'artist',
      type: 'reference',
      title: 'Artist',
      to: [{type: 'artist'}],
    },
    {
      name: 'year',
      type: 'string',
      title: 'Year',
    },
    {
      name: 'medium',
      type: 'string',
      title: 'Medium',
    },
    {
      name: 'dimensions',
      type: 'string',
      title: 'Dimensions',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
  ],
}
