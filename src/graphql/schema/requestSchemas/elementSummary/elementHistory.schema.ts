import { gql } from 'apollo-server';

export const elementHistorySchema = gql`
    type ElementHistory {
        element: Int
        fixture: Int
        opponentTeam: Int
        totalPoints: Int
        wasHome: Boolean
        kickoffTime: String
        teamHScore: Int
        teamAScore: Int
        round: Int
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
        value: Int
        transfersBalance: Int
        selected: Int
        transfersIn: Int
        transfersOut: Int
    }
`;
