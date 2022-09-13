import { getGameweekSummaryData } from '../helpers/getGameweekSummaryData';
import { getPlayerGameweekData } from '../helpers/getPlayerGameweekData';

export const customResolvers = {
    playerGameweekData: (
        _: unknown,
        args: { eventId: number, elementId: number }
    ) => getPlayerGameweekData(args.eventId, args.elementId),

    gameweekSummary: (
        _: unknown,
        args: { managerId: number }
    ) => getGameweekSummaryData(args.managerId)
};
