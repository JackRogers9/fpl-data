import { gql } from 'apollo-server';

export const dreamTeamPlayerSchema = gql`
    type DreamTeamPlayer {
        element: Int
        points: Int
        position: Int
    }
`;
