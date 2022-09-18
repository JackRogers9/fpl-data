import { endpointResolvers } from '../resolvers/endpointResolvers';
import { IElementHistory } from '../../interfaces/src';

export const getPlayerGameweekData = async (eventId: number, elementId: number):
    Promise<IElementHistory | undefined> => {
    const elementSummary = await endpointResolvers.elementSummary(null, { elementId });
    return elementSummary.history.find((gameweek: IElementHistory) => gameweek.round === eventId);
};
