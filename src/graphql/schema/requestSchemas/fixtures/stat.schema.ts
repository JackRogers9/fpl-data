import { gql } from 'apollo-server';

export const statSchema = gql`
    type Stat {
        identifier: String
        a: [Data]
        h: [Data]
    }
`;
