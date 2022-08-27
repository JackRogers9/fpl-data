import { ICupInformation } from './ICupInformation';
import { IClassicLeague } from './IClassicLeague';

export interface IManagerLeagues {
    classic: IClassicLeague[];
    h2h: string[];
    cup: ICupInformation;
    cupMatches: string[];
}
