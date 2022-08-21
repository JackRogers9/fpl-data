import { gql } from 'apollo-server';

export const noteSchema = gql`
    type Note {
        externalLink: Boolean
        infoMessage: String
        sourceLink: String
    }
`;
