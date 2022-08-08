import { gql } from 'apollo-server';

export const ElementTypeSchema = gql`
    type ElementType {
        id: Int
        pluralName: String
        pluralNameShort: String
        singularName: String
        singularNameShort: String
        squadSelect: Int
        squadMinPlay: Int
        squadMaxPlay: Int
        uiShirtSpecific: Boolean
        subPositionsLocked: [Int]
        elementCount: Int
    }
`;
