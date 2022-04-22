import { GraphQLObjectType, GraphQLID,GraphQLInt, GraphQLString } from "graphql";

export const InventoryType = new GraphQLObjectType({
  name: "Inventory",
  fields: () => ({
    id: { type: GraphQLID },
    id_user: { type: GraphQLInt },
    pokemon: { type: GraphQLString },
    nickname:{type: GraphQLString}
  }),
});
