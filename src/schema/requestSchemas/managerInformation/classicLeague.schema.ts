import { gql } from 'apollo-server';

export const classicLeagueSchema = gql`
    type ClassicLeague {
        id: Int
        name: String
        shortName: String
        created: String
        closed: Boolean
        rank: Int
        maxEntries: Int
        leagueType: String
        scoring: String
        adminEntry: String
        startEvent: Int
        entryCanLeave: Boolean
        entryCanAdmin: Boolean
        entryCanInvite: Boolean
        hasCup: Boolean
        cupLeague: String
        cupQualified: Boolean
        entryRank: Int
        entryLastRank: Int
    }
`;
