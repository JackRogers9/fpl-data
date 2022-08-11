import { gql } from 'apollo-server';

export const elementStatSchema = gql`
    type ElementStat {
        label: String
        name: String
    }
`;
