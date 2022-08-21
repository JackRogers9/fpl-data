import { gql } from 'apollo-server';
import { managerGameweekTeamSchemas } from './requestSchemas/managerGameweekTeam/managerGameweekTeam.schema';
import { managerInformationSchemas } from './requestSchemas/managerInformation/managerInformation.schema';
import { bootstrapStaticSchemas } from './requestSchemas/bootstrapStatic/bootstrapStatic.schema';
import { managerHistorySchemas } from './requestSchemas/managerHistory/managerHistory.schema';
import { setPieceNotesSchemas } from './requestSchemas/setPieceNotes/setPieceNotes.schema';
import { gameweekDataSchemas } from './requestSchemas/gameweekStats/gameweekStats.schema';
import { eventStatusSchemas } from './requestSchemas/eventStatus/eventStatus.schema';
import { fixturesSchemas } from './requestSchemas/fixtures/fixture.schema';

const querySchema = gql`
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
    }
`;

export const typeDefs = [
    querySchema,
    ...bootstrapStaticSchemas,
    ...fixturesSchemas,
    ...eventStatusSchemas,
    ...setPieceNotesSchemas,
    ...gameweekDataSchemas,
    ...managerInformationSchemas,
    ...managerHistorySchemas,
    ...managerGameweekTeamSchemas
];
