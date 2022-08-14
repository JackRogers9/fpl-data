import { gql } from 'apollo-server';

export const eventDataSchema = gql`
    type EventData {
        event: Int
        points: Int
        totalPoints: Int
        rank: Int
        rankSort: Int
        overallRank: Int
        bank: Int
        value: Int
        eventTransfers: Int
        eventTransfersCost: Int
        pointsOnBench: Int
    }
`;
