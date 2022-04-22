import { GraphQLID, GraphQLString,GraphQLInt } from "graphql";
import {  InventoryType } from "../TypeDefs/Inventory";
import { Inventorys } from "../../Entities/Inventorys";
import { MessageType } from "../TypeDefs/Messages";

export const ADD_POKEMON = {
  type:  InventoryType,
  args: {
    id_user: { type: GraphQLInt },
    pokemon: { type: GraphQLString },
    nickname:{ type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { id_user, pokemon ,nickname} = args;
    await Inventorys.insert({ id_user, pokemon,nickname });
    return args;
  },
};
export const DELETE_INVENTORY = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const id = args.id;
    await Inventorys.delete(id);

    return { successful: true, message: "DELETE WORKED" };
  },
};

