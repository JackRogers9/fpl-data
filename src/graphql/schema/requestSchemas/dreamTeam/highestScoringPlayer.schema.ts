import { gql } from 'apollo-server';

export const highestScoringPlayerSchema = gql`
    type HighestScoringPlayer {
        id: Int
        points: Int
    }
`;
