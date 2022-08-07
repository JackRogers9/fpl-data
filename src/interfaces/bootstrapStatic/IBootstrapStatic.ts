import { IGameSettings } from './IGameSettings';
import { IElementStat } from './IElementStat';
import { IElementType } from './IElementType';
import { IElement } from './IElement';
import { IEvent } from './IEvent';
import { IPhase } from './IPhase';
import { ITeam } from './ITeam';

export interface IBootstrapStatic {
    events: IEvent[];
    gameSettings: IGameSettings;
    phases: IPhase[];
    teams: ITeam[];
    totalPlayers: number;
    elements: IElement[];
    elementStats: IElementStat[];
    elementTypes: IElementType[];
}
