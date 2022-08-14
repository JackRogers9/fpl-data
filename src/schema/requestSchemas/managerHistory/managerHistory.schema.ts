import { gql } from 'apollo-server';
import { previousSeasonSchema } from './previousSeason.schema';
import { eventDataSchema } from './eventData.schema';

const managerHistorySchema = gql`
    type ManagerHistory {
        current: [EventData]
        past: [PreviousSeason]
        chips: [String]
    }
`;

export const managerHistorySchemas = [
    managerHistorySchema,
    eventDataSchema,
    previousSeasonSchema
];
