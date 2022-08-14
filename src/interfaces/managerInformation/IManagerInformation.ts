import { IManagerLeagues } from './IManagerLeagues';

export interface IManagerInformation {
    id: number;
    joinedTime: string;
    startedEvent: number;
    favouriteTeam: number;
    playerFirstName: string;
    playerLastName: string;
    playerRegionId: number;
    playerRegionName: string;
    playerRegionIsoCodeShort: string;
    playerRegionIsoCodeLong: string;
    summaryOverallPoints: number;
    summaryOverallRank: number;
    summaryEventPoints: number;
    summaryEventRank: number;
    currentEvent: number;
    leagues: IManagerLeagues;
    name: string;
    nameChangeBlocked: boolean;
    kit: string;
    lastDeadlineBank: number;
    lastDeadlineValue: number;
    lastDeadlineTotalTransfers: number;
}
