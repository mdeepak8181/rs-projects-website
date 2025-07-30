import { StructureBuilder } from 'sanity/desk'

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Galleries')
        .schemaType('gallery')
        .child(S.documentTypeList('gallery').title('Gallery')),

      S.listItem()
        .title('Portfolio')
        .schemaType('portfolio')
        .child(S.documentTypeList('portfolio').title('Portfolio')),

      S.listItem()
        .title('Communities')
        .schemaType('community')
        .child(S.documentTypeList('community').title('Communities')),

      S.listItem()
        .title('Site Settings')
        .schemaType('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
    ])
