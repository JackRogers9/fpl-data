import { gql } from 'apollo-server';

export const DataSchema = gql`
    type Data {
        value: Int
        element: Int
    }
`;
