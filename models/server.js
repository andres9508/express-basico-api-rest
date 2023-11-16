import express from "express";

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //Middlewares
    this.middlewares();

    this.routes();
  }

  middlewares() {
    this.app.use(express.static('public'));//directorio publico
  }

  routes() {
    this.app.get("/", (req, res) => {
      res.send("Hola Mundo");
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor en puerto : ", this.port);
    });
  }
}

export default Server;
