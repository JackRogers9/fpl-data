import { gql } from 'apollo-server';
import { statusDetailsSchema } from './statusDetails.schema';

const eventStatusSchema = gql`
    type EventStatus {
        status: [StatusDetails]
        leagues: String
    }
`;

export const eventStatusSchemas = [
    eventStatusSchema,
    statusDetailsSchema
];
