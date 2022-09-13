import { endpointResolvers } from '../resolvers/endpointResolvers';
import { IEvent, IGameweekSummary } from '../../interfaces/src';

export const getGameweekSummaryData = async (managerId: number): Promise<IGameweekSummary> => {
    const {
        summaryOverallRank,
        summaryEventPoints,
        summaryEventRank
    } = await endpointResolvers.managerInformation(null, { managerId });

    const { events } = await endpointResolvers.general();

    const {
        id,
        name,
        averageEntryScore
    } = events.find((gameweekData: IEvent) => gameweekData.isCurrent)!;

    return {
        id,
        name,
        averageEntryScore,
        summaryOverallRank,
        summaryEventPoints,
        summaryEventRank
    };
};
