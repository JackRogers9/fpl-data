import {
    getGeneralData,
    getDreamTeamData,
    getEventStatusData,
    getFixturesData,
    getGameweekData,
    getManagerData,
    getManagerGameweekTeam,
    getManagerHistoryData,
    getManagerTransferData,
    getSetPieceData,
    getElementSummary
} from './requests';

export const endpointResolvers = {
    general: () => getGeneralData(),
    fixtures: () => getFixturesData(),
    eventStatus: () => getEventStatusData(),
    setPieceNotes: () => getSetPieceData(),

    gameweekData: (
        _: unknown,
        args: { eventId: number }
    ) => getGameweekData(args.eventId),

    elementSummary: (
        _: unknown,
        args: { elementId: number }
    ) => getElementSummary(args.elementId),

    managerInformation: (
        _: unknown,
        args: { managerId: number }
    ) => getManagerData(args.managerId),

    managerHistory: (
        _: unknown,
        args: { managerId: number }
    ) => getManagerHistoryData(args.managerId),

    managerGameweekTeam: (
        _: unknown,
        args: { managerId: number, eventId: number }
    ) => getManagerGameweekTeam(args.managerId, args.eventId),

    managerTransfers: (
        _: unknown,
        args: { managerId: number }
    ) => getManagerTransferData(args.managerId),

    dreamTeam: (
        _: unknown,
        args: { eventId: number }
    ) => getDreamTeamData(args.eventId)
};
