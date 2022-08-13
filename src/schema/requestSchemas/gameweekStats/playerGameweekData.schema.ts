import { gql } from 'apollo-server';

export const playerGameweekDataSchema = gql`
    type PlayerGameweekData {
        id: Int
        stats: PlayerGameweekStats
        explain: [PlayerGameweekExplain]
    }
`;
