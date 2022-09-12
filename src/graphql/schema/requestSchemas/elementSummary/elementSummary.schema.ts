import { gql } from 'apollo-server';
import { previousSeasonScoresSchema } from './previousSeasonScores.schema';
import { futureFixturesSchema } from './futureFixtures.schema';
import { elementHistorySchema } from './elementHistory.schema';

const elementSummarySchema = gql`
    type ElementSummary {
        fixtures: [FutureFixtures]
        history: [ElementHistory]
        historyPast: String
    }    
`;

export const elementSummarySchemas = [
    elementSummarySchema,
    previousSeasonScoresSchema,
    futureFixturesSchema,
    elementHistorySchema
];
