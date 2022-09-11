import { gql } from 'apollo-server';

export const phaseSchema = gql`
    type Phase {
        id: Int
        name: String
        startEvent: String
        stopEvent: String
    }
`;
