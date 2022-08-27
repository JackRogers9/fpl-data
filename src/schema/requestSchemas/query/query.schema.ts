import { gql } from 'apollo-server';

export const querySchema = gql`
    type Query {
        general: General
        fixtures: [Fixture]
        eventStatus: EventStatus
        setPieceNotes: SetPieceNotes
        gameweekData(eventId: Int): GameweekData
        playerGameweekData(eventId: Int, playerId: Int): PlayerGameweekData
        managerInformation(managerId: Int): ManagerInformation
        managerHistory(managerId: Int): ManagerHistory
        managerGameweekTeam(managerId: Int, eventId: Int): ManagerGameweekTeam
        dreamTeam(eventId: Int): DreamTeam
    }
`;
