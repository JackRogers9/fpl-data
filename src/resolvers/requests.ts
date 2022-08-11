import axios, { AxiosResponse } from 'axios';
import { camelizeKeys } from 'humps';
import DataLoader from 'dataloader';
import { IBootstrapStatic } from '../interfaces/bootstrapStatic/IBootstrapStatic';
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

export const getEventStatusData = (): Promise<IEventStatus[]> => {
    return retrieveData.load(`${baseUrl}/event-status/`);
};
