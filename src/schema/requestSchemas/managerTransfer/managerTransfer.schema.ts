import { gql } from 'apollo-server';

export const managerTransferSchema = gql`
    type ManagerTransfer {
        elementIn: Int
        elementInCost: Int
        elementOut: Int
        elementOutCost:Int
        entry: Int
        event: Int
        time: String
    }
`;
