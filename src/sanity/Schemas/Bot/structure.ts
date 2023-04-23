export const botStructure = (S: any) =>
  S.listItem()
    .title('Bot')
    .child(
      S.list()
        .title('Bot Documents')
        .items([
          S.listItem().title('Bots').child(S.documentList().title('Bots').filter('_type == "botSetup"')),

        ])
    );
