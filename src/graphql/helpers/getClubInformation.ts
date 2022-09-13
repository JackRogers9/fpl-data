import { ITeam } from '../../interfaces/src';

export const getClubInformation = (teams: ITeam[], team: number): ITeam | undefined => {
    return teams.find((teamData: ITeam) => teamData.id === team);
};
