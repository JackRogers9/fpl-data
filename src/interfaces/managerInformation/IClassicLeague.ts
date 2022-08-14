export interface IClassicLeague {
    id: number;
    name: string;
    shortName: string;
    created: string;
    closed: boolean;
    rank: number;
    maxEntries: number;
    leagueType: string;
    scoring: string;
    adminEntry: string;
    startEvent: number;
    entryCanLeave: boolean;
    entryCanAdmin: boolean;
    entryCanInvite: boolean;
    hasCup: boolean;
    cupLeague: string;
    cupQualified: boolean;
    entryRank: number;
    entryLastRank: number;
}
