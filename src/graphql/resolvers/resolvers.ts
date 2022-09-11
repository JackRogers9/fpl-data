import { getPlayerGameweekData } from '../helpers/requestHelpers';
import {
    getBootstrapStaticData,
    getDreamTeamData,
    getEventStatusData,
    getFixturesData,
    getGameweekData,
    getManagerData,
    getManagerGameweekTeam,
    getManagerHistoryData,
    getManagerTransferData,
    getSetPieceData
} from './requests';

export const resolvers = {
    Query: {
        general: () => getBootstrapStaticData(),
        fixtures: () => getFixturesData(),
        eventStatus: () => getEventStatusData(),
        setPieceNotes: () => getSetPieceData(),

        gameweekData: (
            _: unknown,
            args: {eventId: number}
        ) => getGameweekData(args.eventId),

        playerGameweekData: (
            _: unknown,
            args: {eventId: number, playerId: number}
        ) => getPlayerGameweekData(args.eventId, args.playerId),

        managerInformation: (
            _: unknown,
            args: {managerId: number}
        ) => getManagerData(args.managerId),

        managerHistory: (
            _: unknown,
            args: {managerId: number}
        ) => getManagerHistoryData(args.managerId),

        managerGameweekTeam: (
            _: unknown,
            args: {managerId: number, eventId: number}
        ) => getManagerGameweekTeam(args.managerId, args.eventId),

        managerTransfers: (
            _: unknown,
            args: {managerId: number}
        ) => getManagerTransferData(args.managerId),

        dreamTeam: (
            _: unknown,
            args: {eventId: number}
        ) => getDreamTeamData(args.eventId)
    }
};
