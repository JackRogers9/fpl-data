import { getBootstrapStaticData, getEventStatusData, getFixturesData } from './requests';

export const resolvers = {
    Query: {
        General: () => getBootstrapStaticData(),
        Fixtures: () => getFixturesData(),
        EventStatus: () => getEventStatusData()
    }
};
