"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryType = void 0;
const graphql_1 = require("graphql");
exports.InventoryType = new graphql_1.GraphQLObjectType({
    name: "Inventory",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        id_user: { type: graphql_1.GraphQLInt },
        pokemon: { type: graphql_1.GraphQLString },
        nickname: { type: graphql_1.GraphQLString }
    }),
});
