import { managerGameweekTeamSchemas } from './requestSchemas/managerGameweekTeam/managerGameweekTeam.schema';
import { managerInformationSchemas } from './requestSchemas/managerInformation/managerInformation.schema';
import { bootstrapStaticSchemas } from './requestSchemas/bootstrapStatic/bootstrapStatic.schema';
import { managerTransferSchema } from './requestSchemas/managerTransfer/managerTransfer.schema';
import { managerHistorySchemas } from './requestSchemas/managerHistory/managerHistory.schema';
import { setPieceNotesSchemas } from './requestSchemas/setPieceNotes/setPieceNotes.schema';
import { gameweekDataSchemas } from './requestSchemas/gameweekStats/gameweekStats.schema';
import { eventStatusSchemas } from './requestSchemas/eventStatus/eventStatus.schema';
import { dreamTeamSchemas } from './requestSchemas/dreamTeam/dreamTeam.schema';
import { fixturesSchemas } from './requestSchemas/fixtures/fixture.schema';
import { querySchema } from './requestSchemas/query/query.schema';

export const typeDefs = [
    querySchema,
    managerTransferSchema,
    ...bootstrapStaticSchemas,
    ...fixturesSchemas,
    ...eventStatusSchemas,
    ...setPieceNotesSchemas,
    ...gameweekDataSchemas,
    ...managerInformationSchemas,
    ...managerHistorySchemas,
    ...managerGameweekTeamSchemas,
    ...dreamTeamSchemas
];
