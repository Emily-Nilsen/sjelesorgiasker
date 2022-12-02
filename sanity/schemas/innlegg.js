export default {
  name: 'innlegg',
  title: 'Innlegg',
  type: 'document',
  fields: [
    {
      name: 'tittel',
      title: 'Tittel',
      type: 'string',
    },
    {
      name: 'forfatter',
      title: 'Forfatter',
      type: 'reference',
      to: { type: 'team' },
    },
    {
      name: 'rolle',
      title: 'Rolle',
      type: 'reference',
      to: { type: 'team' },
    },
    {
      name: 'introduksjon',
      title: 'Introduksjon',
      type: 'string',
    },
    {
      name: 'undertekst',
      title: 'Undertekst',
      type: 'string',
    },
    // {
    //   name: 'body',
    //   title: 'Body',
    //   type: 'blockContent',
    // },
  ],
}
