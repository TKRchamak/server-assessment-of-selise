import express, { Application } from "express";
import cors from "cors";


const jsonServer = require('json-server');
const path = require('path')
const router = jsonServer.router(path.join(__dirname, './app/db/db.json'))
const server = jsonServer.create()
const middlewares = jsonServer.defaults()

const app: Application = express();
server.use(middlewares)

// using cors
app.use(cors({ credentials: true, origin: true }));

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application Router
app.use('/', router);

export default app;

