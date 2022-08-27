import { IPlayerGameweekStats } from './IPlayerGameweekStats';
import { IPlayerGameweekExplain } from './IPlayerGameweekExplain';

export interface IPlayerGameweekData {
    id: number;
    stats: IPlayerGameweekStats;
    explain: IPlayerGameweekExplain[];
}
