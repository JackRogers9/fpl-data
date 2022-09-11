import { gql } from 'apollo-server';
import { statSchema } from './stat.schema';
import { dataSchema } from './data.schema';

const fixtureSchema = gql`
    type Fixture {
        code: Int
        event: Int
        finished: Boolean
        finishedProvisional: Boolean
        id: Int
        kickoffTime: String
        minutes: Int
        provisionalStartTime: Boolean
        started: Boolean
        teamA: Int
        teamAScore: Int
        teamH: Int
        teamHScore: Int
        stats: [Stat]
        teamHDifficulty: Int
        teamADifficulty: Int
        pulseId: Int
    }
`;

export const fixturesSchemas = [
    fixtureSchema,
    statSchema,
    dataSchema
];
