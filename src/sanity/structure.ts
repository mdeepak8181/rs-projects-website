import { StructureBuilder } from 'sanity/structure'

export const structure = (S: StructureBuilder) =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Galleries')
                .child(S.documentTypeList('galleries').title('Galleries')),
            S.listItem()
                .title('Portfolio')
                .child(S.documentTypeList('portfolio').title('Portfolio')),
            S.listItem()
                .title('Communities')
                .child(S.documentTypeList('communities').title('Communities')),
            S.listItem()
                .title('SiteSettings')
                .child(S.documentTypeList('SiteSettings').title('SiteSettings')),
        ]);