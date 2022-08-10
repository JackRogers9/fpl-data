import axios, { AxiosResponse } from 'axios';
import { camelizeKeys } from 'humps';
import DataLoader from 'dataloader';
import { IBootstrapStatic } from '../interfaces/bootstrapStatic/IBootstrapStatic';

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
