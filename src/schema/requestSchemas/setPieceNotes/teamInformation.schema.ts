import { gql } from 'apollo-server';

export const teamInformationSchema = gql`
    type TeamInformation {
        notes: [Note]
        id: Int
    }
`;
