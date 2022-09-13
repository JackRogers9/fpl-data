import { loadData } from './requests';
import {
    IBootstrapStatic,
    IDreamTeam,
    IElementSummary,
    IEventStatus,
    IFixture,
    IGameweekStats,
    IManagerGameweekTeam,
    IManagerHistory,
    IManagerInformation,
    IManagerTransfer,
    ISetPieceNotes
} from '../../interfaces/src';

export const endpointResolvers = {
    general: (): Promise<IBootstrapStatic> => loadData(`/bootstrap-static/`),

    fixtures: (): Promise<IFixture[]> => loadData(`/fixtures/`),

    eventStatus: (): Promise<IEventStatus> => loadData(`/event-status/`),

    setPieceNotes: (): Promise<ISetPieceNotes> => loadData(`/team/set-piece-notes/`),

    gameweekData: (
        _: unknown,
        args: { eventId: number }
    ): Promise<IGameweekStats> => loadData(`/event/${args.eventId}/live/`),

    elementSummary: (
        _: unknown,
        args: { elementId: number }
    ): Promise<IElementSummary> => loadData(`/element-summary/${args.elementId}/`),

    managerInformation: (
        _: unknown,
        args: { managerId: number }
    ): Promise<IManagerInformation> => loadData(`/entry/${args.managerId}/`),

    managerHistory: (
        _: unknown,
        args: { managerId: number }
    ): Promise<IManagerHistory> => loadData(`/entry/${args.managerId}/history/`),

    managerGameweekTeam: (
        _: unknown,
        args: { managerId: number, eventId: number }
    ): Promise<IManagerGameweekTeam> => loadData(`/entry/${args.managerId}/event/${args.eventId}/picks/`),

    managerTransfers: (
        _: unknown,
        args: { managerId: number }
    ): Promise<IManagerTransfer[]> => loadData(`/entry/${args.managerId}/transfers/`),

    dreamTeam: (
        _: unknown,
        args: { eventId: number }
    ): Promise<IDreamTeam> => loadData(`/dream-team/${args.eventId}/`)
};
