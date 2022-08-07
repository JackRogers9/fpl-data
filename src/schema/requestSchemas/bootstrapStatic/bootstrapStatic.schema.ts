import { gql } from 'apollo-server';

const GeneralSchema = gql`
    type General {
        totalPlayers: Int
    }
`;

export const BootstrapStaticSchema = [
    GeneralSchema,
];
