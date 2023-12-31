/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetStarships($first: Int!, $after: String) {\n    starships(first: $first, after: $after) {\n      edges {\n        node {\n          id\n          name\n          model\n          starshipClass\n        }\n      }\n      pageInfo {\n        hasPreviousPage\n        hasNextPage\n        endCursor\n        startCursor\n      }\n    }\n  }\n": types.GetStarshipsDocument,
    "\n  fragment PilotFragment on Person {\n    id\n    name\n    birthYear\n  }\n": types.PilotFragmentFragmentDoc,
    "\n  query GetStarship($starshipID: ID!) {\n    starship(id: $starshipID) {\n      id\n      name\n      model\n      starshipClass\n      length\n      cargoCapacity\n      hyperdriveRating\n      pilots {\n        nodes {\n          id\n          ...PilotFragment\n        }\n      }\n    }\n  }\n": types.GetStarshipDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetStarships($first: Int!, $after: String) {\n    starships(first: $first, after: $after) {\n      edges {\n        node {\n          id\n          name\n          model\n          starshipClass\n        }\n      }\n      pageInfo {\n        hasPreviousPage\n        hasNextPage\n        endCursor\n        startCursor\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetStarships($first: Int!, $after: String) {\n    starships(first: $first, after: $after) {\n      edges {\n        node {\n          id\n          name\n          model\n          starshipClass\n        }\n      }\n      pageInfo {\n        hasPreviousPage\n        hasNextPage\n        endCursor\n        startCursor\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PilotFragment on Person {\n    id\n    name\n    birthYear\n  }\n"): (typeof documents)["\n  fragment PilotFragment on Person {\n    id\n    name\n    birthYear\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetStarship($starshipID: ID!) {\n    starship(id: $starshipID) {\n      id\n      name\n      model\n      starshipClass\n      length\n      cargoCapacity\n      hyperdriveRating\n      pilots {\n        nodes {\n          id\n          ...PilotFragment\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetStarship($starshipID: ID!) {\n    starship(id: $starshipID) {\n      id\n      name\n      model\n      starshipClass\n      length\n      cargoCapacity\n      hyperdriveRating\n      pilots {\n        nodes {\n          id\n          ...PilotFragment\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;