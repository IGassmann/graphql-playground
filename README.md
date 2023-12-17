# GraphQL Playground

This is a playground for me to try out different GraphQL features and libraries.

It is made of a GraphQL API built in Go with [gqlgen](https://gqlgen.com/) and
a Next.js app that uses [URQL](https://formidable.com/open-source/urql/) as the
GraphQL client.

## TODO

- [ ] Connect the app to the API
- [ ] Move GraphQL Config to the root of the repository
- [ ] Set up @defer
- [ ] Have localized errors instead of failing a whole query
- [ ] Separate user errors from unexpected errors
