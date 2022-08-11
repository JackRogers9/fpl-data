import { getBootstrapStaticData, getFixturesData } from './requests';

export const resolvers = {
    Query: {
        General: () => getBootstrapStaticData(),
        Fixtures: () => getFixturesData()
    }
};
