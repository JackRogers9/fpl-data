import { gql } from 'apollo-server';

export const previousSeasonScoresSchema = gql`
    type PreviousSeasonScores {
        seasonName: String
        elementCode: Int
        startCost: Int
        endCost: Int
        totalPoints: Int
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
    }
`;
