import { IGameweekPick, IPlayerStats } from '../../interfaces/src';
import { endpointResolvers } from '../resolvers/endpointResolvers';
import { getPlayerGameweekData } from './getPlayerGameweekData';
import { getPlayerInformation } from './getPlayerInformation';
import { getClubInformation } from './getClubInformation';

export const getPlayerStats = async (eventId: number, pick: IGameweekPick)
    : Promise<IPlayerStats> => {
    const { elements, elementTypes, teams } = await endpointResolvers.general();

    const {
        id,
        firstName,
        secondName,
        team,
        elementType
    } = getPlayerInformation(elements, pick.element)!;

    const {
        pluralNameShort: positionShortName
    } = elementTypes.find((type) => type.id === elementType)!;

    const {
        opponentTeam, wasHome, totalPoints
    } = (await getPlayerGameweekData(eventId, pick.element))!;

    const { name: teamName, shortName: teamShortName } = getClubInformation(teams, team)!;

    const {
        name: oppositionName,
        shortName: oppositionShortName
    } = getClubInformation(teams, opponentTeam)!;

    return {
        id,
        firstName,
        secondName,
        wasHome,
        teamName,
        teamShortName,
        oppositionName,
        oppositionShortName,
        positionShortName,
        position: pick.position,
        isCaptain: pick.isCaptain,
        isViceCaptain: pick.isViceCaptain,
        totalPoints: totalPoints * pick.multiplier,
    };
};
