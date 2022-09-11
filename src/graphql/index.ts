import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server';
import { resolvers } from './resolvers/resolvers';
import { typeDefs } from './schema/typeDefs';

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
    console.log(`Server is running at ${url}`);
});
