import express from "express";
import ExpressServer from "../io/express.server";
import ExpressRouter from "../io/express.router";

const app = express();

export const { Get, Post, Put, Patch, Delete } = new ExpressRouter(
  new ExpressServer(app)
).methods();

export default app;
