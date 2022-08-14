import { gql } from 'apollo-server';

export const automaticSubSchema = gql`
    type AutomaticSub {
        entry: Int
        elementIn: Int
        elementOut: Int
        event: Int
    }
`;
