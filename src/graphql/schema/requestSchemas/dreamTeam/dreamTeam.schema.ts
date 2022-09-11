import { gql } from 'apollo-server';
import { highestScoringPlayerSchema } from './highestScoringPlayer.schema';
import { dreamTeamPlayerSchema } from './dreamTeamPlayer.schema';

const dreamTeamSchema = gql`
    type DreamTeam {
        topPlayer: HighestScoringPlayer
        team: [DreamTeamPlayer]
    }
`;

export const dreamTeamSchemas = [
    dreamTeamSchema,
    highestScoringPlayerSchema,
    dreamTeamPlayerSchema
];
