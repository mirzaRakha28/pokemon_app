"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const User_1 = require("./Queries/User");
const Inventorys_1 = require("./Queries/Inventorys");
const Inventorys_2 = require("./Mutations/Inventorys");
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQuery",
    fields: {
        findUsersById: User_1.GET_USERS_BY_ID,
        login: User_1.LOGIN,
        findIventorysByIdUsers: Inventorys_1.GET_IVENTORYS_BY_ID_USERS,
        findIventorysById: Inventorys_1.GET_IVENTORYS_BY_ID,
        getAllUsers: User_1.GET_ALL_USERS,
        getInvBYPokeAndNick: Inventorys_1.GET_POKEMON_BY_POKE_AND_NICK
    },
});
const Mutation = new graphql_1.GraphQLObjectType({
    name: "Mutation",
    fields: {
        addPokemon: Inventorys_2.ADD_POKEMON,
        deleteInventory: Inventorys_2.DELETE_INVENTORY
    },
});
exports.schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});
