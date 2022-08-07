import { IGameSettings } from './IGameSettings';
import { IElementStat } from './IElementStat';
import { IElementType } from './IElementType';
import { IElement } from './IElement';
import { IEvent } from './IEvent';
import { IPhase } from './IPhase';
import { ITeam } from './ITeam';

export interface IBootstrapStatic {
    events: IEvent[];
    game_settings: IGameSettings;
    phases: IPhase[];
    teams: ITeam[];
    total_players: number;
    elements: IElement[];
    element_stats: IElementStat[];
    element_types: IElementType[];
}