import { endpointResolvers } from '../resolvers/endpointResolvers';
import { IElementHistory } from '../../interfaces/src';

export const getPlayerGameweekData = async (eventId: number, elementId: number):
    Promise<IElementHistory | undefined> => {
    const gameweekStats = await endpointResolvers.elementSummary(null, { elementId });

    return gameweekStats.history.find((gameweek: IElementHistory) => gameweek.round === eventId);
};
