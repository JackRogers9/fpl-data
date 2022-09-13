import { gql } from 'apollo-server';
import { playerStatsSchema } from './playerStats.schema';

const teamStatsSchema = gql`
    type TeamStats {
        automaticSubs: [AutomaticSub]
        entryHistory: EventData
        playerStats: [PlayerStats]
        activeChip: String
    }
`;

export const teamStatsSchemas = [
    teamStatsSchema,
    playerStatsSchema
];
