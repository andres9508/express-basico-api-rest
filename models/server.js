import express from "express";
import cors from "cors";
import users from "../routes/users.router.js";
import admin from "../routes/admin.route..js";

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //Middlewares
    this.middlewares();

    this.routes();
  }

  middlewares() {
    //CORS
    this.app.use(cors());
    //directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use("/api/users", users);
    this.app.use("/api/admin", admin);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor en puerto : ", this.port);
    });
  }
}

export default Server;
