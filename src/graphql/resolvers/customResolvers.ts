import { getLiveGameweekSummaryData } from '../helpers/getLiveGameweekSummaryData';
import { getPlayerGameweekData } from '../helpers/getPlayerGameweekData';
import { getTeamStats } from '../helpers/getTeamStats';

export const customResolvers = {
    playerGameweekData: (
        _: unknown,
        args: { eventId: number, elementId: number }
    ) => getPlayerGameweekData(args.eventId, args.elementId),

    liveGameweekSummary: (
        _: unknown,
        args: { managerId: number }
    ) => getLiveGameweekSummaryData(args.managerId),

    teamStats: (
        _: unknown,
        args: { managerId: number, eventId: number }
    ) => getTeamStats(args.managerId, args.eventId)
};
