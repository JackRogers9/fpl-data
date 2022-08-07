import { getBootstrapStaticData } from './requests';

export const resolvers = {
    Query: {
        General: () => getBootstrapStaticData(),
    },
};
