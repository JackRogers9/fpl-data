import { getGameweekSummaryData } from '../helpers/getGameweekSummaryData';
import { getPlayerGameweekData } from '../helpers/getPlayerGameweekData';
import { getTeamStats } from '../helpers/getTeamStats';

export const customResolvers = {
    playerGameweekData: (
        _: unknown,
        args: { eventId: number, elementId: number }
    ) => getPlayerGameweekData(args.eventId, args.elementId),

    gameweekSummary: (
        _: unknown,
        args: { managerId: number }
    ) => getGameweekSummaryData(args.managerId),

    teamStats: (
        _: unknown,
        args: { managerId: number, eventId: number }
    ) => getTeamStats(args.managerId, args.eventId)
};
