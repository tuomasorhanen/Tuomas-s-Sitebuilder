export const blogStructure = (S: any) =>
  S.listItem()
    .title('Blog')
    .child(
      S.list()
        .title('Blog Documents')
        .items([
          S.listItem().title('Posts').child(S.documentList().title('Posts').filter('_type == "Post"')),
          S.listItem().title('Authors').child(S.documentList().title('Authors').filter('_type == "Person"')),
          S.listItem().title('Categories').child(S.documentList().title('Categories').filter('_type == "category"')),
        ])
    );
