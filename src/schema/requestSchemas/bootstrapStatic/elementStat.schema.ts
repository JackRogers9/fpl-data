import { gql } from 'apollo-server';

export const ElementStatSchema = gql`
    type ElementStat {
        label: String
        name: String
    }
`;
