import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_USERS_BY_ID,GET_ALL_USERS ,LOGIN} from "./Queries/User";
import { GET_IVENTORYS_BY_ID_USERS,GET_IVENTORYS_BY_ID,GET_POKEMON_BY_POKE_AND_NICK } from "./Queries/Inventorys";
import {ADD_POKEMON,DELETE_INVENTORY} from "./Mutations/Inventorys";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    findUsersById:GET_USERS_BY_ID,
    login:LOGIN,
    findIventorysByIdUsers:GET_IVENTORYS_BY_ID_USERS,
    findIventorysById:GET_IVENTORYS_BY_ID,
    getAllUsers:GET_ALL_USERS,
    getInvBYPokeAndNick : GET_POKEMON_BY_POKE_AND_NICK
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addPokemon: ADD_POKEMON,
    deleteInventory:DELETE_INVENTORY
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});