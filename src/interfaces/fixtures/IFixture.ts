import { IStat } from './IStat';

export interface IFixture {
    code: number;
    event: number;
    finished: boolean;
    finishedProvisional: boolean;
    id: number;
    kickoffTime: string;
    minutes: number;
    provisionalStartTime: boolean;
    started: boolean;
    teamA: number;
    teamAScore: number;
    teamH: number;
    teamHScore: number;
    stats: IStat[];
    teamHDifficulty: number;
    teamADifficulty: number;
    pulseId: number;
}
