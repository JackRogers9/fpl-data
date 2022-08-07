import { camelizeKeys } from 'humps';
import DataLoader from 'dataloader';
import axios from 'axios';

import { IBootstrapStatic } from '../interfaces/bootstrapStatic/IBootstrapStatic';

const baseUrl = 'https://fantasy.premierleague.com/api';

export const getBootstrapStaticData = (): Promise<IBootstrapStatic> => {
    return retrieveData.load(`${baseUrl}/bootstrap-static/`);
}

const retrieveData = new DataLoader((keys: readonly string[]) => {
    return axios.all(
        keys.map((key: string) => {
            return axios.get(key).then(response => camelizeKeys(response.data) as any)
        }),
    );
});
