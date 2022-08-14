import { gql } from 'apollo-server';

export const previousSeasonSchema = gql`
    type PreviousSeason {
        seasonName: String
        totalPoints: Int
        rank: Int
    }
`;
