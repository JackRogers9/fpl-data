import { gql } from 'apollo-server';

export const EventSchema = gql`
    type Event {
        id: Int
        name: String
        deadlineTime: String
        averageEntryScore: Int
        finished: Boolean
        dataChecked: Boolean
        highestScoringEntry: Int
        deadlineTimeEpoch: Int
        deadlineTimeGameOffset: Int
        highestScore: Int
        isPrevious: Boolean
        isCurrent: Boolean
        isNext: Boolean
        cupLeaguesCreated: Boolean
        h2hKoMatchesCreated: Boolean
        chipPlays: [ChipPlay]
        mostSelected: Int
        mostTransferredIn: Int
        topElement: Int
        topElementInfo: TopElementInfo
        transfersMade: Int
        mostCaptained: Int
        mostViceCaptained: Int
    }
`;

export const ChipPlaySchema = gql`
    type ChipPlay {
        chipName: String
        numPlayed: Int
    }
`;

export const TopElementInfoSchema = gql`
    type TopElementInfo {
        id: Int
        points: Int
    }
`;
