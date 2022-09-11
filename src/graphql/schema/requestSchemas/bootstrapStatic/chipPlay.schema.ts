import { gql } from 'apollo-server';

export const chipPlaySchema = gql`
    type ChipPlay {
        chipName: String
        numPlayed: Int
    }
`;
