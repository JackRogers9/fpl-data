export interface ICupInformation {
    matches: string[];
    status: {
        qualification_event: string;
        qualification_numbers: number;
        qualification_rank: number;
        qualification_state: string;
    };
    cup_league: string;
}
