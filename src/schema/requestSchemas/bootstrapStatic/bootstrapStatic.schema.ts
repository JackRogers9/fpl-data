import { gql } from 'apollo-server';

import { topElementInfoSchema } from './topElementInfo.schema';
import { gameSettingsSchema } from './gameSettings.schema';
import { elementStatSchema } from './elementStat.schema';
import { elementTypeSchema } from './elementType.schema';
import { chipPlaySchema } from './chipPlay.schema';
import { elementSchema } from './element.schema';
import { phaseSchema } from './phase.schema';
import { eventSchema } from './event.schema';
import { teamSchema } from './team.schema';

const generalSchema = gql`
    type General {
        events: [Event]
        gameSettings: GameSettings
        phases: [Phase]
        teams: [Team]
        totalPlayers: Int
        elements: [Element]
        elementStats: [ElementStat]
        elementTypes: [ElementType]
    }
`;

export const BootstrapStaticSchemas = [
    generalSchema,
    gameSettingsSchema,
    eventSchema,
    chipPlaySchema,
    topElementInfoSchema,
    phaseSchema,
    teamSchema,
    elementSchema,
    elementStatSchema,
    elementTypeSchema
];
