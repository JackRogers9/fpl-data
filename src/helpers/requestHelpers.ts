import { IPlayerGameweekData } from '../interfaces/src';
import { getGameweekData } from '../resolvers/requests';

export const getPlayerGameweekData = async (eventId: number, playerId: number):
    Promise<IPlayerGameweekData | undefined> => {
    const gameweekStats = await getGameweekData(eventId);

    return gameweekStats.elements.find((element: IPlayerGameweekData) => element.id === playerId);
};
