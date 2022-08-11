import { gql } from 'apollo-server';

export const statusDetailsSchema = gql`
    type StatusDetails {
        bonusAdded: Boolean
        date: String
        event: Int
        points: String
    }    
`;
