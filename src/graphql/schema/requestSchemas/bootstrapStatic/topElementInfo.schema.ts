import { gql } from 'apollo-server';

export const topElementInfoSchema = gql`
    type TopElementInfo {
        id: Int
        points: Int
    }
`;
