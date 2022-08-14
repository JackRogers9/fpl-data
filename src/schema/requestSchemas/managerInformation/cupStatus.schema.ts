import { gql } from 'apollo-server';

export const cupStatusSchema = gql`
    type CupStatus {
        qualification_event: String
        qualification_numbers: Int
        qualification_rank: Int
        qualification_state: String
    }
`;
