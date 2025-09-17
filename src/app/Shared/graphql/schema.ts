import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import { Userresolvers } from "./userResolver";
import { Todoresolvers } from "./typeResolver";
import { UsertypeDefs } from "./userTypedefs";
import { TodotypeDefs } from "./todoTypedefs";

export const resolvers = mergeResolvers(
    [
        Userresolvers,Todoresolvers
    ]
)

export const typeDefs = mergeTypeDefs(
    [UsertypeDefs,TodotypeDefs]
)