import { gql } from 'apollo-server';

export const teamSchema = gql`
    type Team {
        code: Int
        draw: Int
        form: String
        id: Int
        loss: Int
        name: String
        played: Int
        points: Int
        position: Int
        shortName: String
        strength: Int
        teamDivision: String
        unavailable: Boolean
        win: Int
        strengthOverallHome: Int
        strengthOverallAway: Int
        strengthAttackHome: Int
        strengthAttackAway: Int
        strengthDefenceHome: Int
        strengthDefenceAway: Int
        pulseId: Int
    }
`;
