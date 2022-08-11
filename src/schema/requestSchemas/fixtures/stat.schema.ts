import { gql } from 'apollo-server';

export const StatSchema = gql`
    type Stat {
        identifier: String
        a: [Data]
        h: [Data]
    }
`;
