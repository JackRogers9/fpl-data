import { gql } from 'apollo-server';

export const eventSchema = gql`
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
