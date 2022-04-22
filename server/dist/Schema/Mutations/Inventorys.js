"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_INVENTORY = exports.ADD_POKEMON = void 0;
const graphql_1 = require("graphql");
const Inventory_1 = require("../TypeDefs/Inventory");
const Inventorys_1 = require("../../Entities/Inventorys");
const Messages_1 = require("../TypeDefs/Messages");
exports.ADD_POKEMON = {
    type: Inventory_1.InventoryType,
    args: {
        id_user: { type: graphql_1.GraphQLInt },
        pokemon: { type: graphql_1.GraphQLString },
        nickname: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_user, pokemon, nickname } = args;
            yield Inventorys_1.Inventorys.insert({ id_user, pokemon, nickname });
            return args;
        });
    },
};
exports.DELETE_INVENTORY = {
    type: Messages_1.MessageType,
    args: {
        id: { type: graphql_1.GraphQLID },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = args.id;
            yield Inventorys_1.Inventorys.delete(id);
            return { successful: true, message: "DELETE WORKED" };
        });
    },
};
