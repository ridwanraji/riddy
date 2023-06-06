import { Router } from "kwix";
import ExpressRequest from "./express.request";
import ExpressResponse from "./express.response";
import ExpressServer from "./express.server";

export default class ExpressRouter extends Router<
  ExpressRequest,
  ExpressResponse
> {
  protected server: ExpressServer;

  public constructor(server: ExpressServer) {
    super();
    this.server = server;
  }
}
