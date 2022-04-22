import { GraphQLList ,GraphQLInt,GraphQLString} from "graphql";
import { InventoryType } from "../TypeDefs/Inventory";
import { Inventorys } from "../../Entities/Inventorys";

export const GET_POKEMON_BY_POKE_AND_NICK = {
  type: new GraphQLList(InventoryType),
  args: {
    pokemon: { type: GraphQLString },
    nickname:{ type: GraphQLString },
  },
  resolve(parent: any, args: any) {
    const { pokemon,nickname } = args;
    return Inventorys.find({
      where:{
        pokemon: pokemon,
        // pokemon: "pika1chu", nickname: "13123" 
      }
    });
  },
};
export const GET_IVENTORYS_BY_ID = {
  type: new GraphQLList(InventoryType),
  args: {
    id: { type: GraphQLInt },
    
  },
  resolve(parent: any, args: any) {
    const { id } = args;
    return Inventorys.find({
      where:{
        id: id
      }
    });
  },
};
 

export const GET_IVENTORYS_BY_ID_USERS = {
  type: new GraphQLList(InventoryType),
  args: {
    id: { type: GraphQLInt },
    
  },
  resolve(parent: any, args: any) {
    const { id } = args;
    return Inventorys.find({
      where:{
        id_user: id
      }
    });
  },
};
 