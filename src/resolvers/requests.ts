import axios, { AxiosResponse } from 'axios';
import { camelizeKeys } from 'humps';
import DataLoader from 'dataloader';

import {
    IManagerGameweekTeam,
    IManagerInformation,
    IBootstrapStatic,
    IManagerHistory,
    ISetPieceNotes,
    IGameweekStats,
    IEventStatus,
    IDreamTeam,
    IFixture,
} from '../interfaces/src';

const baseUrl = 'https://fantasy.premierleague.com/api';

const retrieveData = new DataLoader((keys: readonly string[]) => {
    return axios.all(
        keys.map((key: string) => {
            return axios.get(key).then(
                (response: AxiosResponse<string>) => camelizeKeys(response.data) as any,
            );
        })
    );
});

export const getBootstrapStaticData = (): Promise<IBootstrapStatic> => {
    return retrieveData.load(`${baseUrl}/bootstrap-static/`);
};

export const getFixturesData = (): Promise<IFixture[]> => {
    return retrieveData.load(`${baseUrl}/fixtures/`);
};

export const getEventStatusData = (): Promise<IEventStatus> => {
    return retrieveData.load(`${baseUrl}/event-status/`);
};

export const getSetPieceData = (): Promise<ISetPieceNotes> => {
    return retrieveData.load(`${baseUrl}/team/set-piece-notes/`);
};

export const getGameweekData = (eventId: number): Promise<IGameweekStats> => {
    return retrieveData.load(`${baseUrl}/event/${eventId}/live/`);
};

export const getManagerData = (managerId: number): Promise<IManagerInformation> => {
    return retrieveData.load(`${baseUrl}/entry/${managerId}/`);
};

export const getManagerHistoryData = (managerId: number): Promise<IManagerHistory> => {
    return retrieveData.load(`${baseUrl}/entry/${managerId}/history/`);
};

export const getManagerGameweekTeam = (managerId: number, eventId: number):
    Promise<IManagerGameweekTeam> => {
    return retrieveData.load(`${baseUrl}/entry/${managerId}/event/${eventId}/picks/`);
};

export const getDreamTeamData = (eventId: number): Promise<IDreamTeam> => {
    return retrieveData.load(`${baseUrl}/dream-team/${eventId}/`);
};
