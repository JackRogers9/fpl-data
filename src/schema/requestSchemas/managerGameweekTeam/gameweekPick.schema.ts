import { gql } from 'apollo-server';

export const gameweekPickSchema = gql`
    type GameweekPick {
        element: Int
        position: Int
        multiplier: Int
        isCaptain: Boolean
        isViceCaptain: Boolean
    }
`;
