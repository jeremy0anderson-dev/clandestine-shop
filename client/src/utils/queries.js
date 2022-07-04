import {gql} from "@apollo/client";
import {client} from "../index";

const  query={
    users: client.query({
        query:gql`query{users{_id firstName lastName email}}`,
        userById: gql`query Query($id: ID) {
            userById(_id: $id) {
                _id
                firstName
                lastName
                email
            }
        }`
    }),
    userByEmail: client.query({
        query: gql`query Query($email: String) {
        userByEmail(email: $email) {
            _id
            firstName
            lastName
            email
        }
    }`}),
    products: client.query({
            query: gql`
        query Query {
            products {
                _id
                title
                description
                price
                category {
                    _id
                }
            }
        }
    `}),
    productById: gql`
        query Query($id: ID) {
            productById(_id: $id) {
                _id
                title
                description
                price
                category {
                    _id
                }
            }
        }
    `,
    productByTitle: gql`
        query Query($title: String) {
            productByTitle(title: $title) {
                _id
                title
                description
                price
                category {
                    _id
                }
            }
        }
    `,
    category: gql`
        query Query {
            category {
                _id
                name
            }
        }
    `,
    categoryById: gql`
        query Query($id: ID) {
            categoryById(_id: $id) {
                _id
                name
            }
        }
    `,
    categoryByName: gql`
        query Query($name: String) {
            categoryByName(name: $name) {
                _id
                name
            }
        }
    `
}
export {query};