import { IClassicLeague } from './IClassicLeague';
import { ICupData } from './ICupData';

export interface IManagerLeagues {
    classic: IClassicLeague[];
    h2h: string[];
    cup: ICupData;
    cupMatches: string[];
}
