import { gql } from 'apollo-server';
import { managerInformationSchemas } from './requestSchemas/managerInformation/managerInformation.schema';
import { bootstrapStaticSchemas } from './requestSchemas/bootstrapStatic/bootstrapStatic.schema';
import { gameweekDataSchemas } from './requestSchemas/gameweekStats/gameweekStats.schema';
import { eventStatusSchemas } from './requestSchemas/eventStatus/eventStatus.schema';
import { fixturesSchemas } from './requestSchemas/fixtures/fixture.schema';

const querySchema = gql`
    type Query {
        general: General
        fixtures: [Fixture]
        eventStatus: EventStatus
        gameweekData(eventId: Int): GameweekData
        playerGameweekData(eventId: Int, playerId: Int): PlayerGameweekData
        managerInformation(managerId: Int): ManagerInformation
    }
`;

export const typeDefs = [
    querySchema,
    ...bootstrapStaticSchemas,
    ...fixturesSchemas,
    ...eventStatusSchemas,
    ...gameweekDataSchemas,
    ...managerInformationSchemas
];
