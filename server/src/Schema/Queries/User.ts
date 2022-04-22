import { GraphQLList ,GraphQLInt,GraphQLString} from "graphql";
import { UserType } from "../TypeDefs/User";
import { Users } from "../../Entities/Users";
export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  resolve() {
    return Users.find();
  },
};
export const LOGIN = {
  type: new GraphQLList(UserType),
  args: {
    username: { type: GraphQLString },
    password :{ type: GraphQLString },
  },
  resolve(parent: any, args: any) {
    const { username,password } = args;
    return Users.find({
      where:{
        username: username,
        password:password
      }
    });;
  },
};

export const GET_USERS_BY_ID = {
  type: new GraphQLList(UserType),
  args: {
    id: { type: GraphQLInt },
    
  },
  resolve(parent: any, args: any) {
    const { id } = args;
    return Users.find({
      where:{
        id: id
      }
    });;
  },
};
 