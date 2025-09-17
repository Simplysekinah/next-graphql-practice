import {startServerAndCreateNextHandler} from '@as-integrations/next'
import { ApolloServer } from "@apollo/server";
import {typeDefs,resolvers} from '../../Shared/graphql/schema';
import connect from '@/app/Shared/database/connection/index' 

const server = new ApolloServer({
    typeDefs,resolvers
})

const handler = startServerAndCreateNextHandler(server)

export function GET(request:Request){
    return handler(request)
}
export function POST(request:Request){
    return handler(request)
}

connect()