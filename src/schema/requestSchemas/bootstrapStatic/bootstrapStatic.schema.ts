import { gql } from 'apollo-server';

import { ChipPlaySchema, EventSchema, TopElementInfoSchema } from './event.schema';
import { GameSettingsSchema } from './gameSettings.schema';

const GeneralSchema = gql`
    type General {
        events: [Event]
        gameSettings: GameSettings
        totalPlayers: Int
    }
`;

export const BootstrapStaticSchema = [
    GeneralSchema,
    GameSettingsSchema,
    EventSchema,
    ChipPlaySchema,
    TopElementInfoSchema
];
