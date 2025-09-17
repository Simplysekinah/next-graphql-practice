export const TodotypeDefs = `
    type Todo{
        id:ID!
        title:String!
        description:String!
        completed:Boolean!
    }
    type Query{
    Todos:[Todo]
    delete(id:ID!):User!
    }

    type Mutation{
        create(title:String!,
        description:String!):Todo
        delete(id:ID!):Todo
    }
`