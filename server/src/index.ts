import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./Schema";
import cors from "cors";
import { Users } from "./Entities/Users";

import { Inventorys } from "./Entities/Inventorys";
import { createConnection } from "typeorm";

const main = async () => {
    await createConnection({
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
        entities: [Users,Inventorys],
      });
    const app = express();
    app.use(cors());
    app.use(express.json());
      app.use(
        "/graphql",
        graphqlHTTP({
          schema,
          graphiql: true,
        })
      );
      
      app.set("port",process.env.PORT||5000)
    app.listen(process.env.PORT||5000, () => {
    console.log("SERVER RUNNING ON PORT 5000");
    });
};

main().catch((err) => {
  console.log(err);
});