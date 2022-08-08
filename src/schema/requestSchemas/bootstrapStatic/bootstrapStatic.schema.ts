import { gql } from 'apollo-server';

import { ChipPlaySchema, EventSchema, TopElementInfoSchema } from './event.schema';
import { GameSettingsSchema } from './gameSettings.schema';
import { ElementStatSchema } from './elementStat.schema';
import { ElementTypeSchema } from './elementType.schema';
import { ElementSchema } from './element.schema';
import { PhaseSchema } from './phase.schema';
import { TeamSchema } from './team.schema';

const GeneralSchema = gql`
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

export const BootstrapStaticSchema = [
    GeneralSchema,
    GameSettingsSchema,
    EventSchema,
    ChipPlaySchema,
    TopElementInfoSchema,
    PhaseSchema,
    TeamSchema,
    ElementSchema,
    ElementStatSchema,
    ElementTypeSchema
];
