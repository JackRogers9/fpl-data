import { gql } from 'apollo-server';

export const statsExplanationSchema = gql`
    type StatsExplanation {
        identifier: String
        points: Int
        value: Int
    }
`;
