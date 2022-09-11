import { getGameweekSummaryData } from '../helpers/getGameweekSummaryData';
import { getPlayerGameweekData } from '../helpers/getPlayerGameweekData';

export const customResolvers = {
    playerGameweekData: (
        _: unknown,
        args: { eventId: number, playerId: number }
    ) => getPlayerGameweekData(args.eventId, args.playerId),

    gameweekSummary: (
        _: unknown,
        args: { managerId: number }
    ) => getGameweekSummaryData(args.managerId)
};
