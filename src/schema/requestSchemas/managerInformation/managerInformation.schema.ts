import { gql } from 'apollo-server';
import { managerLeaguesSchema } from './managerLeagues.schema';
import { cupInformationSchema } from './cupInformation.schema';
import { classicLeagueSchema } from './classicLeague.schema';
import { cupStatusSchema } from './cupStatus.schema';

const managerInformationSchema = gql`
    type ManagerInformation {
        id: Int
        joinedTime: String
        startedEvent: Int
        favouriteTeam: Int
        playerFirstName: String
        playerLastName: String
        playerRegionId: Int
        playerRegionName: String
        playerRegionIsoCodeShort: String
        playerRegionIsoCodeLong: String
        summaryOverallPoints: Int
        summaryOverallRank: Int
        summaryEventPoints: Int
        summaryEventRank: Int
        currentEvent: Int
        leagues: ManagerLeagues
        name: String
        nameChangeBlocked: Boolean
        kit: String
        lastDeadlineBank: Int
        lastDeadlineValue: Int
        lastDeadlineTotalTransfers: Int
    }
`;

export const managerInformationSchemas = [
    managerInformationSchema,
    managerLeaguesSchema,
    classicLeagueSchema,
    cupInformationSchema,
    cupStatusSchema,
];
