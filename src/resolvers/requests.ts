import axios, { AxiosResponse } from 'axios';
import { camelizeKeys } from 'humps';
import DataLoader from 'dataloader';
import { IManagerGameweekTeam } from '../interfaces/managerGameweekTeam/IManagerGameweekTeam';
import { IManagerInformation } from '../interfaces/managerInformation/IManagerInformation';
import { IBootstrapStatic } from '../interfaces/bootstrapStatic/IBootstrapStatic';
import { IManagerHistory } from '../interfaces/managerHistory/IManagerHistory';
import { ISetPieceNotes } from '../interfaces/setPieceNotes/ISetPieceNotes';
import { IGameweekStats } from '../interfaces/liveEvent/IGameweekStats';
import { IEventStatus } from '../interfaces/eventStatus/IEventStatus';
import { IFixture } from '../interfaces/fixtures/IFixture';

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
