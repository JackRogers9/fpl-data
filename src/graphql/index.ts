import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server';
import { endpointResolvers } from './resolvers/endpointResolvers';
import { customResolvers } from './resolvers/customResolvers';
import { typeDefs } from './schema/typeDefs';

const resolvers = {
    Query: {
        ...endpointResolvers,
        ...customResolvers
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground(),
    ]
});

server.listen(9000).then(({ url }) => {
    console.log(`GraphQL server is running at ${url}`);
});
