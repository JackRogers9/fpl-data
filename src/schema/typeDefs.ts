import { gql } from 'apollo-server';
import { BootstrapStaticSchemas } from './requestSchemas/bootstrapStatic/bootstrapStatic.schema';
import { FixturesSchemas } from './requestSchemas/fixtures/fixture.schema';

const QuerySchema = gql`
    type Query {
        General: General
        Fixtures: [Fixture]
    }
`;

export const typeDefs = [
    QuerySchema,
    ...BootstrapStaticSchemas,
    ...FixturesSchemas
];
