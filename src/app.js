import express from 'express';
import cors from 'cors';
import routes from './routes';

import './database'

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  
  middlewares() {
    //tamanho configurado no express e no nginx
    this.server.use(express.json({limit: '100mb'}));
    this.server.use(express.static('public'))
    this.server.set('view engine', 'ejs');
    this.server.set('views', './public/views');
  }

  routes() {
    this.server.use(cors());
    this.server.use(routes);
  }
}

export default new App().server;
