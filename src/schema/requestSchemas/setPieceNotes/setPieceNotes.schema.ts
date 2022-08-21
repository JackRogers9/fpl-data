import { gql } from 'apollo-server';
import { teamInformationSchema } from './teamInformation.schema';
import { noteSchema } from './note.schema';

const setPieceNotesSchema = gql`
    type SetPieceNotes {
        lastUpdated: String
        teams: [TeamInformation]
    }
`;

export const setPieceNotesSchemas = [
    setPieceNotesSchema,
    teamInformationSchema,
    noteSchema
];
