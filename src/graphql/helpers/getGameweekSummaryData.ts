import { getGeneralData, getManagerData } from '../resolvers/requests';
import { IEvent, IGameweekSummary } from '../../interfaces/src';

export const getGameweekSummaryData = async (managerId: number): Promise<IGameweekSummary> => {
    const {
        summaryOverallRank,
        summaryEventPoints,
        summaryEventRank
    } = await getManagerData(managerId);

    const { events } = await getGeneralData();

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
