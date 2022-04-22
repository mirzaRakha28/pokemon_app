"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_USERS_BY_ID = exports.LOGIN = exports.GET_ALL_USERS = void 0;
const graphql_1 = require("graphql");
const User_1 = require("../TypeDefs/User");
const Users_1 = require("../../Entities/Users");
exports.GET_ALL_USERS = {
    type: new graphql_1.GraphQLList(User_1.UserType),
    resolve() {
        return Users_1.Users.find();
    },
};
exports.LOGIN = {
    type: new graphql_1.GraphQLList(User_1.UserType),
    args: {
        username: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        const { username, password } = args;
        return Users_1.Users.find({
            where: {
                username: username,
                password: password
            }
        });
        ;
    },
};
exports.GET_USERS_BY_ID = {
    type: new graphql_1.GraphQLList(User_1.UserType),
    args: {
        id: { type: graphql_1.GraphQLInt },
    },
    resolve(parent, args) {
        const { id } = args;
        return Users_1.Users.find({
            where: {
                id: id
            }
        });
        ;
    },
};
