import {gql} from "@apollo/client";

const mutations = {
    addProduct: gql`
        mutation Mutation($title: String, $description: String, $price: Float, $categoryName: String) {
            addProduct(title: $title, description: $description, price: $price, categoryName: $categoryName) {
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
    addUser: gql`
        mutation Mutation($firstName: String, $lastName: String, $email: String, $password: String) {
            addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password)
        }
    `,
    signIn: gql`
        mutation Mutation($email: String, $password: String) {
        signIn(email: $email, password: $password)
        }
    `,
    addCategory: gql`
        mutation Mutation($name: String) {
            addCategory(name: $name) {
                _id
                name
            }
        }
    `
}
export default mutations;