import { gql } from 'apollo-server';
import { automaticSubSchema } from './automaticSub.schema';
import { gameweekPickSchema } from './gameweekPick.schema';

const managerGameweekTeamSchema = gql`
    type ManagerGameweekTeam {
        activeChip: String
        automaticSubs: [AutomaticSub]
        entryHistory: EventData
        picks: [GameweekPick]
    }
`;

export const managerGameweekTeamSchemas = [
    managerGameweekTeamSchema,
    automaticSubSchema,
    gameweekPickSchema
];
