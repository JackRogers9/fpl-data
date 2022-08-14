import { IEventData } from '../managerHistory/IEventData';
import { IAutomaticSub } from './IAutomaticSub';
import { IGameweekPick } from './IGameweekPick';

export interface IManagerGameweekTeam {
    activeChip: string;
    automaticSubs: IAutomaticSub[];
    entryHistory: IEventData;
    picks: IGameweekPick[];
}
