import { gql } from 'apollo-server';

export const PhaseSchema = gql`
    type Phase {
        id: Int
        name: String
        startEvent: String
        stopEvent: String
    }
`;
