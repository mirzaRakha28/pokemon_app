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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const Schema_1 = require("./Schema");
const cors_1 = __importDefault(require("cors"));
const Users_1 = require("./Entities/Users");
const Inventorys_1 = require("./Entities/Inventorys");
const typeorm_1 = require("typeorm");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, typeorm_1.createConnection)({
        "type": "mysql",
        "host": "u6354r3es4optspf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        "port": 3306,
        "username": "z8l9m2rh4o9tc426",
        "password": "fxbjpy8ob0pk5py2",
        "database": "nyq0ozx3beqp99yg",
        // type: "mysql",
        // database: "tokopedia",
        // username: "root",
        // password: "",
        // "logging": true,
        // synchronize: false,
        entities: [Users_1.Users, Inventorys_1.Inventorys],
    });
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use("/graphql", (0, express_graphql_1.graphqlHTTP)({
        schema: Schema_1.schema,
        graphiql: true,
    }));
    app.set("port", process.env.PORT || 5000);
    app.listen(process.env.PORT || 5000, () => {
        console.log("SERVER RUNNING ON PORT 5000");
    });
});
main().catch((err) => {
    console.log(err);
});
