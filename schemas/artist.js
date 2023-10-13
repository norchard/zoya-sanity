export default {
  name: 'artist',
  type: 'document',
  title: 'Artist',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'thumbnail',
      type: 'image',
      title: 'Thumbnail',
    },
  ],
}
