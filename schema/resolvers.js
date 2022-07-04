const {signToken, authMiddleware} = require('../utils/auth');
const {User, Product, Category} = require('../models');
const {verify, sign}= require('jsonwebtoken');
const {compareSync} = require('bcrypt');
require('dotenv').config();

const resolvers = {
    Query:{
        decode: async(parent, args, context,)=> {
            // console.log(args.token);
            console.log(context.req.decoded);
        },
        users: async()=>{
            return await User.find({});
        },
        products: async()=> {
            return await Product.find({});
        },
        userById: async(parent, {_id})=>{
            const user = await User.findOne({_id});
            if (!user){
                throw new Error("No user with that ID found");
            }
        },
        productById: async(parent, {_id})=>{
            const product = await Product.findOne({_id});
            if (!product){
                throw new Error("No products with that ID found");
            }
        },
        productByTitle: async(parent, {title})=>{
            const product = await Product.findOne({title});
            if (!product){
                throw new Error("No products with that name found");
            }
        },
        userByEmail: async(parent, {email})=>{
            const user = await User.findOne({email});
            if (!user){
                throw new Error("No user with that email address found");
            }
        },
        category: async()=>{
            return await Category.find({});
        },
        categoryById: async(parent, {_id})=>{
            const category = await Category.findOne({_id});
            if (!category){
                throw new Error("No category with that ID found");
            }
            return {
                _id: category._id,
                name: category.name
            }
        },
        categoryByName: async(parent, {name})=>{
            const category = await Category.findOne({name});
            if (!category){
                throw new Error("No category with that ID found");
            }
            return {
                _id: category._id,
                name: category.name
            }
        }
    },
    Mutation:{
        addUser: async(parent,{firstName, lastName, email, password})=>{
            const user = await User.create({
                firstName,
                lastName,
                email,
                password
            });
            if (!user){
                throw new Error("Error creating user");
            }
            return await sign({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                _id: user._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRE});
            },
        signIn: async(parent, {email, password})=>{
            const user = await User.findOne({email});
            if(!user){
                throw new Error("No user with that email found");
            }
            let verified = compareSync(password, user.password);
            if (!verified){
                throw new Error("Incorrect Password")
            }
            return await sign({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                _id: user._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRE});
        },
        addProduct: async(parent, args, context)=>{
            const category = await Category.findOne({name: args.categoryName});
            if (!category){
                throw new Error("Category not found");
                return null;
            }
                const product = await Product.create({
                    title: args.title,
                    description: args.description,
                    price: args.price,
                    category:{
                        _id: category._id,
                        name: category.name
                    }
                });
                return product;
        },
        addCategory: async(parent, args, context)=>{
            const newCategory = await Category.create({
                name: args.name
            });
            return newCategory;
        }
    }
}
module.exports = resolvers;