const {gql} = require('apollo-server-express');
module.exports = gql`
    type Category{
        _id:ID
        name: String
    }
    type Product{
        _id:ID!
        title: String!
        description:String!
        price:Float!
        category:Category
    }
    type User{
        _id: ID!
        firstName: String!
        lastName:String!
        email:String!
    }
    type Query{
        decode(token: String): User
        users: [User]
        userById(_id:ID):User,
        userByEmail(email: String):User
        products:[Product]
        productById(_id:ID):Product
        productByTitle(title:String):Product
        category:[Category]
        categoryById(_id:ID):Category
        categoryByName(name:String):Category
    }
    type Mutation{
        addProduct(title:String,description:String,price:Float, categoryName:String):Product
        addUser(firstName: String, lastName: String, email: String, password: String): ID
        signIn(email:String, password:String):ID
        addCategory(name:String):Category
    }`