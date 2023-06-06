import ExpressRequest from "../../io/express.request";
import ExpressResponse from "../../io/express.response";
import { Get } from "../app";
import BaseController from "./base.controller";
import { StatusCode, Awaitable } from "kwix";

@Get("/me")
export default class GetMeController extends BaseController {
  protected onError?: ((error: Error) => unknown) | undefined;
  protected status(code: StatusCode): Awaitable<ExpressResponse> {
    throw new Error("Method not implemented.");
  }
  protected success<T>(value?: T | undefined): Awaitable<ExpressResponse> {
    throw new Error("Method not implemented.");
  }
  protected badRequest(
    reason?: string | undefined
  ): Awaitable<ExpressResponse> {
    throw new Error("Method not implemented.");
  }
  protected unauthorized(
    reason?: string | undefined
  ): Awaitable<ExpressResponse> {
    throw new Error("Method not implemented.");
  }
  protected forbidden(reason?: string | undefined): Awaitable<ExpressResponse> {
    throw new Error("Method not implemented.");
  }
  protected notFound(reason?: string | undefined): Awaitable<ExpressResponse> {
    throw new Error("Method not implemented.");
  }
  protected formError(errors: object): Awaitable<ExpressResponse> {
    throw new Error("Method not implemented.");
  }
  protected error(error?: Error | undefined): Awaitable<ExpressResponse> {
    throw new Error("Method not implemented.");
  }
  public constructor(req: ExpressRequest, res: ExpressResponse) {
    super(req, res);
  }

  protected async handle() {
    return this.success({
      name: "John Doe",
      email: "",
    });
  }
}
