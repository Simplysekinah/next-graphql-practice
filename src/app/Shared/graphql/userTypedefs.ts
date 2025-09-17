export const UsertypeDefs = `
    type User{
        id:ID!
        name:String!
        email:String!
        password:String!
    }
        type authuser{
        user:User!
        token:String!
        }
    type Query{
    users:[User]
    oneuser(id:ID!):User!
    }

    type Mutation{
        createuser(name:String!,email:String!,password:String!):User
        loginuser(email:String!,password:String!):authuser
    }
`