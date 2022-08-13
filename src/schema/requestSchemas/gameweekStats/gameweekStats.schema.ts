import { gql } from 'apollo-server';
import { playerGameweekExplainSchema } from './playerGameweekExplain.schema';
import { playerGameweekStatsSchema } from './playerGameweekStats.schema';
import { playerGameweekDataSchema } from './playerGameweekData.schema';
import { statsExplanationSchema } from './statsExplanation.schema';

const gameweekDataSchema = gql`
    type GameweekData {
        elements: [PlayerGameweekData]
    }
`;

export const gameweekDataSchemas = [
    gameweekDataSchema,
    playerGameweekDataSchema,
    playerGameweekStatsSchema,
    playerGameweekExplainSchema,
    statsExplanationSchema
];
