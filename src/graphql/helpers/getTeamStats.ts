import { IGameweekPick, IPlayerStats, ITeamStats } from '../../interfaces/src';
import { endpointResolvers } from '../resolvers/endpointResolvers';
import { getPlayerStats } from './getPlayerStats';

export const getTeamStats = async (managerId: number, eventId: number): Promise<ITeamStats> => {
    const {
        picks,
        ...teamInformation
    } = await endpointResolvers.managerGameweekTeam(null, { managerId, eventId });

    const playerStats = await Promise.all<IPlayerStats>(
        picks.map(async (pick: IGameweekPick) => getPlayerStats(eventId, pick))
    );

    return { ...teamInformation, playerStats };
};
