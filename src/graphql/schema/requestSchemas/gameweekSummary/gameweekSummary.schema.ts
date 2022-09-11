import { gql } from 'apollo-server';

export const gameweekSummarySchema = gql`
    type GameweekSummary {
        id: Int
        name: String
        averageEntryScore: Int
        summaryOverallRank: Int
        summaryEventPoints: Int
        summaryEventRank: Int
    }
`;
