import { gql } from 'apollo-server';
import { bootstrapStaticSchemas } from './requestSchemas/bootstrapStatic/bootstrapStatic.schema';
import { eventStatusSchemas } from './requestSchemas/eventStatus/eventStatus.schema';
import { fixturesSchemas } from './requestSchemas/fixtures/fixture.schema';

const QuerySchema = gql`
    type Query {
        general: General
        fixtures: [Fixture]
        eventStatus: EventStatus
    }
`;

export const typeDefs = [
    QuerySchema,
    ...bootstrapStaticSchemas,
    ...fixturesSchemas,
    ...eventStatusSchemas
];
