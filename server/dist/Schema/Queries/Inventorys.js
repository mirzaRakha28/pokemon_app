"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_IVENTORYS_BY_ID_USERS = exports.GET_IVENTORYS_BY_ID = exports.GET_POKEMON_BY_POKE_AND_NICK = void 0;
const graphql_1 = require("graphql");
const Inventory_1 = require("../TypeDefs/Inventory");
const Inventorys_1 = require("../../Entities/Inventorys");
exports.GET_POKEMON_BY_POKE_AND_NICK = {
    type: new graphql_1.GraphQLList(Inventory_1.InventoryType),
    args: {
        pokemon: { type: graphql_1.GraphQLString },
        nickname: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        const { pokemon, nickname } = args;
        return Inventorys_1.Inventorys.find({
            where: {
                pokemon: pokemon,
                // pokemon: "pika1chu", nickname: "13123" 
            }
        });
    },
};
exports.GET_IVENTORYS_BY_ID = {
    type: new graphql_1.GraphQLList(Inventory_1.InventoryType),
    args: {
        id: { type: graphql_1.GraphQLInt },
    },
    resolve(parent, args) {
        const { id } = args;
        return Inventorys_1.Inventorys.find({
            where: {
                id: id
            }
        });
    },
};
exports.GET_IVENTORYS_BY_ID_USERS = {
    type: new graphql_1.GraphQLList(Inventory_1.InventoryType),
    args: {
        id: { type: graphql_1.GraphQLInt },
    },
    resolve(parent, args) {
        const { id } = args;
        return Inventorys_1.Inventorys.find({
            where: {
                id_user: id
            }
        });
    },
};
