import { IPreviousSeason } from './IPreviousSeason';
import { IEventData } from './IEventData';

export interface IManagerHistory {
    current: IEventData[];
    past: IPreviousSeason[];
    chips: string[];
}
