import { gql } from 'apollo-server';

export const managerLeaguesSchema = gql`
    type ManagerLeagues {
        classic: [ClassicLeague]
        h2h: [String]
        cup: CupInformation
        cupMatches: [String]
    }
`;
