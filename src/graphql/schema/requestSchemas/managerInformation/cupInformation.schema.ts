import { gql } from 'apollo-server';

export const cupInformationSchema = gql`
    type CupInformation {
        matches: [String]
        status: CupStatus
        cup_league: String
    }
`;
