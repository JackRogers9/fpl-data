export interface IDreamTeam {
    topPlayer: {
        id: number;
        points: number;
    };
    team: {
        element: number;
        points: number;
        position: number;
    }[];
}
