import { gql } from 'apollo-server';

export const querySchema = gql`
    type Query {
        general: General
        fixtures: [Fixture]
        eventStatus: EventStatus
        setPieceNotes: SetPieceNotes
        gameweekData(eventId: Int): GameweekData
        gameweekSummary(managerId: Int): GameweekSummary
        playerGameweekData(eventId: Int, elementId: Int): PlayerGameweekData
        elementSummary(elementId: Int): ElementSummary
        managerInformation(managerId: Int): ManagerInformation
        managerHistory(managerId: Int): ManagerHistory
        managerGameweekTeam(managerId: Int, eventId: Int): ManagerGameweekTeam
        managerTransfers(managerId: Int): [ManagerTransfer]
        dreamTeam(eventId: Int): DreamTeam
    }
`;
