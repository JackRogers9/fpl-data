import { gql } from 'apollo-server';

export const playerStatsSchema = gql`
    type PlayerStats {
        id: Int
        webName: String
        firstName: String
        secondName: String
        wasHome: Boolean
        totalPoints: Int
        teamName: String
        teamShortName: String
        oppositionName: String
        oppositionShortName: String
        positionShortName: String
        position: Int
        isCaptain: Boolean
        isViceCaptain: Boolean
    }
`;
