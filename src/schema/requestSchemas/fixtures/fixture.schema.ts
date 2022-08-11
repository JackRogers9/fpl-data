import { gql } from 'apollo-server';
import { StatSchema } from './stat.schema';
import { DataSchema } from './data.schema';

const FixtureSchema = gql`
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

export const FixturesSchemas = [
    FixtureSchema,
    StatSchema,
    DataSchema
];
