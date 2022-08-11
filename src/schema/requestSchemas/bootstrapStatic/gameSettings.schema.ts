import { gql } from 'apollo-server';

export const gameSettingsSchema = gql`
    type GameSettings {
        leagueJoinPrivateMax: Int
        leagueJoinPublicMax: Int
        leagueMaxSizePublicClassic: Int
        leagueMaxSizePublicH2h: Int
        leagueMaxSizePrivateH2h: Int
        leagueMaxKoRoundsPrivateH2h: Int
        leaguePrefixPublic: String
        leaguePointsH2hWin: Int
        leaguePointsH2hLose: Int
        leaguePointsH2hDraw: Int
        leagueKoFirstInsteadOfRandom: Boolean
        cupStartEventId: Int
        cupStopEventId: Int
        cupQualifyingMethod: String
        cupType: String
        squadSquadplay: Int
        squadSquadsize: Int
        squadTeamLimit: Int
        squadTotalSpend: Int
        uiCurrencyMultiplier: Int
        uiUseSpecialShirts: Boolean
        uiSpecialShirtExclusions: [String]
        statsFormDays: Int
        sysViceCaptainEnabled: Boolean
        transfersCap: Int
        transfersSellOnFee: Int
        leagueH2hTiebreakStats: [String]
        timezone: String
    }
`;
