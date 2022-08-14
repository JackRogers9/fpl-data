import { getPlayerGameweekData } from '../helpers/requestHelpers';
import {
    getBootstrapStaticData,
    getEventStatusData,
    getFixturesData,
    getGameweekData,
    getManagerData
} from './requests';

export const resolvers = {
    Query: {
        general: () => getBootstrapStaticData(),
        fixtures: () => getFixturesData(),
        eventStatus: () => getEventStatusData(),

        gameweekData: (
            _: unknown,
            args: {eventId: number}
        ) => getGameweekData(args.eventId),

        playerGameweekData: (
            _: unknown,
            args: {eventId: number, playerId: number}
        ) => getPlayerGameweekData(args.eventId, args.playerId),

        managerInformation: (
            _: unknown,
            args: {managerId: number}
        ) => getManagerData(args.managerId)
    }
};
