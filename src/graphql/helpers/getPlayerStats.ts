import { IGameweekPick, IPlayerStats } from '../../interfaces/src';
import { endpointResolvers } from '../resolvers/endpointResolvers';
import { getPlayerGameweekData } from './getPlayerGameweekData';
import { getPlayerInformation } from './getPlayerInformation';
import { getClubInformation } from './getClubInformation';

export const getPlayerStats = async (eventId: number, pick: IGameweekPick)
    : Promise<IPlayerStats> => {
    const { elements, elementTypes, teams } = await endpointResolvers.general();

    const playerInformation = getPlayerInformation(elements, pick.element)!;
    const clubInformation = getClubInformation(teams, playerInformation.team)!;
    const position = elementTypes.find((type) => type.id === playerInformation.elementType)!;

    const data = {
        id: playerInformation.id,
        firstName: playerInformation.firstName,
        secondName: playerInformation.secondName,
        teamName: clubInformation.name,
        teamShortName: clubInformation.shortName,
        positionShortName: position.pluralNameShort,
        position: pick.position,
        isCaptain: pick.isCaptain,
        isViceCaptain: pick.isViceCaptain,
    };

    const gameweekData = await getPlayerGameweekData(eventId, pick.element);

    if (gameweekData === undefined) {
        return {
            ...data,
            wasHome: false,
            totalPoints: 0,
            oppositionName: '',
            oppositionShortName: '',
        };
    }

    const oppositionInformation = getClubInformation(teams, gameweekData.opponentTeam)!;

    return {
        ...data,
        wasHome: gameweekData.wasHome,
        oppositionName: oppositionInformation.name,
        oppositionShortName: oppositionInformation.shortName,
        totalPoints: gameweekData.totalPoints * pick.multiplier,
    };
};
