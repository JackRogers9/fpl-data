import { gql } from 'apollo-server';
import { bootstrapStaticSchemas } from './requestSchemas/bootstrapStatic/bootstrapStatic.schema';
import { fixturesSchemas } from './requestSchemas/fixtures/fixture.schema';

const QuerySchema = gql`
    type Query {
        General: General
        Fixtures: [Fixture]
    }
`;

export const typeDefs = [
    QuerySchema,
    ...bootstrapStaticSchemas,
    ...fixturesSchemas
];
