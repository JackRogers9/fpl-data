import { gql } from 'apollo-server';

export const futureFixturesSchema = gql`
    type FutureFixtures {
        id: Int
        code: Int
        teamH: Int
        teamHScore: String
        teamA: Int
        teamAScore: String
        event: Int
        finished: Boolean
        minutes: Int
        provisionalStartTime: Boolean
        kickoffTime: String
        eventName: String
        isHome: Boolean
        difficulty: Int
    }
`;
