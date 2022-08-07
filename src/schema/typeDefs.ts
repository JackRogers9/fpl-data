import { gql } from 'apollo-server';

import { BootstrapStaticSchema } from './requestSchemas/bootstrapStatic/bootstrapStatic.schema';

const QuerySchema = gql`
    type Query {
        General: General
    }
`;

export const typeDefs = [
    QuerySchema,
    ...BootstrapStaticSchema
];
