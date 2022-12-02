export default {
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    {
      name: 'navn',
      title: 'Navn',
      type: 'string',
    },
    {
      name: 'rolle',
      title: 'Rolle',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    },
  ],
  // preview: {
  //   select: {
  //     title: 'name',
  //     media: 'image',
  //   },
  // },
}
