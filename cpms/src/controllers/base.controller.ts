import { MiddlewareController } from "kwix";
import ExpressRequest from "../../io/express.request";
import ExpressResponse from "../../io/express.response";

export default abstract class BaseController extends MiddlewareController<
  ExpressRequest,
  ExpressResponse
> {
  public constructor(req: ExpressRequest, res: ExpressResponse) {
    super(req, res);

    this.success = this.success.bind(this);
    this.badRequest = this.badRequest.bind(this);
    this.unauthorized = this.unauthorized.bind(this);
    this.forbidden = this.forbidden.bind(this);
    this.notFound = this.notFound.bind(this);
  }
}
