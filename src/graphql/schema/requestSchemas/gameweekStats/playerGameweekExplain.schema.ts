import { gql } from 'apollo-server';

export const playerGameweekExplainSchema = gql`
    type PlayerGameweekExplain {
        fixture: Int
        stats: [StatsExplanation]
    }
`;
