import { gql } from 'apollo-server';

export const playerGameweekStatsSchema = gql`
    type PlayerGameweekStats {
        minutes: Int
        goalsScored: Int
        assists: Int
        cleanSheets: Int
        goalsConceded: Int
        ownGoals: Int
        penaltiesSaved: Int
        penaltiesMissed: Int
        yellowCards: Int
        redCards: Int
        saves: Int
        bonus: Int
        bps: Int
        influence: String
        creativity: String
        threat: String
        ictIndex: String
        totalPoints: Int
        inDreamteam: Boolean
    }
`;
