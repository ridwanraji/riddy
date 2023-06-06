import { ConcreteController, Controller, RouteMethod, Server } from "kwix";
import ExpressRequest from "./express.request";
import ExpressResponse from "./express.response";
import { Express } from "express";

export default class ExpressServer extends Server<
  ExpressRequest,
  ExpressResponse
> {
  private express: Express;

  public constructor(express: Express) {
    super();
    this.express = express;
  }

  public handle({
    method,
    route,
    Controller,
  }: {
    method: RouteMethod;
    route: string;
    Controller: ConcreteController<
      ExpressRequest,
      ExpressResponse,
      Controller<ExpressRequest, ExpressResponse>
    >;
  }): void {
    this.express[method](route, async (req, res) => {
      await new Controller(
        new ExpressRequest(req),
        new ExpressResponse(res)
      ).run();
    });

    // this.fastify.route({
    //   method: method.toUpperCase() as HTTPMethods,
    //   url: route,
    //   async handler(req, res) {
    //     await new Controller(
    //       new FastifyRequest(req),
    //       new FastifyResponse(res)
    //     ).run();
    //   },
    // });
  }
}
