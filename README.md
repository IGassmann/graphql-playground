# GraphQL Playground

This is a playground for me to try out different GraphQL features and libraries.

It is made of a GraphQL API built in Go with [gqlgen](https://gqlgen.com/) and
a Next.js app that uses [URQL](https://formidable.com/open-source/urql/) as the
GraphQL client.

## TODO

- [ ] Add filtering, sorting and searching
- [ ] Implement Starship.pilots resolver
- [ ] Set up @defer
- [ ] Implement object identification
- [ ] Move data to database
- [ ] Add example of Union (`union SearchResult = Human | Droid | Starship`)
- [ ] Add example of Interface (`interface Character`)
- [ ] Add example of Enum (`enum LengthUnit`)
- [ ] Model errors in the schema
- [ ] Have localized errors instead of failing a whole query
- [ ] Use dataloader
- [ ] Try out [GraphQLSP](https://github.com/0no-co/GraphQLSP)
