export interface IEvent {
    id: number;
    name: string
    deadlineTime: string;
    averageEntryScore: number;
    finished: boolean;
    dataChecked: boolean;
    highestScoringEntry: number;
    deadlineTimeEpoch: number;
    deadlineTimeGameOffset: number;
    highestScore: number;
    isPrevious: boolean;
    isCurrent: boolean;
    isNext: boolean;
    cupLeaguesCreated: boolean;
    h2hKoMatchesCreated: boolean;
    chipPlays: {
        chipName: string;
        numPlayed: number
    }[];
    mostSelected: number;
    mostTransferredIn: number;
    topElement: number;
    topElementInfo: {
        id: number;
        points: number
    };
    transfersMade: number;
    mostCaptained: number;
    mostViceCaptained: number
}
