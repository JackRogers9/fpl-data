import { gql } from 'apollo-server';

export const dataSchema = gql`
    type Data {
        value: Int
        element: Int
    }
`;
